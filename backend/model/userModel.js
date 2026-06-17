// mongodb import cheyyunnu schema create cheyyanum database interact cheyyanum
const mongoose = require('mongoose')

// user collectioninte structure define cheyyan schema create cheyyunnu
const userSchema = new mongoose.Schema({

// userinte name store cheyyan field create cheyyunnu
name: {
    type: String,
    required: true
},

// userinte email store cheyyan field create cheyyunnu
email: {
    type: String,
    required: true,
    unique: true
},

// userinte password store cheyyan field create cheyyunnu
password: {
    type: String,
    required: true
},

// email verification OTP store cheyyan field create cheyyunnu
otp: {
    type: String
},

// user verify cheythittundo enn track cheyyan field create cheyyunnu
isVerified: {
    type: Boolean,
    default: false
}
},

// createdAt um updatedAt um automatic aayi save cheyyan timestamps enable cheyyunnu
{ timestamps: true })

// user schema use cheyth mongodb model create cheyyunnu
const User = mongoose.model("user", userSchema)

// model export cheyyunnu vere files-il use cheyyan
module.exports = User