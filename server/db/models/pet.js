"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.FeaturedPet);


    }
  }
  Pet.init(
    {
      name: DataTypes.STRING,
      breed: DataTypes.STRING,
      size: DataTypes.STRING,
      EstDOB: DataTypes.DATE,
      sex: DataTypes.STRING,
      intakeDate: DataTypes.DATE,
      status: DataTypes.STRING,
      photos: DataTypes.ARRAY(DataTypes.TEXT),
      videos: DataTypes.ARRAY(DataTypes.TEXT),
      notes: DataTypes.TEXT,
      healthConcerns: DataTypes.BOOLEAN,
      houseBroken: DataTypes.BOOLEAN,
      goodWithDogs: DataTypes.BOOLEAN,
      goodWithCats: DataTypes.BOOLEAN,
      goodWithChildren: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Pet",
    }
  );
  return Pet;
};
