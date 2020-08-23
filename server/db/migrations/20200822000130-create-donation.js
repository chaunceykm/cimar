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
      donorId: {
        type: Sequelize.INTEGER,
        references: {model: 'Donors', key: 'id'}
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
      receiptId: {
        type: Sequelize.INTEGER,
        references: {model: 'DonationReceipts', key: 'id'}
      },
      receiptProvided: {
        type: Sequelize.BOOLEAN
      },
      receiptSentDate: {
        type: Sequelize.DATEONLY
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