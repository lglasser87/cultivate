const mongoose = require("mongoose");
const db =  require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/cultivate"
);

  const weatherSeed = [
    {
      name: "Chula Vista",
      date: "Sat 6/13/2020",
      description: "Clear Sky",
      icon: "",
      temperature: "64 Deg F" 
    },
    {
      name: "Chula Vista",
      date: "Sun 6/14/2020",
      description: "Clear Sky",
      icon: "",
      temperature: "66 Deg F" 
    },
    {
      name: "Chula Vista",
      date: "Mon 6/15/2020",
      description: "Few Clouds",
      icon: "",
      temperature: "67 Deg F" 
    },
    {
      name: "Chula Vista",
      date: "Tues 6/16/2020",
      description: "",
      icon: "",
      temperature: "67 Deg F" 
    },
    {
      name: "Chula Vista",
      date: "Wed 6/17/2020",
      description: "Clear Sky",
      icon: "",
      temperature: "67 Deg F" 
    },
]

db.Weather
  .remove({})
  .then(() => db.Weather.collection.insertMany(weatherSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });