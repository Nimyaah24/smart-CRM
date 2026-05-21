// express import
const express = require("express")

// router create
const router = express.Router()

// controller import
const customerController =
    require("../controller/customerController")


// ROUTES
// add customer
router.post( "/add", customerController.addCustomer)

// get customers
router.get("/all", customerController.getCustomers)

// delete customer
router.delete("/delete/:id",customerController.deleteCustomer)

// update customer
router.put("/update/:id",customerController.updateCustomer)


// export router
module.exports = router