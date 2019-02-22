'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };

  user.readAll = async () => {
    let result = await user.findAll({});
    let array = []
    for (let i = 0; i < result.length; i++) {
      array.push([result[i].id, result[i].name, result[i].img ])
    }
    return array
  };

  user.entryStatus = async (email, password) => {
    let result = await user.findAll({
      where: {
        email: email,
        password: password
      }
    });
    let result2 = await user.findAll({
      where: {
        email: email
      }
    });

    if (result.length) {
      return "уже есть в базе"
    } else if (result2.length) {
      return "email уже используется"
    } else {
      user.create({ email: email, password: password })
      return "пользователь создан"
    }
  };


  user.entryStatusLogin = async (email, password) => {
    let result = await user.findAll({
      where: {
        email: email,
        password: password
      }
    });
    if (result.length) {
      return result[0]
    } else {
      return "неверные параметры входа"
    }
  }

  return user;
};