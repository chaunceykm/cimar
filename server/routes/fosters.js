const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Foster } = db;

const fosterNotFoundError = (id) => {
  const err = Error("Foster not found");
  err.errors = [`Foster with id of ${id} could not be found.`];
  err.title = "Foster not found.";
  err.status = 404;
  return err;
};

//get all Fosters
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const fosters = await Foster.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "address1",
        "address2",
        "cityStateZip",
        "fosterAppId",
        "status",
        "notes"
      ],
    });
    res.json({ fosters });
  })
);
//get specific Foster by id
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const foster = await Foster.findByPk(req.params.id, {
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "address1",
        "address2",
        "cityStateZip",
        "fosterAppId",
        "status",
        "notes"
      ],
    });
    if (foster) {
      res.json({ foster });
    } else {
      next(fosterNotFoundError(req.params.id));
    }
  })
);
//add Foster
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address1,
      address2,
      cityStateZip,
      fosterAppId,
      status,
      notes
    } = req.body;
    const foster = await Foster.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      address1,
      address2,
      cityStateZip,
      fosterAppId,
      status,
      notes
    });
    if (res.status === 200) res.json({ foster });
    else {
      next(console.log(error));
    }
  })
);
//update Foster
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const foster = await Foster.findByPk(req.params.id, {
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "address1",
        "address2",
        "cityStateZip",
        "fosterAppId",
        "status",
        "notes"
      ],
    });
    if (foster) {
      await foster.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address1: req.body.address1,
        address2: req.body.address2,
        cityStateZip: req.body.cityStateZip,
        fosterAppId: req.body.fosterAppId,
        status: req.body.status,
        notes: req.body.notes
      });
      res.json({ foster });
    } else {
      next(fosterNotFoundError(req.params.id));
    }
  })
);
//delete Foster
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const foster = await Foster.findByPk(req.params.id);
    if (foster) {
      await foster.destroy();
      res.json({
        message: `Deleted foster with id of ${req.params.id}.`,
      });
    } else {
      next(fosterNotFoundError(req.params.id));
    }
  })
);
module.exports = router;