const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Announcement } = db;

const announcementNotFoundError = (id) => {
  const err = Error("Announcement not found");
  err.errors = [`Announcement with id of ${id} could not be found.`];
  err.title = "Announcement not found.";
  err.status = 404;
  return err;
};

//get all Announcements

//get specific Announcement by id

//add Announcement

//update Announcement

//delete Announcement

module.export = router;
