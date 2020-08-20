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
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const expenses = await Expense.findAll({
      attributes: [
        "id",
        "memo",
        "amountInDollars",
        "category",
        "vendor",
        "description",
        "PONumber",
        "status",
      ],
    });
    res.json({ expenses });
  })
);
//get specific Expense by id
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const expense = await Expense.findByPk(req.params.id, {
      attributes: [
        'memo',
        'amountInDollars',
        'category',
        'vendor',
        'description',
        'PONumber',
        'status',
      ],
    });
    if (expense) {
      res.json({ expense });
    } else {
      next(expenseNotFoundError(req.params.id));
    }
  })
);
//add Expense
router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {
      memo,
      amountInDollars,
      category,
      vendor,
      description,
      PONumber,
      status,
    } = req.body;
    const expense = await Expense.create({
      memo,
      amountInDollars,
      category,
      vendor,
      description,
      PONumber,
      status,
    });
    if (res.status === 200) res.json({ expense });
    else {
      next(console.log(error));
    }
  })
);
//update Expense
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const expense = await Expense.findByPk(req.params.id, {
      attributes: [
        "memo",
        "amountInDollars",
        "category",
        "vendor",
        "description",
        "PONumber",
        "status",
      ],
    });
    if (expense) {
      await expense.update({
        memo: req.body.memo,
        amountInDollars: req.body.amountInDollars,
        category: req.body.category,
        vendor: req.body.vendor,
        description: req.body.description,
        PONumber: req.body.PONumber,
        status: req.body.status,
      });
      res.json({ expense });
    } else {
      next(expenseNotFoundError(req.params.id));
    }
  })
);
//delete Expense
router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const expense = await Expense.findByPk(req.params.id);
    if (expense) {
      await expense.destroy();
      res.json({ message: `Deleted expense with id of ${req.params.id}.` });
    } else {
      next(expenseNotFoundError(req.params.id));
    }
  })
);
module.exports = router;
