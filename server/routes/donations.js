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

//get specific Donation by id

//add Donation

//update Donation

//delete Donation

module.exports = router;