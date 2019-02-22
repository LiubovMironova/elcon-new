'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let servicesObject = [
      { service: 'надрессировать собак' },
      { service: 'обучить игре на гитаре' },
      { service: 'убрать квартиру' },
      { service: 'поставить капельницу' },
      { service: 'заменить розетку' },
      { service: 'обучить тхэквондо' },
      { service: 'обучить стрельбе' },
      { service: 'сыграть Малефисента ' },
    ]

    return queryInterface.bulkInsert('services', servicesObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('services', null, {});
  }
};
