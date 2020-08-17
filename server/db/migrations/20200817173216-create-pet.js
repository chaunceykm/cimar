'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      intakeDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      videos: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      notes: {
        type: Sequelize.TEXT
      },
      healthConcerns: {
        type: Sequelize.BOOLEAN
      },
      houseBroken: {
        type: Sequelize.BOOLEAN
      },
      goodWithDogs: {
        type: Sequelize.BOOLEAN
      },
      goodWithCats: {
        type: Sequelize.BOOLEAN
      },
      goodWithChildren: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Pets');
  }
};