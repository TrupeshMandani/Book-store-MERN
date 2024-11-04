import mongoose from "mongoose";

const mongoose = require("mongoose");

/* The code snippet you provided is defining a Mongoose schema for a book entity. Let's break down what
each part of the schema is doing: */
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: false,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  trending: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  timeStamp: true,
});
/* `const Book = mongoose.model("Book", bookSchema);` is creating a Mongoose model named "Book" based
on the defined schema `bookSchema`. This model will be used to interact with the "books" collection
in the MongoDB database. */
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
