// price
// Validates that the value is a decimal.

// stock
// Set a default value of 10.
// Validates that the value is numeric.

// category_id
// References the Category model's id.

// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      null: false,
    },
    product_name: {
      type: DataTypes.STRING,
      null: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      null: false,
    },
    stock: {
      type: DataTypes.DECIMAL,
      null: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
