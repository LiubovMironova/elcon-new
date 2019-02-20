const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const config = require('../config/config.json')[env];
const db = {};

const config = {
  "username": "postgres",
  "password": "postgres",
  "database": "db_elcon_new_2",
  "host": "127.0.0.1",
  "dialect": "postgres",
  define: {
    timestamps: false
  }
};

let sequelize;
console.log("!!!!!!1config = ", config);
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  // .readdirSync('./')
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    // const model = sequelize['import'](path.join('./', file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
