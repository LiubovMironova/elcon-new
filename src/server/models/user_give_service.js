'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_give_service = sequelize.define('user_give_service', {
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER //,
    // adout_gived_serv: DataTypes.STRING,
    // datetime_from: DataTypes.DATE,
    // datetime_to: DataTypes.DATE
  }, {});
  user_give_service.associate = function (models) {
    // user_give_service.belongsTo(models.Service)
  };


  user_give_service.readAll = async (user) => {
    let result = await  user_give_service.findAll({
      where: {
        user_id: user
    }
    });
    console.log("result = ", result)

    let array = []
    for (let i = 0; i < result.length; i++) {
      array.push(result[i].service_id)
    }

    console.log(" array = ", array)

    return array
  };



  user_give_service.change = async (User, Servs) => {
// удалить
// добавить

  }




  return user_give_service;
};