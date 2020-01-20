const { sequelize, Sequelize } = require("../database/dbConfig");

module.exports = sequelize.define("Doctor", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  county: {
    type: Sequelize.STRING,
    allowNull: true
  },
  crm: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  specialty: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
