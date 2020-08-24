"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Pets",
      [
        {
          name: "Gracee",
          breed: "Terrier Mix",
          size: "small",
          estDOB: "12/01/2019",
          sex: "female",
          intakeDate: "08/09/2020",
          status: "available",
          photos: [
            "https://www.cuzimatter.org/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-8/748/218748/z0CWRHKQ/5e96b2bcbe4549f9b2e94e2ae25047aa",
          ],
          videos: null,
          notes: "Bio and more photos coming soon",
          healthConcerns: false,
          houseBroken: true,
          goodWithDogs: true,
          goodWithCats: false,
          goodWithChildren: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Artemis",
          breed: "Lab/Pit Mix",
          size: "large",
          estDOB: "05/23/2020",
          sex: "male",
          intakeDate: "08/02/2020",
          status: "available",
          photos: [
            "https://www.cuzimatter.org/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-8/748/218748/z0CWRHKQ/f332884be40441b4b9668f47f2545014",
          ],
          videos: null,
          notes:
            "Hi there! My name is Artemis, but I go by Artie. When I first arrived to my foster home, I was a little unsure and shy, but now I pretty much walk around like I run things. I am doing well at potty training and leraning to sit for food and treats. I don't like the word no, but sometimes it works. I love pulling out all the dog toys in the mornings and playing with my foster sister. Once I wear myself out from all the playing, you might find me curled up with my foster mom or sister (if she lets me), or hiding in the pillows on the bed napping. If you'd like more information about adopting me, please visit the Contact Us page so they can send you all the information about adopting me, because if you are a good fit, I would love to meet you.",
          healthConcerns: false,
          houseBroken: true,
          goodWithDogs: true,
          goodWithCats: true,
          goodWithChildren: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hank Hill",
          breed: "lab",
          size: "large",
          estDOB: "02/01/2020",
          sex: "male",
          intakeDate: "08/02/2020",
          status: "available",
          photos: [
            "https://www.cuzimatter.org/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-8/748/218748/z0CWRHKQ/739b2ef1b8994b3291d8236aec00b947",
          ],
          videos: null,
          notes: "More photos and bio coming soon!",
          healthConcerns: false,
          houseBroken: true,
          goodWithDogs: true,
          goodWithCats: true,
          goodWithChildren: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        returning: true,
      }
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
    return await queryInterface.bulkDelete("Pets", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
