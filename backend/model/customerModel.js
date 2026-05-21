// mongoose import cheyunnu
const mongoose = require("mongoose")


// customer schema create cheyunnu
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

            // default active
            default: "Active"
        },

        // customer location
        location: {
            type: String
        },

        // customer image
        image: {
            type: String,

            // default profile image
            default:
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }

    },{   timestamps: true}                  // automatic createdAt updatedAt

)


// collection create cheyunnu
const Customer = mongoose.model( "customer",customerSchema)


// export cheyunnu
module.exports = Customer