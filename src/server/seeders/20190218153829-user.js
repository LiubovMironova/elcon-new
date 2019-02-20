'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userObject = [
      { login: "vvv", name: "Вася" },
      { login: "ppp", name: "Петя" },
      { login: "mmm", name: "Маша" },

      { login: "kkk", name: "Коля" },
      { login: "ddd", name: "Дима" },
      { login: "ggg", name: "Гриша" },

      { login: "aaa", name: "Аня" },
      { login: "lll", name: "Люся" },
      { login: "bbb", name: "Боря" }
    ]

    return queryInterface.bulkInsert('users', userObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

