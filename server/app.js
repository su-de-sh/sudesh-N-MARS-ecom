const express = require("express");
const cors = require("cors");
const path = require("path");
const productRouter = require("./controllers/productRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.use("/api/products", productRouter);

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
module.exports = app;
