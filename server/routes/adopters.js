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

//get specific Adopter by id

//add Adopter

//update Adopter

//delete Adopter

module.exports = router;
