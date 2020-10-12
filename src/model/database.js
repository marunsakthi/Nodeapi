var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'content', // database
  'root', // user / usuario
  'blaze.ws', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
