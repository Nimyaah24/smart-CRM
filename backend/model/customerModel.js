// mongodb database interact cheyyan mongoose import cheyyunnu
const mongoose = require("mongoose")

// customer collectioninte structure define cheyyan schema create cheyyunnu
const customerSchema = new mongoose.Schema(

    {

        // customer name store cheyyan field create cheyyunnu
        name: {
            type: String,
            required: true
        },

        // customer email store cheyyan field create cheyyunnu
        email: {
            type: String,
            required: true,
            unique: true
        },

        // customer phone number store cheyyan field create cheyyunnu
        phone: {
            type: String,
            required: true
        },

        // customer company name store cheyyan field create cheyyunnu
        company: {
            type: String
        },

        // customer status store cheyyan field create cheyyunnu
        status: {
            type: String,
            default: "Active"
        },

        // customer location store cheyyan field create cheyyunnu
        location: {
            type: String
        },

        // customer profile image store cheyyan field create cheyyunnu
        image: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }

    },

    // createdAt um updatedAt um automatic aayi save cheyyan timestamps enable cheyyunnu
    {
        timestamps: true
    }

)

// customer schema use cheyth mongodb model create cheyyunnu
const Customer = mongoose.model("Customer", customerSchema)

// customer model export cheyyunnu vere files-il use cheyyan
module.exports = Customer