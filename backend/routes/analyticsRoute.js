// express framework import cheyyunnu analytics routes create cheyyan
const express = require("express")

// router instance create cheyyunnu analytics related APIs manage cheyyan
const router = express.Router()

// analytics controller-il ninn getAnalytics function import cheyyunnu dashboard data fetch cheyyan
const { getAnalytics } = require("../controller/analyticsController")

// dashboard analytics data fetch cheyyan GET API route create cheyyunnu
router.get("/dashboard", getAnalytics)

// router export cheyyunnu server.js-il use cheyyan
module.exports = router