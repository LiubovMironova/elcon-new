'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_give_service = sequelize.define('user_give_service', {
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    tag: DataTypes.STRING, //,
    // adout_gived_serv: DataTypes.STRING,
    // datetime_from: DataTypes.DATE,
    // datetime_to: DataTypes.DATE
  }, {});
  user_give_service.associate = function (models) {
    // user_give_service.belongsTo(models.Service)
  };


  user_give_service.readAll = async (user, tag) => {
    let result = await user_give_service.findAll({
      where: {
        user_id: user,
        tag: tag
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



  user_give_service.change = async (user, servs, tag) => {

    await user_give_service.destroy({ where: { user_id: user, tag: tag } })
    console.log("DDDDDDDDDDDDDDDDDDDDDD")
    for (let i = 0; i < servs.length; i++) {
      await user_give_service.create({ user_id: user, service_id: servs[i], tag: tag })
      console.log("IIIIINNNNNNNNNNNNNNNNNNNSSSSSSSSSSS")
    }

    let result = await user_give_service.findAll({
      where: {
        user_id: user,
        tag: tag
      }
    });
    console.log("result = ", result)

  }


  return user_give_service;
};