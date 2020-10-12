const Sequelize = require('sequelize');
var sequelize = require('./database');
// name table
var nametable = 'content';

var Content = sequelize.define(nametable,{

  titleid:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  title:  Sequelize.STRING,
  content: Sequelize.STRING,
  metakey: Sequelize.STRING,
  metacontent: Sequelize.STRING,
})

module.exports = Content
