// express framework import cheyyunnu route management cheyyan
const express = require("express")

// router instance create cheyyunnu task related APIs handle cheyyan
const router = express.Router()

// task controller functions import cheyyunnu
const taskController =
require("../controller/taskController")

// new task create cheyyan API route
router.post("/add",taskController.addTask)

// ella tasks fetch cheyyan API route
router.get("/all",taskController.getTasks)

// existing task update cheyyan API route
router.put("/update/:id",taskController.updateTask)

// task delete cheyyan API route
router.delete("/delete/:id",taskController.deleteTask)

// router export cheyyunnu server.js-il use cheyyan
module.exports = router
