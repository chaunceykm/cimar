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

//get specific Foster by id

//add Foster

//update Foster

//delete Foster

module.export = router;
