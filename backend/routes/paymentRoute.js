// express framework import cheyyunnu payment related routes create cheyyan
const express = require("express");

// Razorpay package import cheyyunnu online payment integration vendi
const Razorpay = require("razorpay");

// router instance create cheyyunnu payment APIs manage cheyyan
const router = express.Router();

// Razorpay key values console-il verify cheyyan print cheyyunnu
console.log("KEY_ID =", process.env.RAZORPAY_KEY_ID);
console.log("KEY_SECRET =", process.env.RAZORPAY_KEY_SECRET);

// Razorpay instance create cheyyunnu payment gateway connect cheyyan
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// payment order create cheyyan API route
router.post("/create-order", async (req, res) => {
  try {

    // order creation start aayath verify cheyyan log cheyyunnu
    console.log("Creating Razorpay Order...");

    // Razorpay-il new payment order create cheyyunnu
    const order = await razorpay.orders.create({
      amount: 49900, // amount paise-il (₹499)
      currency: "INR", // Indian Rupee currency set cheyyunnu
      receipt: "premium_plan", // order receipt name set cheyyunnu
    });

    // created order details console-il print cheyyunnu
    console.log("ORDER CREATED:", order);

    // created order frontend-il return cheyyunnu
    res.json(order);

  } catch (err) {

    // error vannal console-il print cheyyunnu
    console.log("RAZORPAY ERROR:", err);

    // error response frontend-il send cheyyunnu
    res.status(500).json({
     message: "Order creation failed",
      error: err,
    });
  }
});

// router export cheyyunnu server.js-il use cheyyan
module.exports = router;