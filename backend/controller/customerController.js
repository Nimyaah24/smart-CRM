// customer data database-il manage cheyyan Customer model import cheyyunnu
const Customer = require("../model/customerModel")

// new customer create cheyyan addCustomer function create cheyyunnu
const addCustomer = async (req, res) => {

    try {

        // frontend-il ninn customer details edukunnu
        const { name, email, phone, location } = req.body

        // same email already database-il undo enn check cheyyunnu
        const existingCustomer = await Customer.findOne({ email })

        // customer already undenkil response return cheyyunnu
        if (existingCustomer) {
            return res.status(400).json({ msg: "customer already exists" })
        }

        // customer database-il save cheyyunnu
        const newCustomer = await Customer.create({ name, email, phone, location })

        // add success response return cheyyunnu
        res.status(201).json({ msg: "customer added", newCustomer })

    }

    catch (err) {

        // error console-il display cheyyunnu
        console.log(err)

        // add failed response return cheyyunnu
        res.status(500).json({ msg: "add customer failed" })

    }

}

// ella customers fetch cheyyan getCustomers function create cheyyunnu
const getCustomers = async (req, res) => {

    try {

        // database-il ninn ella customers fetch cheyyunnu
        const customers = await Customer.find()

        // fetch success response return cheyyunnu
        res.status(200).json({ msg: "all customers", customers })

    }

    catch (err) {

        // error console-il display cheyyunnu
        console.log(err)

        // fetch failed response return cheyyunnu
        res.status(500).json({ msg: "get customers failed" })

    }

}

// customer delete cheyyan deleteCustomer function create cheyyunnu
const deleteCustomer = async (req, res) => {

    try {

        // params-il ninn customer id edukunnu
        const { id } = req.params

        // customer database-il ninn delete cheyyunnu
        const deletedCustomer = await Customer.findByIdAndDelete(id)

        // customer kandethiyillenkil response return cheyyunnu
        if (!deletedCustomer) {
            return res.status(404).json({ msg: "customer not found" })
        }

        // delete success response return cheyyunnu
        res.status(200).json({ msg: "customer deleted" })

    }

    catch (err) {

        // error console-il display cheyyunnu
        console.log(err)

        // delete failed response return cheyyunnu
        res.status(500).json({ msg: "delete customer failed" })

    }

}

// customer details update cheyyan updateCustomer function create cheyyunnu
const updateCustomer = async (req, res) => {

  try {

    // params-il ninn customer id edukunnu
    const { id } = req.params

    // debugging-n vendi id console-il display cheyyunnu
    console.log("ID =", id)

    // debugging-n vendi id length display cheyyunnu
    console.log("ID LENGTH =", id.length)

    // debugging-n vendi request body display cheyyunnu
    console.log("BODY =", req.body)

    // customer details database-il update cheyyunnu
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, { returnDocument: "after" })

    // debugging-n vendi updated customer display cheyyunnu
    console.log("UPDATED =", updatedCustomer)

    // customer kandethiyillenkil response return cheyyunnu
    if (!updatedCustomer) {
      return res.status(404).json({ msg: "customer not found" })
    }

    // update success response return cheyyunnu
    res.status(200).json({ msg: "customer updated", updatedCustomer })

  } catch (err) {

    // update error console-il display cheyyunnu
    console.log("UPDATE ERROR =", err)

    // update failed response return cheyyunnu
    res.status(500).json({ msg: "update customer failed", error: err.message })

  }

}

// controller functions export cheyyunnu route files-il use cheyyan
module.exports = { addCustomer, getCustomers, deleteCustomer, updateCustomer }