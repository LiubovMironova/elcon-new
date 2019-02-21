'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userObject = [
      { login: "vvv", name: "Василий Иванов", email: "v@v.v", password: "vvv" },
      { login: "ppp", name: "Петр Милославский", email: "p@p.p", password: "ppp" },
      { login: "mmm", name: "Мария Малиина", email: "m@m.m", password: "mmm" },

      { login: "nnn", name: "Николай Петров", email: "n@n.n", password: "nnn" },
      { login: "ddd", name: "Дмитрий Висковский", email: "d@d.d", password: "ddd" },
      { login: "ggg", name: "Григорий Тюль", email: "g@g.g", password: "ggg" },

      { login: "aaa", name: "Анна Чернышевская", email: "a@a.a", password: "aaa" },
      { login: "lll", name: "Люся Нек", email: "l@l.l", password: "lll" },
      { login: "bbb", name: "Борис Харитонов", email: "b@b.b", password: "bbb" }
    ]

    return queryInterface.bulkInsert('users', userObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

