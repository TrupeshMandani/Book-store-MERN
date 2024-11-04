import mongoose from "mongoose";

const mongoose = require("mongoose");

/* This code snippet is defining a Mongoose schema for a "book" document in a MongoDB database. The
schema specifies the structure of the document by defining the fields it should have, along with
their data types and validation rules. */
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
    /* The line `default: Date.now,` in the Mongoose schema is setting a default value for the
    `createdAt` field. */
    default: Date.now,
  },

  timeStamp: true,
});

/* `const Book = mongoose.model("Book", bookSchema);` is creating a Mongoose model named "Book" based
on the defined schema `bookSchema`. This line of code is essentially creating a blueprint for
documents that will be stored in the MongoDB database collection named "books". The model allows you
to interact with the "books" collection in the database using methods provided by Mongoose, such as
creating, reading, updating, and deleting documents. */
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
