const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Application } = db;

const appNotFoundError = (id) => {
  const err = Error("Application not found");
  err.errors = [`Application with id of ${id} could not be found.`];
  err.title = "Application not found.";
  err.status = 404;
  return err;
};

//get all applications

//get all foster applications

//get all adoption applications

//get specific application

//add application

//update application

//delete application

module.exports = router;
