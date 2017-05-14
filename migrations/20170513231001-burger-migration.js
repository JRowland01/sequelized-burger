'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {

        return queryInterface.createTable('Burgers', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                burger_name: {
                    type: Sequelize.STRING
                },
                devoured: {
                    allowNull: false,
                    defaultValue: false,
                    type: Sequelize.BOOLEAN
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW
                }
            })
            /*

              Add altering commands here.
              Return a promise to correctly handle asynchronicity.

              Example:
              return queryInterface.createTable('users', { id: Sequelize.INTEGER });
            */
    },

    down: function(queryInterface, Sequelize) {

        return queryInterface.dropTable('Burgers');


        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
