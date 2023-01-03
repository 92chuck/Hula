const jwt = require("jsonwebtoken");

exports.createTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, username: user.username, isAdmin: user.isAdmin },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: 604800 }
  );
  return accessToken;
};

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === "null" || !authHeader) {
    req.authenticate = false;
    next();
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      req.authenticate = true;
      req.user = user;
      next();
    });
  }
};
