const express = require("express");
const User = require("./user.model");
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET_Key;

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    if (username.password !== admin.password) {
      res.status(404).json({ message: "password not match" });
    }
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      JWT_SECRET,
      { expireIN: "1h" }
    );
    return res.status(200).json({
      message: "authentican Successfully",
      token: token,
      user: {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("faield to login as admin", error);
    res.status(500).json({ message: "Failed to Login " });
  }
});

module.exports = router;
