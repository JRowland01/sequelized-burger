'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize) {
  var Burger = sequelize.define('Burger', {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};