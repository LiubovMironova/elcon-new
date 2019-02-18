'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_want_service = sequelize.define('user_want_service', {
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    adout_wanted_serv: DataTypes.STRING,
    datetime_from: DataTypes.DATE,
    datetime_to: DataTypes.DATE
  }, {});
  user_want_service.associate = function(models) {
    // associations can be defined here
  };
  return user_want_service;
};