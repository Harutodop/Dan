'use strict';

module.exports = {

  // normal run//
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'Test01@gmail.com',
        password: '123456',
        firstName: 'Dan',
        lastName: 'Haru',
        address: 'VN',
        gender: 1,
        type: 'ROLE',
        key: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },


//rollback //  
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
