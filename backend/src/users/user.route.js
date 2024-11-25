const express = require("express");
const router = express.Router();

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
  } catch (error) {
    console.error("faield to login as admin", error);
    res.status(500).json({ message: "Failed to Login " });
  }
});

module.exports = router;
