const express = require("express");
const router = express.Router();
import { Book } from "./book.model.js";
// post a book

/* The code `router.post("/create-book", async (req, res) => {
  console.log(req.body);
});` is defining a route in an Express application that listens for POST requests to the
"/create-book" endpoint. When a POST request is made to this endpoint, the provided callback
function is executed. */
router.post("/create-book", async (req, res) => {
  // console.log(req.body);
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
