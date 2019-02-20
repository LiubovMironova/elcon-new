'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let servicesObject = [
      { service: 'провести занятия по йоге, 1ч' },
      { service: 'провести урок по англ.яз., 1ч' },
      { service: 'приготовить торт, 1.5кг' },
      { service: 'установка стиральной машинки' },
      { service: 'помыть квартиру' },
      { service: 'сделать маникюр без покрытия' },
      { service: 'заменить фильтр у кондиционера' },
      { service: 'приготовить обед из 3-х блюд' },
    ]

    return queryInterface.bulkInsert('services', servicesObject, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('services', null, {});
  }
};
