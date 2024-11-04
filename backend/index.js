const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Db_URL =
  process.env.MONGODB_URI ||
  "mongodb+srv://trupeshpmandani:Trupe5h1234@cluster0.6pkjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Corrected environment variable casing
const app = express();
const port = process.env.PORT || 5001; // Corrected environment variable casing

// Middleware
/* `app.use(cors());` is setting up Cross-Origin Resource Sharing (CORS) middleware in the Express
application. This allows the server to handle requests from different origins. */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON bodies

// Define a route
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);
// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(Db_URL);
    console.log("Connected to MongoDB"); // Log success message
    app.use("/", (req, res) => res.send("Book server is running yeyyyyy "));
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
