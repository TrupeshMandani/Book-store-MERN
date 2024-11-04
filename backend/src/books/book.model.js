const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
); // Ensure timestamp fields like updatedAt and createdAt

const Book = mongoose.model("Book", bookSchema);
module.exports = Book; // Export the Book model as CommonJS module
