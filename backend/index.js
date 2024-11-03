const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.port || 5001;

// routes

/* This code snippet defines a route in an Express application. When a request is made to the root URL
("/"), the callback function `(req, res) => { res.send("Hello World"); }` is executed. Inside the
callback function, the `res.send("Hello World")` method sends the response "Hello World" back to the
client making the request. */

/**
 * The main function uses mongoose to connect to a MongoDB database at
 * 'mongodb://127.0.0.1:27017/test'.
 */
async function main() {
  await mongoose.connect(
    "mongodb+srv://trupeshpmandani:Z3rvOzNaVIZ9PA2W@cluster0.6pkjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  app.use("/", (req, res) => {
    res.send("Book Store Server is running");
  });
}
main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
