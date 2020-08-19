'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memo: {
        type: Sequelize.TEXT
      },
      amountInDollars: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      PONumber: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Expenses');
  }
};