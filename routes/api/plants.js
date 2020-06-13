const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/blogs"
router
  .route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/blogs/:id"
router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .delete(plantsController.remove);

module.exports = router;
