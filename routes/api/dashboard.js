const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");
// const blogController = require("../../controllers/blogController");

// Matches with "/api/dashboard"
router.route("/")
    .get(weatherController.findAll);

    module.exports = router;