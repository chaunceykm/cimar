'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Application.init({
    fullName: DataTypes.STRING,
    foster: DataTypes.BOOLEAN,
    adopt: DataTypes.BOOLEAN,
    submittedAt: DataTypes.DATE,
    petId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    fileLocation: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};