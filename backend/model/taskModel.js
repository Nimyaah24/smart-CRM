// mongodb database interact cheyyan mongoose import cheyyunnu
const mongoose = require("mongoose")

// task collectioninte structure define cheyyan schema create cheyyunnu
const taskSchema = new mongoose.Schema(

  // task title store cheyyan field create cheyyunnu
  {
    title: {
      type: String,
      required: true
    },

    // task priority store cheyyan field create cheyyunnu
    priority: {
      type: String,
      default: "Low"
    },

    // task status store cheyyan field create cheyyunnu
    status: {
      type: String,
      default: "Pending"
    },

    // task deadline store cheyyan field create cheyyunnu
    deadline: {
      type: String
    }
  },

  // createdAt um updatedAt um automatic aayi save cheyyan timestamps enable cheyyunnu
  {
    timestamps: true
  }
)

// task schema use cheyth mongodb model create cheyth export cheyyunnu
module.exports = mongoose.model("Task",taskSchema)