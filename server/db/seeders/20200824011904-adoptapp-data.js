"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "AdoptApps",
      [
        {
          submittedAt: new Date(),
          status: "received",
          fileLocation: "http://file.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          submittedAt: new Date(),
          status: "in-progress",
          fileLocation: "http://file.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          submittedAt: new Date(),
          status: "approved",
          fileLocation: "http://file.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AdoptApps", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
