const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { DonationReciept } = db;

const receiptNotFoundError = (id) => {
  const err = Error("Donation receipt not found");
  err.errors = [`Donation receipt with id of ${id} could not be found.`];
  err.title = "Donation receipt not found.";
  err.status = 404;
  return err;
};

//get all Donations Receipts
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const receipts = await DonationReciept.findAll({
      attributes: [
        "id",
        "receiptLocation",
      ],
    });
    res.json({ receipts });
  })
);
//get specific Donation Receipt by id
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const receipt = await DonationReceipt.findByPk(req.params.id, {
      attributes: ["receiptLocation"],
    });
    if (receipt) {
      res.json({ receipt });
    } else {
      next(receiptNotFoundError(req.params.id));
    }
  })
);
//add Donation Receipt
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      receiptLocation
    } = req.body;
    const receipt = await DonationReciept.create({
      receiptLocation,
    });
    if (res.status === 200) res.json({ receipt });
    else {
      next(console.log(error));
    }
  })
);
//update Donation Receipt
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const receipt = await DonationReciept.findByPk(req.params.id, {
      attributes: ["receiptLocation"],
    });
    if (receipt) {
      await receipt.update({
        receiptLocation: req.body.receiptLocation
      });
      res.json({ receipt });
    } else {
      next(receiptNotFoundError(req.params.id));
    }
  })
);
//delete Donation Receipt
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const receipt = await DonationReciept.findByPk(req.params.id);
    if (receipt) {
      await receipt.destroy();
      res.json({
        message: `Deleted donation receipt with id of ${req.params.id}.`,
      });
    } else {
      next(receiptNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
