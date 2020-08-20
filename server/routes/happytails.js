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
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const happyTails = await HappyTail.findAll({
      attributes: ["id", "petName", "ownerName", "adoptedDate", "photos", "story"],
    });
    res.json({ happyTails });
  })
);

//get specific HappyTail by id
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const happyTail = await HappyTail.findByPk(req.params.id, {
      attributes: ["petName", "ownerName","adoptedDate", "photos", "story"],
    });
    if (happyTail) {
      res.json({ happyTail });
    } else {
      next(happyTailNotFoundError(req.params.id));
    }
  })
);
//add HappyTail
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      petName, adoptedDate, photos, story
    } = req.body;
    const happyTail = await HappyTail.create({
      petName,
      ownerName,
      adoptedDate,
      photos,
      story,
    });
    if (res.status === 200) res.json({ happyTail });
    else {
      next(console.log(error));
    }
  })
);

//update HappyTail
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const happyTail = await HappyTail.findByPk(req.params.id, {
      attributes: [
        "petName", "ownerName", "adoptedDate", "photos", "story"
      ],
    });
    if (happyTail) {
      await happyTail.update({
        petName: req.body.petName,
        ownerName: req.body.ownerName,
        adoptedDate: req.body.adoptedDate,
        photos: req.body.photos,
        story: req.body.story,
      });
      res.json({ happyTail });
    } else {
      next(happyTailNotFoundError(req.params.id));
    }
  })
);
//delete HappyTail
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const happyTail = await HappyTail.findByPk(req.params.id);
    if (happyTail) {
      await happyTail.destroy();
      res.json({ message: `Deleted happyTail with id of ${req.params.id}.` });
    } else {
      next(happyTailNotFoundError(req.params.id));
    }
  })
);

module.exports = router;