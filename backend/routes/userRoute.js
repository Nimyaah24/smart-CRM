// express framework import cheyyunnu route management cheyyan
const express = require('express')

// router instance create cheyyunnu API endpoints handle cheyyan
const Router = express.Router()

// user related controller functions import cheyyunnu
const userController = require("../controller/userController")

// protected routes access cheyyan authentication middleware import cheyyunnu
const authmiddileware = require("../middileware/authmiddileware")

// user registration API route
Router.post("/register", userController.register)

// user login API route
Router.post("/login", userController.login)

// authenticated user profile fetch cheyyan API route
Router.get("/profile", authmiddileware, userController.profile)

// authenticated user details update cheyyan API route
Router.put('/update/:id', authmiddileware, userController.updateUsers)

// authenticated user account delete cheyyan API route
Router.delete('/delete/:id', authmiddileware, userController.deleteUsers)

// forgot password request handle cheyyan API route
Router.post('/forgotpassword', userController.forgotPassword)

// user logout API route
Router.post("/logout", userController.logout)

// router export cheyyunnu server.js-il use cheyyan
module.exports = Router
