// customer model import
const Customer = require("../model/customerModel")



// ========================================
// ADD CUSTOMER
// ========================================
const addCustomer = async (req, res) => {

    try {

        // body il ninn data edukunnu
        const {
            name,
            email,
            phone,
            location
        } = req.body


        // existing customer check
        const existingCustomer =
            await Customer.findOne({ email })


        // already customer undenghil
        if (existingCustomer) {

            return res.status(400).json({
                msg: "customer already exists"
            })

        }


        // database save
        const newCustomer =
            await Customer.create({

                name,
                email,
                phone,
                location

            })


        // success response
        res.status(201).json({

            msg: "customer added",
            newCustomer

        })

    }

    catch (err) {

        console.log(err)

        res.status(500).json({
            msg: "add customer failed"
        })

    }

}




// ========================================
// GET CUSTOMERS
// ========================================
const getCustomers = async (req, res) => {

    try {

        // all customers fetch
        const customers =
            await Customer.find()


        // response
        res.status(200).json({

            msg: "all customers",
            customers

        })

    }

    catch (err) {

        console.log(err)

        res.status(500).json({
            msg: "get customers failed"
        })

    }

}




// ========================================
// DELETE CUSTOMER
// ========================================
const deleteCustomer = async (req, res) => {

    try {

        // id params il ninn edukunnu
        const { id } = req.params


        // delete customer
        const deletedCustomer =
            await Customer.findByIdAndDelete(id)


        // customer illenghil
        if (!deletedCustomer) {

            return res.status(404).json({
                msg: "customer not found"
            })

        }


        // success response
        res.status(200).json({
            msg: "customer deleted"
        })

    }

    catch (err) {

        console.log(err)

        res.status(500).json({
            msg: "delete customer failed"
        })

    }

}




// ========================================
// UPDATE CUSTOMER
// ========================================
const updateCustomer = async (req, res) => {

    try {

        // id params il ninn edukunnu
        const { id } = req.params


        // update customer
        const updatedCustomer =
            await Customer.findByIdAndUpdate(

                id,

                req.body,

                {
                    new: true
                }

            )


        // customer illenghil
        if (!updatedCustomer) {

            return res.status(404).json({
                msg: "customer not found"
            })

        }


        // success response
        res.status(200).json({

            msg: "customer updated",
            updatedCustomer

        })

    }

    catch (err) {

        console.log(err)

        res.status(500).json({
            msg: "update customer failed"
        })

    }

}




// export functions
module.exports = {

    addCustomer,
    getCustomers,
    deleteCustomer,
    updateCustomer

}