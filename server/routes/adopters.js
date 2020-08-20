const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Adopter } = db;

const adopterNotFoundError = (id) => {
  const err = Error("Adopter not found");
  err.errors = [`Adopter with id of ${id} could not be found.`];
  err.title = "Adopter not found.";
  err.status = 404;
  return err;
};

//get all Adopters
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const adopters = await Adopter.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "address1",
        "address2",
        "cityStateZip",
        "status",
        "adoptedPets",
      ],
    });
    res.json({ adopters });
  })
);
//get specific Adopter by id
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const adopter = await Adopter.findByPk(req.params.id, {
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "address1",
        "address2",
        "cityStateZip",
        "status",
        "adoptedPets",
      ],
    });
    if (adopter) {
      res.json({ adopter });
    } else {
      next(adopterNotFoundError(req.params.id));
    }
  })
);
//add Adopter
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
      status,
      adoptedPets,
    } = req.body;
    const adopter = await Adopter.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      address1,
      address2,
      cityStateZip,
      status,
      adoptedPets,
    });
    if (res.status === 200) res.json({ adopter });
    else {
      next(console.log(error));
    }
  })
);
//update Adopter
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const adopter = await Adopter.findByPk(req.params.id, {
      attributes: [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "address1",
        "address2",
        "cityStateZip",
        "status",
        "adoptedPets",
      ],
    });
    if (adopter) {
      await adopter.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address1: req.body.address1,
        address2: req.body.address2,
        cityStateZip: req.body.cityStateZip,
        status: req.body.status,
        adoptedPets: req.body.adoptedPets,
      });
      res.json({ adopter });
    } else {
      next(adopterNotFoundError(req.params.id));
    }
  })
);
//delete Adopter
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const adopter = await Adopter.findByPk(req.params.id);
    if (adopter) {
      await adopter.destroy();
      res.json({
        message: `Deleted adopter with id of ${req.params.id}.`,
      });
    } else {
      next(adopterNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
