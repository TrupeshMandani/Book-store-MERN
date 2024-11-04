const express = require("express");
const router = express.Router();
const Book = require("./book.model"); // Use require to import the Book model
const {
  PostABook,
  getAllBooks,
  getSingleBook,
  updateBook,
} = require("./book.controller");

/* This line of code is setting up a POST route for creating a new book in the application. When a POST
request is made to the "/create-book" endpoint, the `PostABook` function from the `book.controller`
module will be called to handle the request and create a new book. */
router.post("/create-book", PostABook);

// get all books
router.get("/", getAllBooks);

//Get a Single Book
router.get("/:id", getSingleBook);

// update a Book EndPoint
router.put("/edit/:id", updateBook);
module.exports = router; // Export the router
