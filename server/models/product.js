const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

// Product model

class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specification: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    // category: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: { model: "categories", key: "id" },
    // },
    // brand: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: { model: "brands", key: "id" },
    // },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: "product",
  }
);

module.exports = Product;
