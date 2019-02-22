'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userObject = [
      {
        login: "mmm", name: "Мария Малинина",
        email: "m@m.m", password: "mmm",
        img: '1'
      },
      {
        login: "ppp", name: "Петр Милославский",
        email: "p@p.p", password: "ppp",
        img: '2'
      },
      {
        login: "mmm", name: "Марина Золотая",
        email: "m@m.m", password: "mmm",
        img: '3'
      },

      {
        login: "nnn", name: "Наталья Петрова",
        email: "n@n.n", password: "nnn",
        img: '4'
      },
      {
        login: "ddd", name: "Дитрия Дитрировна",
        email: "d@d.d", password: "ddd",
        img: '5'
      },
      {
        login: "ggg", name: "Григорий Тюль",
        email: "g@g.g", password: "ggg",
        img: '6'
      },

      {
        login: "aaa", name: "Али Хан",
        email: "a@a.a", password: "aaa",
        img: '7'
      },
      {
        login: "lll", name: "Джим Нельсбор",
        email: "l@l.l", password: "lll",
        img: '8'
      },
      {
        login: "bbb", name: "Люси Хью",
        email: "b@b.b", password: "bbb",
        img: '9'
      }
    ]

    return queryInterface.bulkInsert('users', userObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

