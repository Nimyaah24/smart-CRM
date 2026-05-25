// mongoose import
const mongoose = require("mongoose")



// ========================================
// CUSTOMER SCHEMA
// ========================================
const customerSchema = new mongoose.Schema(

    {

        // customer name
        name: {
            type: String,
            required: true
        },



        // customer email
        email: {
            type: String,
            required: true,
            unique: true
        },



        // customer phone
        phone: {
            type: String,
            required: true
        },



        // customer company
        company: {
            type: String
        },



        // customer status
        status: {

            type: String,

            default: "Active"

        },



        // customer location
        location: {
            type: String
        },



        // customer image
        image: {

            type: String,

            default:
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"

        }

    },

    {
        timestamps: true
    }

)



// model create
const Customer = mongoose.model(
    "Customer",
    customerSchema
)



// export
module.exports = Customer