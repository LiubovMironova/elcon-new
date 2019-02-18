'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    about_me: DataTypes.STRING,
    geo_location: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};