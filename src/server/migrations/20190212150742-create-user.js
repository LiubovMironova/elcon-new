'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      } //,
      // phone: {
      //   type: Sequelize.STRING
      // },
      // email: {
      //   type: Sequelize.STRING
      // },
      // password: {
      //   type: Sequelize.STRING
      // },
      // about_me: {
      //   type: Sequelize.STRING
      // },
      // geo_location: {
      //   type: Sequelize.BOOLEAN
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};