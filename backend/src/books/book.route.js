const express = require("express");
const router = express.Router();

// post a book

/* The code `router.post("/create-book", async (req, res) => {
  console.log(req.body);
});` is defining a route in an Express application that listens for POST requests to the
"/create-book" endpoint. When a POST request is made to this endpoint, the provided callback
function is executed. */
router.post("/create-book", async (req, res) => {
  console.log(req.body);
});
module.exports = router;
