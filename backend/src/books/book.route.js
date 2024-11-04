const express = require("express");
const router = express.Router();
const Book = require("./book.model"); // Use require to import the Book model

router.post("/create-book", async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(201)
      .send({ message: "Book posted successfully", book: newBook });
    console.log("Book Saved ");
  } catch (error) {
    console.log("Error creating a Book", error);
    res.status(500).send({ message: "Error creating a Book" });
  }
});

module.exports = router; // Export the router
