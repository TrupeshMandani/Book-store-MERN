require("dotenv").config(); // Ensure this is at the top of your file
const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      return res.status(404).send({ message: "Admin not found!" });
    }

    // Compare passwords after trimming any extra spaces
    if (admin.password.trim() !== password.trim()) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    // Generate JWT token if authentication is successful
    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    // Log the error message and stack trace
    console.error("Error in the admin login process:", error.message);
    console.error("Stack trace:", error.stack);

    return res.status(500).send({ message: "Failed to login as admin" });
  }
});

module.exports = router;
