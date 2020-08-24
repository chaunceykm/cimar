const express = require("express");
const { requireAuth } = require("../auth");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../config");

const bodyParser = require("body-parser");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { secret, expiresIn } = jwtConfig;

const router = express.Router();
const db = require("../db/models");
const { User } = db;
router.use(bodyParser.json());

const userNotFoundError = (id) => {
  const err = Error("User not found");
  err.errors = [`User with id of ${id} could not be found.`];
  err.title = "User not found.";
  err.status = 404;
  return err;
};

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
];

//Add a User
router.post(
  "/add-user",
  validateEmailAndPassword,
  handleValidationErrors,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      hashedPassword,
      role,
    });
      const token = getUserToken(user);
      res.status(201).json({
        user: { id: user.id },
        token,
      });
  })
);

//Login As User
router.post(
  "/login",
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    if (user) {
      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: parseInt(expiresIn, 10),
      });
      const userId = user.id;
      res.json({ token, userId });
    } else {
      res.send("Username or Password incorrect");
    }
  })
);

//Get all Users
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const users = await User.findAll({
      attributes: ["id", "userName", "email"],
    });
    res.json({ users });
  })
);

//Get a specific User
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id, {
      attributes: [
        "firstName",
        "lastName",
        "userName",
        "email",
        "password",
        "role",
      ],
    });
    if (user) {
      res.json({ user });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

//Update a User
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id, {
      attributes: ["firstName", "lastName", "email", "password", "role"],
    });

    if (user) {
      if (req.user.id != user.id) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to edit this user.";
        err.title = "Unauthorized";
        throw err;
      }
      await user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      });
      res.json({ user });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

//Delete a User
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);

    if (user) {
      if (req.user.id != user.id) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to delete this user.";
        err.title = "Unauthorized";
        throw err;
      }
      await user.destroy();
      res.json({ message: `Deleted user with id of ${req.params.id}.` });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

module.exports = router;
