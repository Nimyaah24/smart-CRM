// customer model import cheyunnu
const Customer = require("../model/customerModel")


// ADD CUSTOMER

const addCustomer = async (req, res) => {

    try {
        // bodyil ninn data edukunnu
        const {  name, email, phone, location} = req.body

        // email already indo check
        const existingCustomer =await Customer.findOne({ email })

        // already undenghil
        if (existingCustomer) { return res.status(400).json({ msg: "customer already exists" })
        }

        // database save
        const newCustomer = await Customer.create({ name, email,phone,location })

        // success response
        res.status(201).json({ msg: "customer added", newCustomer})

    }

    // error
    catch (err) {
        res.status(500).json({ msg: "add customer failed"})
    }

}


// GET ALL CUSTOMERS

const getCustomers = async (req, res) => {

    try {

        // databaseil ninn customers fetch
        const customers = await Customer.find()

        // response
        res.status(200).json({ msg: "all customers", customers})

    }

    // error
    catch (err) {

        res.status(500).json({ msg: "get customers failed" })

    }

}


// DELETE CUSTOMER

const deleteCustomer = async (req, res) => {

    try {

        // paramsil ninn id edukunnu
        const { id } = req.params

        // customer delete
        const deletedCustomer = await Customer.findByIdAndDelete(id)

        // customer illeghil
        if (!deletedCustomer) {

            return res.status(404).json({  msg: "customer not found" })

        }

        // success response
        res.status(200).json({msg: "customer deleted"})

    }

    // error
    catch (err) {

        res.status(500).json({ msg: "delete customer failed"})

    }

}


// UPDATE CUSTOMER

const updateCustomer = async (req, res) => {

    try {

        // paramsil ninn id edukunnu
        const { id } = req.params

        // update cheyunnu
        const updatedCustomer =await Customer.findByIdAndUpdate( id, req.body, {new: true } )

        // customer illeghil
        if (!updatedCustomer) {

            return res.status(404).json({ msg: "customer not found" })

        }

        // success response
        res.status(200).json({ msg: "customer updated",updatedCustomer })

    }

    // error
    catch (err) {

        res.status(500).json({ msg: "update customer failed"})

    }

}



// export functions
module.exports = {addCustomer, getCustomers, deleteCustomer, updateCustomer}