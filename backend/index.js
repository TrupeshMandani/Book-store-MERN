const express = require("express");
const app = express();
const port = precess.env.port || 5001;

// routes

app.use("/", (req, res) => {
  res.send("Hello World");
});
