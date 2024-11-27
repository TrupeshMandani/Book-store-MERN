const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers["authorization"];

  // Check if the header is present and properly formatted
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ message: "Access Denied. No or invalid token provided." });
  }

  // Extract the token
  const token = authHeader.split(" ")[1];

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({ message: "Invalid credentials." });
    }

    // Attach the user info to the request object
    req.user = user;
    next();
  });
};

module.exports = verifyAdminToken;
