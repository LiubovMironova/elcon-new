'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let userObject = [
      {
        login: "vvv", name: "Василий Иванов",
        email: "v@v.v", password: "vvv",
        img: '../../../pictures/image1.jpg'
      },
      {
        login: "ppp", name: "Петр Милославский",
        email: "p@p.p", password: "ppp",
        img: '../../../pictures/image2.jpg'
      },
      {
        login: "mmm", name: "Мария Малиина",
        email: "m@m.m", password: "mmm",
        img: '../../../pictures/image3.jpg'
      },

      {
        login: "nnn", name: "Николай Петров",
        email: "n@n.n", password: "nnn",
        img: '../../../pictures/image4.jpg'
      },
      {
        login: "ddd", name: "Дмитрий Висковский",
        email: "d@d.d", password: "ddd",
        img: '../../../pictures/image5.jpg'
      },
      {
        login: "ggg", name: "Григорий Тюль",
        email: "g@g.g", password: "ggg",
        img: '../../../pictures/image6.jpg'
      },

      {
        login: "aaa", name: "Анна Чернышевская",
        email: "a@a.a", password: "aaa",
        img: '../../../pictures/image7.jpg'
      },
      {
        login: "lll", name: "Люся Нек",
        email: "l@l.l", password: "lll",
        img: '../../../pictures/image8.jpg'
      },
      {
        login: "bbb", name: "Борис Харитонов",
        email: "b@b.b", password: "bbb",
        img: '../../../pictures/image9.jpg'
      }
    ]

    return queryInterface.bulkInsert('users', userObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

