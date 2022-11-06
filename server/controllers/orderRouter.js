const { Order, User } = require("../models");

const orderRouter = require("express").Router();

orderRouter.get("/", async (req, res) => {
  const orders = await Order.findAll({ include: { model: User } });
  res.send(orders);
});

orderRouter.post("/", async (req, res) => {
  const order = { ...req.body };
  const response = await Order.create(order);
  res.send(response);
});

orderRouter.put("/", async (req, res) => {
  // console.log(req.user);
  const order = await Order.findAll({ where: { userId: req.user.id } });
  console.log(order);
  // const updatedOrder = await Order.update(
  //   {
  //     status: "placed",
  //   },
  //   {
  //     where: { id: order.id },
  //   }
  // );
  // console.log(updatedOrder);
});

module.exports = orderRouter;
