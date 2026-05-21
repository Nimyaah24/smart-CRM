
// import express route create cheyunnath express an        41
const express = require('express')

// router create cheyunnu  api routes andle cheyan       42
const Router=express.Router()

// connecting controller          43
const userController=require("../controller/userController")

//middileware use cheyan import cheyunnu         75
const authmiddileware =require("../middileware/authmiddileware")

// setting path           44
Router.post("/register",userController.register)

//login api create cheyunnu        60
Router.post("/login",userController.login)

// login chytha user data fetch aavan           76
Router.get("/profile",authmiddileware,userController.profile)    

// udate chytha user data fetch aavan           84
Router.put('/update/:id',authmiddileware,userController.updateUsers)

// delete chytha user data fetch aavan           91
Router.delete('/delete/:id',authmiddileware,userController.deleteUsers)

// new password send chythan          101
Router.post('/forgotpassword',userController.forgotPassword)

// logout
Router.post("/logout",userController.logout)

// server.jsil use cheyan vndit exports cheyunnu         45
module.exports=Router