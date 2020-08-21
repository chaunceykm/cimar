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
        "donorId",
        "dateOfDonation",
        "amountInDollars",
        "method",
        "receiptId",
        "receiptProvided",
        "receiptSentDate",
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
        "donorId",
        "dateOfDonation",
        "amountInDollars",
        "method",
        "receiptId",
        "receiptProvided",
        "receiptSentDate",
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
      donorId,
      dateOfDonation,
      amountInDollars,
      method,
      receiptId,
      receiptProvided,
      receiptSentDate,
      notes,
    } = req.body;
    const donation = await Donation.create({
      donorId,
      dateOfDonation,
      amountInDollars,
      method,
      receiptId,
      receiptProvided,
      receiptSentDate,
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
        "donorId",
        "dateOfDonation",
        "amountInDollars",
        "method",
        "receiptId",
        "receiptProvided",
        "receiptSentDate",
        "notes",
      ],
    });
    if (donation) {
      await donation.update({
        donorId: req.body.donorId,
        dateOfDonation: req.body.dateOfDonation,
        amountInDollars: req.body.amountInDollars,
        method: req.body.method,
        receiptId: req.body.receiptId,
        receiptProvided: req.body.receiptProvided,
        receiptSentDate: req.body.receiptSentDate,
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
