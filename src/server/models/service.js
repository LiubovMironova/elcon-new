module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "service",
    {
      service: DataTypes.STRING
    },
    {}
  );
  Service.associate = function (models) {
    // associations can be defined here
  };


  Service.readAll = async () => {

    let result = await Service.findAll({});

    let array = []
    for (let i = 0; i < result.length; i++) {
      array.push([result[i].id, result[i].service])
    }
    return array
  };

  return Service;
};
