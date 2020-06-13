const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");

// Matches with "/api/dashboard"
router.route("/")
    .get(weatherController.findAll);

    module.exports = router;