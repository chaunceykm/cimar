const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Event } = db;

const eventNotFoundError = (id) => {
  const err = Error("Event not found");
  err.errors = [`Event with id of ${id} could not be found.`];
  err.title = "Event not found.";
  err.status = 404;
  return err;
};

/*

startDate, 
endDate,
startTime,
endTime,
location,
description,
*/

//get all events
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const events = await Event.findAll({
      attributes: [
        "id",
        "startDate",
        "endDate",
        "startTime",
        "endTime",
        "location",
        "description",
      ],
    });
    res.json({ events });
  })
);

//get specific event data
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const event = await Event.findByPk(req.params.id, {
      attributes: [
        "startDate",
        "endDate",
        "startTime",
        "endTime",
        "location",
        "description",
      ],
    });
    if (event) {
      res.json({ event });
    } else {
      next(eventNotFoundError(req.params.id));
    }
  })
);

//add event
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      description,
    } = req.body;
    const event = await Event.create({
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      description,
    });
    if (res.status === 200) res.json({ event });
    else {
      next(console.log(error));
    }
  })
);
//update event
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const event = await Event.findByPk(req.params.id, {
      attributes: [
        "startDate",
        "endDate",
        "startTime",
        "endTime",
        "location",
        "description",
      ],
    });
    if (event) {
      await event.update({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
        description: req.body.description,
      });
      res.json({ event });
    } else {
      next(eventNotFoundError(req.params.id));
    }
  })
);
//delete event
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      await event.destroy();
      res.json({ message: `Deleted event with id of ${req.params.id}.` });
    } else {
      next(eventNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
