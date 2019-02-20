'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_give_service = sequelize.define('user_give_service', {
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    tag: DataTypes.STRING
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
    let array = []
    for (let i = 0; i < result.length; i++) {
      array.push(result[i].service_id)
    }
    return array
  };

  user_give_service.change = async (user, servs, tag) => {
    await user_give_service.destroy({ where: { user_id: user, tag: tag } })
    for (let i = 0; i < servs.length; i++) {
      await user_give_service.create({ user_id: user, service_id: servs[i], tag: tag })
    }
  }

  user_give_service.unique = (arrayIn) => {
    let arrayOut = []
    for (let i = 0; i < arrayIn.length; i++) {
      let t = false
      for (let g = 0; g < arrayOut.length; g++) {
        if (arrayIn[i] == arrayOut[g])
          t = true
      }
      if (t == false) {
        arrayOut.push(arrayIn[i])
      }
    }
    return arrayOut
  }

  user_give_service.appropriateUsers = async (user, tagWhatUser, tagWhatAthers) => {

    // Ищем, что юзер хочет
    let userWant = await user_give_service.findAll({
      where: {
        user_id: user,
        tag: tagWhatUser
      }
    });

    // Ищем, кто может предоставить эти услуги
    let usersCan = []
    for (let i = 0; i < userWant.length; i++) {
      let userCan = await user_give_service.findAll({
        where: {
          service_id: userWant[i].service_id,
          tag: tagWhatAthers
        }
      });

      for (let i = 0; i < userCan.length; i++) {
        usersCan.push(userCan[i].user_id)
      }
    }
    return user_give_service.unique(usersCan)
  }


  user_give_service.takeAppropriateUsers = async (user) => {
    let appropriateForHim = await user_give_service.appropriateUsers(user, "W", "G")
    let appropriateForThem = await user_give_service.appropriateUsers(user, "G", "W")
    let totalAppropriateUsers = []

    for (let i = 0; i < appropriateForHim.length; i++) {
      for (let g = 0; g < appropriateForThem.length; g++) {
        if (appropriateForHim[i] == appropriateForThem[g] && appropriateForHim[i] != user) {
          totalAppropriateUsers.push(appropriateForHim[i])
        }
      }
    }
    return user_give_service.unique(totalAppropriateUsers);
  }


  user_give_service.takeAboutUsers = async (user) => {
    let answer = []

    let goodUsers = await user_give_service.takeAppropriateUsers(user)
    for (let i = 0; i < goodUsers.length; i++) {
      let user1 = [goodUsers[i]]
      let can = await user_give_service.readAll(goodUsers[i], "G")
      let want = await user_give_service.readAll(goodUsers[i], "W")
      answer.push([user1, can, want])
    }
    console.log(" answer  = ", answer)
    return answer

  }
  return user_give_service;
};