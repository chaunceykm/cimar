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
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const announcements = await Announcement.findAll({
      attributes: ["id", "description", "link", "photo"],
    });
    res.json({ announcements });
  })
);

//get specific Announcement by id
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const announcement = await Announcement.findByPk(req.params.id, {
      attributes: ["description", "link", "photo"],
    });
    if (announcement) {
      res.json({ announcement });
    } else {
      next(announcementNotFoundError(req.params.id));
    }
  })
);
//add Announcement
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { description, link } = req.body;
    const announcement = await Announcement.create({
      description,
      link,
      photo
    });
    if (res.status === 200) res.json({ announcement });
    else {
      next(console.log(error));
    }
  })
);
//update Announcement
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const announcement = await Announcement.findByPk(req.params.id, {
      attributes: ["description", "link", "photo"],
    });
    if (announcement) {
      await announcement.update({
        description: req.body.description,
        link: req.body.link,
        photo: req.body.photo
      });
      res.json({ announcement });
    } else {
      next(announcementNotFoundError(req.params.id));
    }
  })
);
//delete Announcement
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const announcement = await Announcement.findByPk(req.params.id);
    if (announcement) {
      await announcement.destroy();
      res.json({
        message: `Deleted Announcement with id of ${req.params.id}.`,
      });
    } else {
      next(announcementNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
