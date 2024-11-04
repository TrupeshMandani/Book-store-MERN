const express = require("express");
const router = express.router();

// post a book
/* This code snippet is defining a POST route using Express. When a POST request is made to the
specified route ("/"), it creates a new instance of a Book model with the data from the request
body. It then attempts to save this new book to the database asynchronously. If the book is
successfully saved, it responds with a status of 200 and sends the saved book as a JSON response. If
there is an error during the saving process, it catches the error, responds with a status of 500,
and sends the error as a JSON response. */
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});
