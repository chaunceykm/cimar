'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdoptApp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AdoptApp.init({
    submittedAt: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    fileLocation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdoptApp',
  });
  return AdoptApp;
};