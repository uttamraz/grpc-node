'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        { firstName: 'Test', lastName: 'One', email: 'one@mail.com', age: '27', location: 'Kathmandu' },
        { firstName: 'Test', lastName: 'Two', email: 'two@mail.com', age: '24', location: 'Kathmandu' },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
