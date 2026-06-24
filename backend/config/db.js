// mongodb connect cheyyan mongoose import cheyyunnu
const mongoose = require('mongoose')

// .env file values load cheyyan dotenv import cheyyunnu
require('dotenv').config()

// mongodb connection function create cheyyunnu
const connectDB = async () => {

    // database connection error handle cheyyan try block use cheyyunnu
    try {

        // .env-il store cheytha MONGO_URL use cheyth mongodb connect cheyyunnu
await mongoose.connect(process.env.MONGO_URL)

        // mongodb connect success message print cheyyunnu
        console.log("mongodb connected successfully");
    }

    // database connection fail aayal error handle cheyyunnu
    catch (err) {
        console.log("mongodb is not connected");
    }
}

// server.js-il use cheyyan connectDB function export cheyyunnu
module.exports = connectDB