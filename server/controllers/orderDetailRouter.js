const { Product, OrderDetail, Order } = require("../models");

const orderDetailRouter = require("express").Router();

orderDetailRouter.get("/", async (req, res) => {
  const orders = await OrderDetail.findAll({
    include: [{ model: Product }],
  });
  res.send(orders);
});

orderDetailRouter.post("/", async (req, res) => {
  const pendingOrder = await Order.findOne({
    where: {
      status: "pending",
    },
  });

  if (pendingOrder) {
    const order = { productId: req.body.productId, orderId: pendingOrder.id };
    const response = await OrderDetail.create(order);
    res.send(response);
  } else {
    const userId = req.user.id;
    const newOrder = await Order.create({ userId });
    const order = { productId: req.body.productId, orderId: newOrder.id };
    const response = await OrderDetail.create(order);
    res.json(response);
  }
});

module.exports = orderDetailRouter;
