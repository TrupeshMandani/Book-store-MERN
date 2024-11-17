const express = require("express");
const router = express.Router();
const { createAOrder, getOrdersByEmail } = require("./order.controller");
router.post("/", createAOrder);

// get orders by user Email
router.get("/email/:email", getOrdersByEmail);
module.exports = router;
