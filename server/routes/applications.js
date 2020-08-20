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
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const applications = await Application.findAll({
      attributes: [
        "id",
        "fullName",
        "foster",
        "adopt",
        "submittedAt",
        "petId",
        "status",
        "fileLocation",
      ],
    });
    res.json({ applications });
  })
);

//get specific application
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const application = await Application.findByPk(req.params.id, {
      attributes: [
        "fullName",
        "foster",
        "adopt",
        "submittedAt",
        "petId",
        "status",
        "fileLocation",
      ],
    });
    if (application) {
      res.json({ application });
    } else {
      next(appNotFoundError(req.params.id));
    }
  })
);
//add application
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      fullName,
      foster,
      adopt,
      submittedAt,
      petId,
      status,
      fileLocation,
    } = req.body;
    const application = await Application.create({
      fullName,
      foster,
      adopt,
      submittedAt,
      petId,
      status,
      fileLocation,
    });
    if (res.status === 200) res.json({ application });
    else {
      next(console.log(error));
    }
  })
);
//update application
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const application = await Application.findByPk(req.params.id, {
      attributes: [
        "fullName",
        "foster",
        "adopt",
        "submittedAt",
        "petId",
        "status",
        "fileLocation",
      ],
    });
    if (application) {
      await application.update({
        fullName: req.body.fullName,
        foster: req.body.foster,
        adopt: req.body.adopt,
        submittedAt: req.body.submittedAt,
        petId: req.body.petId,
        status: req.body.status,
        fileLocation: req.body.fileLocation,
      });
      res.json({ application });
    } else {
      next(appNotFoundError(req.params.id));
    }
  })
);
//delete application
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const application = await Application.findByPk(req.params.id);
    if (application) {
      await application.destroy();
      res.json({ message: `Deleted application with id of ${req.params.id}.` });
    } else {
      next(appNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
