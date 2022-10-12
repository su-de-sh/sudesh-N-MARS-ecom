const { DataTypes } = require("sequelize");
module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("products", "image_path", {
      type: DataTypes.TEXT,
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("image_path");
  },
};
