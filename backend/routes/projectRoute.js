// express framework import cheyyunnu route management cheyyan
const express = require("express")

// router instance create cheyyunnu project related APIs handle cheyyan
const router = express.Router()

// project controller functions import cheyyunnu
const projectController = require("../controller/projectController")

// new project create cheyyan API route
router.post("/add", projectController.addProject)

// ella projects fetch cheyyan API route
router.get("/all", projectController.getProjects)

// existing project update cheyyan API route
router.put("/update/:id", projectController.updateProject)

// project delete cheyyan API route
router.delete("/delete/:id", projectController.deleteProject)

// router export cheyyunnu server.js-il use cheyyan
module.exports = router
