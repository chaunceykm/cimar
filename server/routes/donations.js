const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Donation } = db;

const donationNotFoundError = (id) => {
  const err = Error("Donation not found");
  err.errors = [`Donation with id of ${id} could not be found.`];
  err.title = "Donation not found.";
  err.status = 404;
  return err;
};

//get all Donations
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const donations = await Donation.findAll({
      attributes: [
        "id",
        "donorName",
        "dateOfDonation",
        "amountInDollars",
        "method",
        "receiptProvided",
        "receiptSentDate",
        "receiptLocation",
        "notes",
      ],
    });
    res.json({ donations });
  })
);
//get specific Donation by id
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const donation = await Donation.findByPk(req.params.id, {
      attributes: [
        "donorName",
        "dateOfDonation",
        "amountInDollars",
        "method",
        "receiptProvided",
        "receiptSentDate",
        "receiptLocation",
        "notes",
      ],
    });
    if (donation) {
      res.json({ donation });
    } else {
      next(donationNotFoundError(req.params.id));
    }
  })
);
//add Donation
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      donorName,
      dateOfDonation,
      amountInDollars,
      method,
      receiptProvided,
      receiptSentDate,
      receiptLocation,
      notes,
    } = req.body;
    const donation = await Donation.create({
      donorName,
      dateOfDonation,
      amountInDollars,
      method,
      receiptProvided,
      receiptSentDate,
      receiptLocation,
      notes,
    });
    if (res.status === 200) res.json({ donation });
    else {
      next(console.log(error));
    }
  })
);
//update Donation
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const donation = await Donation.findByPk(req.params.id, {
      attributes: [
        "donorName",
        "dateOfDonation",
        "amountInDollars",
        "method",
        "receiptProvided",
        "receiptSentDate",
        "receiptLocation",
        "notes",
      ],
    });
    if (donation) {
      await donation.update({
        donorName: req.body.donorName,
        dateOfDonation: req.body.dateOfDonation,
        amountInDollars: req.body.amountInDollars,
        method: req.body.method,
        receiptProvided: req.body.receiptProvided,
        receiptSentDate: req.body.receiptSentDate,
        receiptLocation: req.body.receiptLocation,
        notes: req.body.notes,
      });
      res.json({ donation });
    } else {
      next(donationNotFoundError(req.params.id));
    }
  })
);
//delete Donation
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const donation = await Donation.findByPk(req.params.id);
    if (donation) {
      await donation.destroy();
      res.json({ message: `Deleted donation with id of ${req.params.id}.` });
    } else {
      next(donationNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
