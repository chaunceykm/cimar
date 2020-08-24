"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert(
      "Announcements",
      [
        {
          description: "",
          link: "",
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "",
          link: "",
          photo: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
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
    return await queryInterface.bulkDelete("Announcements", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
