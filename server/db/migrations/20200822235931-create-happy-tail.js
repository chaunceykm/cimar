'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HappyTails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      petName: {
        type: Sequelize.STRING
      },
      ownerName: {
        type: Sequelize.STRING
      },
      adoptedDate: {
        type: Sequelize.DATEONLY
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      story: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('HappyTails');
  }
};