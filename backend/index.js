const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file
const app = express();
const port = process.env.PORT || 5001;
const userRoutes = require("./src/users/user.route");

// Import routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/order/order.route");
const adminRoutes = require("./src/stats/admin.stats");
// Middleware setup
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://book-store-mern-sage.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON request bodies
app.get("/", (req, res) => {
  res.send("Welcome to the Book Store API");
});

// Use routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB connection and server startup
async function main() {
  try {
    const Db_URL = process.env.MONGODB_URI;
    await mongoose.connect(Db_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
}

main();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
