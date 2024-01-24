const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tutorial", "root", "root", {
  host: "db",
  dialect: "mysql"
});

module.exports = sequelize;