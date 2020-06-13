const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  season: { type: String, required: true },
  gettingStarted: String,
  howToMaintain: String,
  rotate: String,
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;