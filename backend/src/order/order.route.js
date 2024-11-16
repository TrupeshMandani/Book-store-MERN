const express = require("express");
const router = express.Router();
const { createAOrder } = require("./order.controller");
// Create order Endpoint
router.post("/", createAOrder);
module.exports = router;
