const express = require("express");
const controller = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/Users");

//  USER SIGN UP
controller.post("/signup", async (req, res) => {
  // hash password
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  // create new user
  const newUser = await Users.create({
    username: username,
    email: email,
    password: hashedPassword,
  });

  // res.status(200).json({
  //   username: newUser.username,
  //   email: newUser.email,
  //   password: newUser.password,
  // });
  res.json({
    msg: "Signed up Successfully",
  });
});

// USER LOG IN
controller.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check and find user in database
  const foundUser = await Users.findOne({ username: username });

  // if user does not exist, throw error
  if (!foundUser) {
    res.status(404);
    res.json({ error: "Not a valid username" });
  }

  // if user exist, check validity of password
  const validPassword = bcrypt.compareSync(password, foundUser.password);

  if (!validPassword) {
    res.status(400);
    res.json({ error: "Incorrect Password" });
  }

  //   Check JWT token
  if (validPassword) {
    jwt.sign(
      { username: username },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) {
          res.status(500).json(err);
        }

        res.status(200);
        res.json({ token });
      }
    );
  } else {
    res.sendStatus(401); // 401 unauthorised access
  }
});

module.exports = controller;
