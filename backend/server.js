// express framework import cheyyunnu server create cheyyan
const express = require('express')

// frontend-backend communication allow cheyyan cors import cheyyunnu
const cors = require('cors')

// browser cookies read cheyyanum manage cheyyanum cookie-parser import cheyyunnu
const cookieParser = require('cookie-parser')

// mongodb database connect cheyyan db connection function import cheyyunnu
const connectDB = require("./config/db")

// user related routes import cheyyunnu
const userRoute = require("./routes/userRoute")

// customer management routes import cheyyunnu
const customerRoutes = require("./routes/customerRoute")

// project management routes import cheyyunnu
const projectRoutes = require("./routes/projectRoute")

// task management routes import cheyyunnu
const taskRoutes = require("./routes/taskRoutes")

// analytics dashboard routes import cheyyunnu
const analyticsRoute = require("./routes/analyticsRoute")

// payment integration routes import cheyyunnu
const paymentRoute = require("./routes/paymentRoute")

// express application instance create cheyyunnu
const app = express()

// frontend requests allow cheyyan cors middleware use cheyyunnu
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://smart-crm-i65u.vercel.app"
  ],
  credentials: true
}))

// cookies access cheyyan middleware use cheyyunnu
app.use(cookieParser())

// frontend-il ninn varunna JSON data parse cheyyan middleware use cheyyunnu
app.use(express.json())

// user related APIs register cheyyunnu
app.use('/api/user', userRoute)

// customer related APIs register cheyyunnu
app.use("/api/customer", customerRoutes)

// project related APIs register cheyyunnu
app.use("/api/project", projectRoutes)

// task related APIs register cheyyunnu
app.use("/api/task", taskRoutes)

// analytics related APIs register cheyyunnu
app.use("/api/analytics", analyticsRoute)

// payment related APIs register cheyyunnu
app.use("/api/payment", paymentRoute)

// mongodb database connection establish cheyyunnu
connectDB()

// backend server port 5000-il start cheyyunnu
app.listen(5000, () => {
console.log("server running");
})
