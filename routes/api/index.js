const router = require("express").Router();
const dashboardRoutes = require("./dashboard");
const blogsRoutes = require("./blogs");

// Dashboard routes
router.use("/dashboard", dashboardRoutes);
router.use("/blogs", blogsRoutes);

module.exports = router;