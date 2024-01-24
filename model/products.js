const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Products = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
}, {});

module.exports = Products;