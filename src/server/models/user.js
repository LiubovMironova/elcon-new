'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    login: DataTypes.STRING,
    name: DataTypes.STRING //,
    // phone: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // about_me: DataTypes.STRING,
    // geo_location: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };


  user.readAll = async () => {

    let result = await user.findAll({});

    let array = []
    for (let i = 0; i < result.length; i++) {
      array.push([result[i].id, result[i].name])
    }

    console.log(" array = ", array)

    return array
  };




  
  return user;
};