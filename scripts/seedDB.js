const mongoose = require("mongoose");
const db =  require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/cultivate"
);

const plantSeed = [
  {
      name: "Test",
      description: "test",
      season: "test",
      gettingStarted: "test",
      howToMaintain: "test",
      rotate: "test"
  }
]

db.Plant
.remove({})
.then(() => db.Plant.collection.insertMany(plantSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
