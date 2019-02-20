'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userObject = [
      { login: "vvv", name: "Василий Иванов" },
      { login: "ppp", name: "Петр Милославский" },
      { login: "mmm", name: "Мария Малиина" },

      { login: "nnn", name: "Николай Петров" },
      { login: "ddd", name: "Дмитрий Висковский" },
      { login: "ggg", name: "Григорий Тюль" },

      { login: "aaa", name: "Анна Чернышевская" },
      { login: "lll", name: "Люся Нек" },
      { login: "bbb", name: "Борис Харитонов" }
    ]

    return queryInterface.bulkInsert('users', userObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

