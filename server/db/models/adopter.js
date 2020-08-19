'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adopter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Adopter.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    cityStateZip: DataTypes.STRING,
    status: DataTypes.STRING,
    adoptedPets: DataTypes.ARRAY(DataTypes.NUMBER)
  }, {
    sequelize,
    modelName: 'Adopter',
  });
  return Adopter;
};