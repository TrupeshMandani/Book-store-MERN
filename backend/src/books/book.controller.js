const Book = require("./book.model");

/**
 * The function `PostABook` asynchronously posts a new book to a database and sends a response with the
 * posted book if successful, handling errors if any occur.
 * @param req - The `req` parameter typically represents the HTTP request object, which contains
 * information about the incoming request such as the headers, parameters, body, and more. In this
 * context, it seems like `req` is being used to access the request body (`req.body`) which likely
 * contains data related to a
 * @param res - The `res` parameter in the `PostABook` function is the response object that is used to
 * send a response back to the client making the request. In this function, it is used to send a
 * success message along with the newly created book object when the book is successfully saved to the
 * database
 */
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

/**
 * The function `getAllBooks` fetches all books from the database and sends them as a response,
 * handling errors appropriately.
 * @param req - The `req` parameter typically represents the request object in Node.js applications. It
 * contains information about the incoming HTTP request such as headers, parameters, body, etc. In this
 * context, `req` is likely being used to handle the incoming request to fetch all books.
 * @param res - The `res` parameter in the `getAllBooks` function is the response object that will be
 * used to send the response back to the client making the request. It is typically used to set the
 * status code and send data or error messages in response to the client's request.
 */
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.log("Error fetching books", error);
    res.status(500).send({ message: "Error fetching books" });
  }
};

//Get a Single Book
const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).send(book);
  } catch (error) {
    console.log("Error fetching book", error);
    res.status(500).send({ message: "Error fetching book" });
  }
};

module.exports = {
  PostABook,
  getAllBooks,
  getSingleBook,
};
