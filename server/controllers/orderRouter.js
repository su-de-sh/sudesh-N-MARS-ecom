const { Order, User } = require("../models");

const orderRouter = require("express").Router();

orderRouter.get("/", async (req, res) => {
  const orders = await Order.findAll({ include: { model: User } });
  res.send(orders);
});

module.exports = orderRouter;
