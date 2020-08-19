"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Foster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Foster.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address1: DataTypes.STRING,
      address2: DataTypes.STRING,
      cityStateZip: DataTypes.STRING,
      status: DataTypes.STRING,
      fosterPets: DataTypes.ARRAY(DataTypes.INTEGER),
      notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Foster",
    }
  );
  return Foster;
};
