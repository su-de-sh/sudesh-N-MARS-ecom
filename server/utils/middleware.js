const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    req.token = authorization.substring(7);
  }
  next();
};

const userExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    try {
      const decodedToken = jwt.verify(req.token, config.SEKRET);

      req.user = decodedToken;
    } catch (err) {
      res.status(401).json({ error: "token missing or invalid" });
    }
    // if (!decodedToken.id) {
    //   res.status(401).json({ error: "token missing or invalid" });
    // }
  }
  next();
};

module.exports = {
  tokenExtractor,
  userExtractor,
};
