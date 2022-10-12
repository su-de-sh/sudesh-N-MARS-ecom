const { DataTypes } = require("sequelize");
module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("products", "image_path", {
      type: DataTypes.TEXT,
      defaultValue: "no_image",
      allowNull: false,
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("image_path");
  },
};
