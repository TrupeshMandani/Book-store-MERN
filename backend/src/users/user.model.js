/* This code snippet is defining a Mongoose schema for a user in a Node.js application. Here's a
breakdown of what each part of the code is doing: */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new ongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    unique: true,
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
