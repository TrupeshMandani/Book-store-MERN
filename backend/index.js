const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5001;

// Import routes
const userRoutes = require("./src/users/user.route");
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

// Health check route
app.get("/", (req, res) => {
  res.send("Welcome to the Book Store API");
});

// Apply request timeout middleware (prevents 504 errors)
app.use((req, res, next) => {
  res.setTimeout(9000, () => {
    // 9-second timeout
    res.status(504).json({ error: "Request timed out" });
  });
  next();
});

// Use routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB connection function
let isConnected = false; // Prevents redundant connections

async function connectDB() {
  if (isConnected) return; // Skip if already connected
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // MongoDB timeout (5s)
    });
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit if unable to connect
  }
}

// Start server only if DB connects successfully
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
  });
});

// Global error handler (catches uncaught errors)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});
