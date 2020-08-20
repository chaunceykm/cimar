const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");
const { Expense } = db;

const expenseNotFoundError = (id) => {
  const err = Error("Expense not found");
  err.errors = [`Expense with id of ${id} could not be found.`];
  err.title = "Expense not found.";
  err.status = 404;
  return err;
};

//get all Expenses

//get specific Expense by id

//add Expense

//update Expense

//delete Expense

module.exports = router;