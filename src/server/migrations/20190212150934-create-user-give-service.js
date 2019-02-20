'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_give_services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      service_id: {
        type: Sequelize.INTEGER
      },
      tag: {
        type: Sequelize.STRING
      } //,
      // adout_gived_serv: {
      //   type: Sequelize.STRING
      // },
      // datetime_from: {
      //   type: Sequelize.DATE
      // },
      // datetime_to: {
      //   type: Sequelize.DATE
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_give_services');
  }
};