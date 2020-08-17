const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { ValidationError } = require("sequelize");
const { environment } = require("./config");

const indexRouter = require('./routes/index')
const petsRouter = require('./routes/pets')
const userRouter = require('./routes/users')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use('/api', indexRouter)
app.use('/api/pets', petsRouter)
app.use('/api/users', userRouter)

app.use((req, res, next) => {
  const err = new Error("The requested resource could not be found.");
  err.errors = ["The requested resource could not be found."];
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
  }
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;