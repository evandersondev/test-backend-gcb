const Sequelize = require("sequelize");

const sequelize = new Sequelize("gcb", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
});

module.exports = {
  Sequelize,
  sequelize
};
