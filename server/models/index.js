const Brand = require("./brand");
const Category = require("./category");
const Product = require("./product");

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

module.exports = {
  Product,
  Category,
  Brand,
};
