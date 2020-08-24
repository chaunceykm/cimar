'use strict';
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert(
  "Adopters",
  [
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      address1: faker.address.streetAddress(),
      address2: null,
      cityStateZip: "Pflugerville, TX 78660",
      adoptAppId: 1,
      status: "approved",
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
      adoptAppId: 2,
      status: "approved",
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
      adoptAppId: 3,
      status: "denied",
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
    await queryInterface.bulkDelete("Adopters", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
