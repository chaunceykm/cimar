const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { FeaturedPet } = db;

const featuredPetNotFoundError = (id) => {
  const err = Error("Featured Pet not found");
  err.errors = [`Featured Pet with id of ${id} could not be found.`];
  err.title = "Featured Pet not found.";
  err.status = 404;
  return err;
};

//get all Featured Pets
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const featuredPets = await FeaturedPet.findAll({
      attributes: ["id", "petId", "petName", "description", "photo"],
    });
    res.json({ featuredPets });
  })
);

//get specific Featured Pet by id
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const featuredPet = await FeaturedPet.findByPk(req.params.id, {
      attributes: ["petId", "petName", "description", "photo"],
    });
    if (featuredPet) {
      res.json({ featuredPet });
    } else {
      next(featuredPetNotFoundError(req.params.id));
    }
  })
);
//add Featured Pet
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { petId, petName, description, photo } = req.body;
    const featuredPet = await FeaturedPet.create({
      petId,
      petName,
      description,
      photo,
    });
    if (res.status === 200) res.json({ featuredPet });
    else {
      next(console.log(error));
    }
  })
);
//update Featured Pet
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const featuredPet = await FeaturedPet.findByPk(req.params.id, {
      attributes: ["petId", "petName", "description", "photo"],
    });
    if (featuredPet) {
      await featuredPet.update({
        petId: req.body.petId,
        petName: req.body.petName,
        description: req.body.description,
        photo: req.body.photo,
      });
      res.json({ featuredPet });
    } else {
      next(featuredPetNotFoundError(req.params.id));
    }
  })
);
//delete Featured Pet
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const featuredPet = await FeaturedPet.findByPk(req.params.id);
    if (featuredPet) {
      await featuredPet.destroy();
      res.json({
        message: `Deleted Featured Pet with id of ${req.params.id}.`,
      });
    } else {
      next(featuredPetNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
