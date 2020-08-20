'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Donation.init({
    donorName: DataTypes.STRING,
    dateOfDonation: DataTypes.DATEONLY,
    amountInDollars: DataTypes.INTEGER,
    method: DataTypes.STRING,
    receiptProvided: DataTypes.BOOLEAN,
    receiptSentDate: DataTypes.DATEONLY,
    receiptLocation: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};