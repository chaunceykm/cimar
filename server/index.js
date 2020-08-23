const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { ValidationError } = require("sequelize");
const { environment } = require("./config");

const indexRouter = require("./routes/index");
const petsRouter = require("./routes/pets");
const userRouter = require("./routes/users");
const happyTailsRouter = require("./routes/happytails");
const fosterRouter = require("./routes/fosters");
const expensesRouter = require("./routes/expenses");
const eventsRouter = require("./routes/events");
const donorsRouter = require("./routes/donors");
const donationsRouter = require("./routes/donations");
const announcementRouter = require("./routes/announcements");
const adoptersRouter = require("./routes/adopters");
const featuredPetRouter = require("./routes/featuedPets");
const donationReceiptRouter = require('./routes/donationReceipts')
const adoptionAppRouter = require('./routes/adoptionApps')
const fosterAppRouter = require('./routes/fosterApps')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api", indexRouter);
app.use("/api/pets", petsRouter);
app.use("/api/users", userRouter);
app.use("/api/happyTails", happyTailsRouter);
app.use("/api/fosters", fosterRouter);
app.use("/api/expenses", expensesRouter);
app.use("/api/events", eventsRouter);
app.use("/api/donors", donorsRouter);
app.use("/api/donations", donationsRouter);
app.use("/api/adopters", adoptersRouter);
app.use("/api/announcements", announcementRouter);
app.use("/api/featuredPets", featuredPetRouter);
app.use('/api/donations/receipts', donationReceiptRouter);
app.use('/api/applications/foster', fosterAppRouter)
app.use('/api/applications/adoption', adoptionAppRouter)

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
