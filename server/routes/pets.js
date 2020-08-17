const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Pet } = db;

const petNotFoundError = (id) => {
  const err = Error("Pet not found");
  err.errors = [`Pet with id of ${id} could not be found.`];
  err.title = "Pet not found.";
  err.status = 404;
  return err;
};

//get all pets
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const pets = await Pet.findAll({
      attributes: [
        "name",
        "breed",
        "size",
        "age",
        "sex",
        "intakeDate",
        "status",
        "photos",
        "videos",
        "notes",
        "healthConcerns",
        "houseBroken",
        "goodWithDogs",
        "goodWithCats",
        "goodWithChildren",
      ],
    });
    res.json({ pets });
  })
);

//get specific pet by id
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const pet = await Pet.findByPk(req.params.id, {
      attributes: [
        "name",
        "breed",
        "size",
        "age",
        "sex",
        "intakeDate",
        "status",
        "photos",
        "videos",
        "notes",
        "healthConcerns",
        "houseBroken",
        "goodWithDogs",
        "goodWithCats",
        "goodWithChildren",
      ],
    });
    if (pet) {
      res.json({ pet });
    } else {
      next(petNotFoundError(req.params.id));
    }
  })
);

//add pet
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      name,
      breed,
      size,
      age,
      sex,
      intakeDate,
      status,
      photos,
      videos,
      notes,
      healthConcerns,
      houseBroken,
      goodWithDogs,
      goodWithCats,
      goodWithChildren,
    } = req.body;
    const pet = await Pet.create({
      name,
      breed,
      size,
      age,
      sex,
      intakeDate,
      status,
      photos,
      videos,
      notes,
      healthConcerns,
      houseBroken,
      goodWithDogs,
      goodWithCats,
      goodWithChildren,
    });
    if (res.status === 200) res.json({ pet });
    else {
      next(console.log(error));
    }
  })
);

//update pet
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const pet = await Pet.findByPk(req.params.id, {
      attributes: [
        "name",
        "breed",
        "size",
        "age",
        "sex",
        "intakeDate",
        "status",
        "photos",
        "videos",
        "notes",
        "healthConcerns",
        "houseBroken",
        "goodWithDogs",
        "goodWithCats",
        "goodWithChildren",
      ],
    });
    if (pet) {
      await pet.update({
        name: req.body.name,
        breed: req.body.breed,
        size: req.body.size,
        age: req.body.age,
        sex: req.body.sex,
        intakeDate: req.body.intakeDate,
        status: req.body.status,
        photos: req.body.photos,
        videos: req.body.videos,
        notes: req.body.notes,
        healthConcerns: req.body.healthConcerns,
        houseBroken: req.body.houseBroken,
        goodWithDogs: req.body.goodWithDogs,
        goodWithCats: req.body.goodWithCats,
        goodWithChildren: req.body.goodWithChildren,
      });
      res.json({ pet });
    } else {
      next(petNotFoundError(req.params.id));
    }
  })
);

//delete pet
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const pet = await Pet.findByPk(req.params.id);
    if (pet) {
      await pet.destroy();
      res.json({ message: `Deleted pet with id of ${req.params.id}.` });
    } else {
      next(petNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
