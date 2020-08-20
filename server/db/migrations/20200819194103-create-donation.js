'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Donations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donorName: {
        type: Sequelize.STRING
      },
      dateOfDonation: {
        type: Sequelize.DATEONLY
      },
      amountInDollars: {
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING
      },
      receiptProvided: {
        type: Sequelize.BOOLEAN
      },
      receiptSentDate: {
        type: Sequelize.DATEONLY
      },
      reciptLocation: {
        type: Sequelize.STRING
      },
      notes: {
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
    await queryInterface.dropTable('Donations');
  }
};