const mongoose = require("mongoose");
const db =  require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/cultivate"
);

const plantSeed = [
  {
      name: "Fuji Apple",
      description: "Fuji apples are typically round and range from large to very large, averaging 75 mm in diameter. They contain between 9–11% sugars by weight and have a dense flesh that is sweeter and crisper than many other apple cultivars, making them popular with consumers around the world. Fuji apples also have a very long shelf life compared to other apples, even without refrigeration. With refrigeration, Fuji apples can remain fresh for up to a year.",
      season: "Year-round",
      gettingStarted: "They grow on trees",
      howToMaintain: "Water!",
      rotate: "TBD"
  },
  {
      name: "Banana",
      description: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.",
      season: "Year-round",
      gettingStarted: "They grow on trees",
      howToMaintain: "Water!",
      rotate: "TBD"
  },
  {
      name: "Pumpkin",
      description: "A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and most often deep yellow to orange in coloration.[1] The thick shell contains the seeds and pulp. The name is most commonly used for cultivars of Cucurbita pepo, but some cultivars of Cucurbita maxima, C. argyrosperma, and C. moschata with similar appearance are also sometimes called pumpkin.",
      season: "Year-round",
      gettingStarted: "They grow on vines",
      howToMaintain: "Water!",
      rotate: "TBD"
  },
  {
      name: "Russet Potato",
      description: "A russet potato is a type of potato that is large, with dark brown skin and few eyes. The flesh is white, dry, and mealy, and it is suitable for baking, mashing, and french fries. Russet potatoes are also known as Idaho potatoes in the United States.",
      season: "Year-round",
      gettingStarted: "They grow in the ground",
      howToMaintain: "Water!",
      rotate: "TBD"
  },
  {
      name: "Eggplant",
      description: "Eggplant (USA, Australia, New Zealand, anglophone Canada), aubergine (UK, Ireland, Quebec) or brinjal (South Asia, South Africa) is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition. As a member of the genus Solanum, it is related to the tomato and potato. Like the tomato, its skin and seeds can be eaten, but, like the potato, it is usually eaten cooked. Eggplant is nutritionally low in macronutrient and micronutrient content, but the capability of the fruit to absorb oils and flavors into its flesh through cooking expands its use in the culinary arts. It was originally domesticated from the wild nightshade species thorn or bitter apple, S. incanum, probably with two independent domestications: one in South Asia, and one in East Asia.",
      season: "Year-round",
      gettingStarted: "They grow on vines",
      howToMaintain: "Water!",
      rotate: "tbd"
  },
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
