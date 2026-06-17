// express framework import cheyyunnu customer routes create cheyyan
const express = require("express")

// router instance create cheyyunnu customer APIs manage cheyyan
const router = express.Router()

// customer controller import cheyyunnu customer functions use cheyyan
const customerController = require("../controller/customerController")

// customer add cheyyan POST API route create cheyyunnu
router.post("/add", customerController.addCustomer)

// ella customers fetch cheyyan GET API route create cheyyunnu
router.get("/all", customerController.getCustomers)

// customer delete cheyyan DELETE API route create cheyyunnu
router.delete("/delete/:id", customerController.deleteCustomer)

// customer update cheyyan PUT API route create cheyyunnu
router.put("/update/:id", customerController.updateCustomer)

// router export cheyyunnu server.js-il use cheyyan
module.exports = router