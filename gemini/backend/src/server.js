import express from "express";
const app = express();
const usersController = require("./controllers/usersController");
const mongoose = require("mongoose");
const passport = require("passport");
const strategy = require("./passport");
require("dotenv").config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// enable passport middleware for the server
passport.use(strategy);
app.use(passport.initialize());

// ?
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());
app.use("/api/users", usersController);

app.listen(process.env.PORT, () =>
  console.log(`Backend server is listening on ${process.env.PORT}`)
);
