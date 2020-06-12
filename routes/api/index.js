const router = require("express").Router();
const dashboardRoutes = require("./dashboard")

// Dashboard routes
router.use("/dashboard", dashboardRoutes);

module.exports = router;