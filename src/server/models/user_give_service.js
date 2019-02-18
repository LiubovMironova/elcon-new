'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_give_service = sequelize.define('user_give_service', {
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    adout_gived_serv: DataTypes.STRING,
    datetime_from: DataTypes.DATE,
    datetime_to: DataTypes.DATE
  }, {});
  user_give_service.associate = function(models) {
    // associations can be defined here
  };
  return user_give_service;
};