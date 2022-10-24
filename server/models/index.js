const Brand = require("./brand");
const Category = require("./category");
const Order = require("./order");
const Product = require("./product");
const User = require("./user");

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  Product,
  Category,
  Brand,
  User,
  Order,
};
