const { Product, OrderDetail } = require("../models");

const orderDetailRouter = require("express").Router();

orderDetailRouter.get("/", async (req, res) => {
  const orders = await OrderDetail.findAll({
    include: [{ model: Product }],
  });
  res.send(orders);
});

orderDetailRouter.post("/", async (req, res) => {
  const response = await OrderDetail.create(req.body);
  res.send(response);
});

module.exports = orderDetailRouter;
