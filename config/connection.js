// Set up MySQL connection.
var Sequelize = require("sequelize");

var sequelize = new Sequelize("sequelize_burgers", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// Export connection for our ORM to use.
module.exports = sequelize;