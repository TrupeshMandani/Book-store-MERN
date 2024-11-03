const express = require("express");
const app = express();
const port = process.env.port || 5001;

app.get("/", (req, res) => {
  res.send("Hello Daddyji!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// creata a post request and it will return hi mommy
app.post("/post", (req, res) => {
  res.send("Hi mommy!");
});
