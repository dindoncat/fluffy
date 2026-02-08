const jwt = require("jsonwebtoken");
const config = require("../config");

const auth = (req, res, next) => {
  const token =
    req.header("x-api-key") ||
    req.header("Authorization") ||
    req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ msg: "You need to send token to this endpoint url" });
  }

  try {
    const tokenString = token.startsWith("Bearer ")
      ? token.slice(7, token.length).trim()
      : token;

    const decodeToken = jwt.verify(
      tokenString,
      config.cookieSecret || "secret"
    );
    req.tokenData = decodeToken;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token invalid or expired" });
  }
};

module.exports = auth;
