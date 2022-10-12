const Product = require("../models/product");

const productRouter = require("express").Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.findAll({
    attributes: {},
    limit: req.query.limit,
  });
  res.json(products);
});

module.exports = productRouter;
