const Book = require("./book.model");

const PostABook = async (req, res) => {
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
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    console.log("Error fetching books", error);
    res.status(500).send({ message: "Error fetching books" });
  }
};

module.exports = {
  PostABook,
  getAllBooks,
};
