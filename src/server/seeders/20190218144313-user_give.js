'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userCanObject = [
      { user_id: 1, service_id: 1, tag: "G" },
      { user_id: 1, service_id: 2, tag: "G" },
      { user_id: 1, service_id: 3, tag: "G" },
      { user_id: 2, service_id: 2, tag: "G" },
      { user_id: 2, service_id: 3, tag: "G" },
      { user_id: 2, service_id: 4, tag: "G" },
      { user_id: 3, service_id: 3, tag: "G" },
      { user_id: 3, service_id: 4, tag: "G" },
      { user_id: 3, service_id: 5, tag: "G" },
      { user_id: 3, service_id: 6, tag: "G" },
      { user_id: 1, service_id: 4, tag: "W" },
      { user_id: 1, service_id: 5, tag: "W" },
      { user_id: 1, service_id: 6, tag: "W" },
      { user_id: 2, service_id: 1, tag: "W" },
      { user_id: 2, service_id: 5, tag: "W" },
      { user_id: 2, service_id: 4, tag: "W" },
      { user_id: 3, service_id: 1, tag: "W" },
      { user_id: 3, service_id: 2, tag: "W" },

      { user_id: 4, service_id: 4, tag: "G" },
      { user_id: 4, service_id: 2, tag: "G" },
      { user_id: 4, service_id: 3, tag: "G" },
      { user_id: 5, service_id: 5, tag: "G" },
      { user_id: 5, service_id: 3, tag: "G" },
      { user_id: 5, service_id: 4, tag: "G" },
      { user_id: 6, service_id: 6, tag: "G" },
      { user_id: 6, service_id: 4, tag: "G" },
      { user_id: 6, service_id: 5, tag: "G" },
      { user_id: 6, service_id: 6, tag: "G" },
      { user_id: 4, service_id: 4, tag: "W" },
      { user_id: 4, service_id: 5, tag: "W" },
      { user_id: 4, service_id: 6, tag: "W" },
      { user_id: 5, service_id: 1, tag: "W" },
      { user_id: 5, service_id: 5, tag: "W" },
      { user_id: 5, service_id: 4, tag: "W" },
      { user_id: 6, service_id: 1, tag: "W" },
      { user_id: 6, service_id: 2, tag: "W" },

      { user_id: 7, service_id: 1, tag: "G" },
      { user_id: 7, service_id: 2, tag: "G" },
      { user_id: 7, service_id: 3, tag: "G" },
      { user_id: 8, service_id: 2, tag: "G" },
      { user_id: 8, service_id: 3, tag: "G" },
      { user_id: 8, service_id: 4, tag: "G" },
      { user_id: 9, service_id: 6, tag: "G" },
      { user_id: 9, service_id: 4, tag: "G" },
      { user_id: 9, service_id: 5, tag: "G" },
      { user_id: 9, service_id: 6, tag: "G" },
      { user_id: 7, service_id: 4, tag: "W" },
      { user_id: 7, service_id: 5, tag: "W" },
      { user_id: 7, service_id: 6, tag: "W" },
      { user_id: 8, service_id: 1, tag: "W" },
      { user_id: 8, service_id: 5, tag: "W" },
      { user_id: 8, service_id: 4, tag: "W" },
      { user_id: 9, service_id: 1, tag: "W" },
      { user_id: 9, service_id: 2, tag: "W" }
    ]

    return queryInterface.bulkInsert('user_give_services', userCanObject, {});

 },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_give_services', null, {});
  }
};

