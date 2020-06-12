const db = require("../models");
const axios = require("axios");

// Defining methods for the weatherController
module.exports = {
  findAll: function(req, res) {
    db.Weather
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Weather
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Weather
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Weather
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Weather
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getWeather: function(req, res) {
    console.log("hit")
    axios
      .get("api.openweathermap.org/data/2.5/forecast?zip=91911,us&appid=fe951b8646526da66ff9e2daee1a81e6")
        .then((data)=>{
          console.log(data)
          res.json()
        })
        .catch(err => console.log(err));
  }
};
