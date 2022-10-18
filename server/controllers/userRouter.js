const { User } = require("../models");
const bcrypt = require("bcryptjs");
const userRouter = require("express").Router();

userRouter.get("/", async (req, res) => {
  const users = await User.findAll();

  res.json(users);
});

userRouter.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(email, "email");

    const existingEmail = await User.findOne({
      where: { email: email },
    });
    if (existingEmail) {
      res.status(400).send("Email already exists!!");
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = {
      firstName,
      lastName,
      email,
      passwordHash,
    };

    const savedUser = await User.create(user);

    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
