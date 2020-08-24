'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Donors",
      [
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          address1: faker.address.streetAddress(),
          address2: null,
          cityStateZip: "Pflugerville, TX 788660",
          phoneNumber: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          notes: "Very generous donor...donates in memory of lost pet.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          address1: faker.address.streetAddress(),
          address2: null,
          cityStateZip: "Pflugerville, TX 788660",
          phoneNumber: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          notes: "Donates quarterly for vet bills.",
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
    return await queryInterface.bulkDelete("Donors", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
