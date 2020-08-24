'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DonationReceipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DonationReceipt.belongsTo(models.Donation)
    }
  };
  DonationReceipt.init({
    fileLocation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DonationReceipt',
  });
  return DonationReceipt;
};