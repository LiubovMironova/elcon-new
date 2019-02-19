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

  // Service.readAll = async () => await Service.findAll();

  return Service;
};
