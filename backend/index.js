const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5001; // Corrected environment variable casing

// Define a route
app.use("/", (req, res) => {
  res.send("Book Store Server is running");
});

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/book-store-MERN");
    console.log("Connected to MongoDB"); // Log success message
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message); // Log error message
  }
}

// Start the database connection
main();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
