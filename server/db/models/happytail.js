'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HappyTail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HappyTail.init({
    petName: DataTypes.STRING,
    ownerName: DataTypes.STRING,
    adoptedDate: DataTypes.DATEONLY,
    photos: DataTypes.ARRAY(DataTypes.TEXT),
    story: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'HappyTail',
  });
  return HappyTail;
};