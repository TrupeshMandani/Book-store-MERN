const express = require("express");
const app = express();
const port = process.env.port || 5001;

// routes

/* This code snippet defines a route in an Express application. When a request is made to the root URL
("/"), the callback function `(req, res) => { res.send("Hello World"); }` is executed. Inside the
callback function, the `res.send("Hello World")` method sends the response "Hello World" back to the
client making the request. */
app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
