
// express import cheyunu express vechan server create cheyunnath      14
const express = require('express')

// frontend backend connect cheyan cors vnm illeghil request block avm     15
const cors = require('cors')

// cookies require
const cookieParser = require('cookie-parser')

// db import cheyunnu connect function use cheyan vndit    16
const connectDB = require("./config/db")

// connect route in server.js         46
const userRoute = require("./routes/userRoute")

// customer routes import
const customerRoutes =require("./routes/customerRoute")

// express application create chyunnnu back end wrk aavunnath app use chythan    17
const app = express()

// frontrnd request allow cheyan -- middileware use cheyan     18
app.use(cors({
    origin: "http://localhost:5174",
    origin: true,
    credentials: true
}))

app.use(cookieParser())

// frontend data varumbo json data aayt read cheyan    19
app.use(express.json())

// server path setting [main part]         47
app.use('/api/user', userRoute)

// customer api
app.use("/api/customer", customerRoutes)

// db connection function call cheyunnu without this mongodb connect aavila    20
connectDB()

// server starting     21
app.listen(5000, () => {
    console.log("server running");
})



