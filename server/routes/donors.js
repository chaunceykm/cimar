const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Donor } = db;

const donorNotFoundError = (id) => {
  const err = Error("Donor not found");
  err.errors = [`Donor with id of ${id} could not be found.`];
  err.title = "Donor not found.";
  err.status = 404;
  return err;
};

//get all Donors
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const donors = await Donor.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "address1",
        "address2",
        "cityStateZip",
        "phoneNumber",
        "email",
        "notes",
      ],
    });
    res.json({ donors });
  })
);
//get specific Donor by id
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const donor = await Donor.findByPk(req.params.id, {
      attributes: [
        "firstName",
        "lastName",
        "address1",
        "address2",
        "cityStateZip",
        "phoneNumber",
        "email",
        "notes",
      ],
    });
    if (donor) {
      res.json({ donor });
    } else {
      next(donorNotFoundError(req.params.id));
    }
  })
);
//add Donor
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      address1,
      address2,
      cityStateZip,
      phoneNumber,
      email,
      notes,
    } = req.body;
    const donor = await Donor.create({
      firstName,
      lastName,
      address1,
      address2,
      cityStateZip,
      phoneNumber,
      email,
      notes,
    });
    if (res.status === 200) res.json({ donor });
    else {
      next(console.log(error));
    }
  })
);
//update Donor
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const donor = await Donor.findByPk(req.params.id, {
      attributes: [
        "firstName",
        "lastName",
        "address1",
        "address2",
        "cityStateZip",
        "phoneNumber",
        "email",
        "notes",
      ],
    });
    if (donor) {
      await donor.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address1: req.body.address1,
        address2: req.body.address2,
        cityStateZip: req.body.cityStateZip,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        notes: req.body.notes,
      });
      res.json({ donor });
    } else {
      next(donorNotFoundError(req.params.id));
    }
  })
);
//delete Donor
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const donor = await Donor.findByPk(req.params.id);
    if (donor) {
      await donor.destroy();
      res.json({ message: `Deleted donor with id of ${req.params.id}.` });
    } else {
      next(donorNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
