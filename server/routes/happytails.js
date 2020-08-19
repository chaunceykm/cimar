const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { HappyTail } = db;

const happyTailNotFoundError = (id) => {
  const err = Error("HappyTail not found");
  err.errors = [`HappyTail with id of ${id} could not be found.`];
  err.title = "HappyTail not found.";
  err.status = 404;
  return err;
};

//get all HappyTails

//get specific HappyTail by id

//add HappyTail

//update HappyTail

//delete HappyTail

module.export = router;
