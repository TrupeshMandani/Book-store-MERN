// src/order/order.route.js
const express = require("express");
const router = express.Router();
const { createAOrder, getOrdersByEmail } = require("./order.controller"); // Ensure this path is correct

// POST: Create a new order
router.post("/", createAOrder);

// GET: Fetch orders by user email
router.get("/email/:email", getOrdersByEmail);

module.exports = router;
