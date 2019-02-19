'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    let userObject = [
      { login: "vvv", name: "Вася" },
      { login: "ppp", name: "Петя" },
      { login: "mmm", name: "Маша" }
    ]

    return queryInterface.bulkInsert('users', userObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

