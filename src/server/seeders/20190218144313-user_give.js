'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userCanObject = [
      { user_id: 1, service_id: 1 },
      { user_id: 1, service_id: 2 },
      { user_id: 1, service_id: 3 },
      { user_id: 2, service_id: 2 },
      { user_id: 2, service_id: 3 },
      { user_id: 2, service_id: 4 },
      { user_id: 3, service_id: 3 },
      { user_id: 3, service_id: 4 },
      { user_id: 3, service_id: 5 },
      { user_id: 3, service_id: 6 }
    ]

    return queryInterface.bulkInsert('user_give_services', userCanObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_give_services', null, {});
  }
};

