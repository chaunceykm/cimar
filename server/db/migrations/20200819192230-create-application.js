'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      foster: {
        type: Sequelize.BOOLEAN
      },
      adopt: {
        type: Sequelize.BOOLEAN
      },
      submittedAt: {
        type: Sequelize.DATE
      },
      petId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      fileLocation: {
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
    await queryInterface.dropTable('Applications');
  }
};