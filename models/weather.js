const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    name: String,
    date: String,
    description: String,
    icon: String,
    temperature: String 
})

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;