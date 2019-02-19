'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userWantObject = [
      { user_id: 1, service_id: 4 },
      { user_id: 1, service_id: 5 },
      { user_id: 1, service_id: 6 },
      { user_id: 2, service_id: 1 },
      { user_id: 2, service_id: 5 },
      { user_id: 2, service_id: 4 },
      { user_id: 3, service_id: 1 },
      { user_id: 3, service_id: 2 }
    ]

    return queryInterface.bulkInsert('user_want_services', userWantObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_want_services', null, {});
  }
};

