const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    cityName: String,
    cityWeather: String,
    cityTemperature: Number 
})

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;