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

//get specific Donor by id

//add Donor

//update Donor

//delete Donor

module.export = router;
