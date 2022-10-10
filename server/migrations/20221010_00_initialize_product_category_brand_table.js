const { DataTypes } = require("sequelize");
module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("category", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });

    await queryInterface.createTable("brand", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      brand_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    await queryInterface.createTable("product", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: {
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
      //   category: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //     references: { model: "categories", key: "id" },
      //   },
      //   brand: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //     references: { model: "brands", key: "id" },
      //   },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("category");
    await queryInterface.dropTable("brand");
    await queryInterface.dropTable("product");
  },
};
