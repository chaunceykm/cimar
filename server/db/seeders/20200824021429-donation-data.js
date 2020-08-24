'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Donations",
      [
        {
          donorId: 1,
          dateOfDonation: new Date(),
          amountInDollars: 100,
          method: "monetary",
          receiptId: null,
          receiptProvided: false,
          receiptSentDate: null,
          notes: "Check received 08/12/2020",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          donorId: 2,
          dateOfDonation: new Date(),
          amountInDollars: 50,
          method: "items",
          receiptId: 1,
          receiptProvided: true,
          receiptSentDate: "08/18/2020",
          notes: "bulk donation of canned dog food",
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
    return await queryInterface.bulkDelete("Donations", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
