var Sequalize = require("sequelize");

var sequalize = require("../config/connection.js");

var Burger = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  devoured: {
    type: Sequalize.BOOLEAN,
    defaultValue: 0
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequalize.Now
  }
}, {
  timestamps: false
});

Burger.sync();

module.exports = Burger;