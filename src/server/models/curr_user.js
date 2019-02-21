'use strict';
module.exports = (sequelize, DataTypes) => {
  const curr_user = sequelize.define('curr_user', {
    user_id: DataTypes.STRING
  }, {});
  curr_user.associate = function(models) {
    // associations can be defined here
  };


  curr_user.readAll = async () => {
    let result = await curr_user.findAll({});
    console.log(" result = ", result)
    console.log(" result[0].user_id = ", result[0].user_id)
    return result[0].user_id
  };

  curr_user.writeCurrUser = async (user) => {
    await curr_user.destroy({truncate: true})
    await curr_user.create({ user_id: user })
  }

  return curr_user;
};
