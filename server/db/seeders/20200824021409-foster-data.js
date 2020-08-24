"use strict";
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Fosters",
      [
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          address1: faker.address.streetAddress(),
          address2: null,
          cityStateZip: "Pflugerville, TX 78660",
          fosterAppId: 1,
          status: "approved",

          notes:
            "Foster has experience with older animals and those with health concerns. Large yard. Open to all types of animals.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          address1: faker.address.streetAddress(),
          address2: null,
          cityStateZip: "Pflugerville, TX 78660",
          fosterAppId: 2,
          status: "approved",
          notes:
            "Foster has 2 cats and a small child. Dog and child friendly animals only.",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          address1: faker.address.streetAddress(),
          address2: null,
          cityStateZip: "Pflugerville, TX 78660",
          fosterAppId: 3,
          status: "denied",

          notes: "Foster will reapply when fencing has been improved.",
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
    return await queryInterface.bulkDelete("Fosters", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
