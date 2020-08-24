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
      Donation.hasMany(models.DonationReceipt)
      Donation.hasMany(models.Donor)
    }
  };
  Donation.init({
    donorId: DataTypes.INTEGER,
    dateOfDonation: DataTypes.DATEONLY,
    amountInDollars: DataTypes.INTEGER,
    method: DataTypes.STRING,
    receiptId: DataTypes.INTEGER,
    receiptProvided: DataTypes.BOOLEAN,
    receiptSentDate: DataTypes.DATEONLY,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};