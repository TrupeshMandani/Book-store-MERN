const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"?.split("")[1]];
  if (!token) {
    return res
      .status(401)
      .send({ message: "Access Denied. No token Provided " });
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({ message: "invalid Credentials" });
    }
    req.user = user;
    next();
  });
};

module.exports = verifyAdminToken;
