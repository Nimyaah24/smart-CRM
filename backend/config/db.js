
// mongodb connect cheyan mongoose vnm      6
const mongoose = require('mongoose')

// .env values load aavn      7
require('dotenv').config()

// db connect function create chyunu      8
const connectDB = async () => {

    // error handle cheyan      9
    try {

        // .env ile MONGO_URL use chyunu       10
        // process.env .env values access cheyan
        // MONGO_URL .env ile variable name
        await mongoose.connect(process.env.MONGO_URL)

        // success      11
        console.log("mongodb connected successfully");
    }

    // error      12
    catch (err) {
        console.log("mongodb is not connected");
    }
}

// server.jsil use chyennaghil exports chyanm      13
module.exports=connectDB