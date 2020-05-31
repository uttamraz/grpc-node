'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        { firstName: 'AK', lastName: 'Khakurel', email: 'akkh@gmail.com', age: '27', location: 'Kathmandu' },
        { firstName: 'Test', lastName: 'Two', email: 'test@gmail.com', age: '24', location: 'Kathmandu' },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
