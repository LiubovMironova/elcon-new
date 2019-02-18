'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let servicesObject = [
      { service: 'помыть' },
      { service: 'погладить' },
      { service: 'прибить гвоздь' },
      { service: 'йога' },
      { service: 'зубной' },
      { service: 'маникюр' },
    ]

    return queryInterface.bulkInsert('services', servicesObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('services', null, {});
  }
};
