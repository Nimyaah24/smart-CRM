// express import
const express = require("express")

// router create
const router = express.Router()

// controller import
const customerController =
    require("../controller/customerController")



// ========================================
// ADD CUSTOMER
// ========================================
router.post(
    "/add",
    customerController.addCustomer
)



// ========================================
// GET ALL CUSTOMERS
// ========================================
router.get(
    "/all",
    customerController.getCustomers
)



// ========================================
// DELETE CUSTOMER
// ========================================
router.delete(
    "/delete/:id",
    customerController.deleteCustomer
)



// ========================================
// UPDATE CUSTOMER
// ========================================
router.put(
    "/update/:id",
    customerController.updateCustomer
)



// export router
module.exports = router