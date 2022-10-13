const Product = require("../models/product");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dqgzhdegr",
  api_key: "541558938883319",
  api_secret: "j_GGZo5ZJqGD2OVG3G-szf--5Mg",
});

const productRouter = require("express").Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.findAll({
    attributes: {},
    limit: req.query.limit,
  });
  res.json(products);
});

productRouter.post("/", async (req, res) => {
  const file = req.files.photo;
  console.log(req.body);
  cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    console.log(req.body);
    const product = {
      productName: req.body.productName,
      price: req.body.price,
      imagePath: result.url,
      specification: req.body.specification,
      quantity: req.body.quantity,
      categoryId: req.body.categoryId,
      brandId: req.body.brandId,
    };
    const newProduct = await Product.create(product);
    res.json(newProduct);
  });
});

module.exports = productRouter;
