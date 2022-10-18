const loginRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ error: "wrong credentials" });
  }
  const isCorrect = await bcrypt.compare(password, user.passwordHash);
  if (!user || !isCorrect) {
    return res.status(400).json({ error: "wrong credentials" });
  }
  const userForToken = {
    email: user.email,
    id: user._id,
  };
  const token = jwt.sign(userForToken, config.SEKRET);
  res.status(200).json({ token, email: user.email, id: user._id });
});

module.exports = loginRouter;
