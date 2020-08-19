const express = require('express')
const router = express.Router();
const { Op } = require('sequelize')
const { asyncHandler } = require('../utils')
const { requireAuth } = require('../auth')

const db = require('../db/models')
const { Event } = db;

const eventNotFoundError = (id) => {
  const err = Error('Event not found');
  err.errors = [`Event with id of ${id} could not be found.`];
  err.title = 'Event not found.';
  err.status = 404;
  return err;
}

//get all events


//get specifc event for date range


//get specific event data


//add event


//update event


//delete event


module.export = router;