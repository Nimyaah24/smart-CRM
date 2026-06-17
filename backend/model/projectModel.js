// mongodb database interact cheyyan mongoose import cheyyunnu
const mongoose = require("mongoose")

// project collectioninte structure define cheyyan schema create cheyyunnu
const projectSchema = new mongoose.Schema({

    // project title store cheyyan field create cheyyunnu
    title: {
        type: String,
        required: true
    },

    // project budget store cheyyan field create cheyyunnu
    budget: {
        type: String,
        required: true
    },

    // project deadline store cheyyan field create cheyyunnu
    deadline: {
        type: String,
        required: true
    },

    // project progress percentage store cheyyan field create cheyyunnu
    progress: {
        type: Number,
        default: 0
    },

    // project status store cheyyan field create cheyyunnu
    status: {
        type: String,
        default: "Pending"
    }

},

// createdAt um updatedAt um automatic aayi save cheyyan timestamps enable cheyyunnu
{
    timestamps: true
})

// project schema use cheyth mongodb model create cheyth export cheyyunnu
module.exports = mongoose.model( "Project", projectSchema)