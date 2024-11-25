const express = require("express");
const router = express.Router();
const Book = require("./book.model"); // Use require to import the Book model
const {
  PostABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");

/* This line of code is setting up a POST route for creating a new book in the application. When a POST
request is made to the "/create-book" endpoint, the `PostABook` function from the `book.controller`
module will be called to handle the request and create a new book. */
router.post("/create-book", verifyAdminToken, PostABook);

// get all books
router.get("/", getAllBooks);

//Get a Single Book
router.get("/:id", getSingleBook);

// update a Book EndPoint
router.put("/edit/:id", updateBook);

// Delet a Book EndPoint
router.delete("/delete/:id", deleteBook);

module.exports = router; // Export the router
