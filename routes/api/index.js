const router = require("express").Router();
const dashboardRoutes = require("./dashboard");
const blogsRoutes = require("./blogs");
const plantsRoutes = require("./plants");

// routes
router.use("/dashboard", dashboardRoutes);
router.use("/blogs", blogsRoutes);
router.use("/plants", plantsRoutes);

module.exports = router;