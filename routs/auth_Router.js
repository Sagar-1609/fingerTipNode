const express = require("express");

const reg_Schema = require("../models/signup_Schema");

const auth_router = express.Router();

auth_router.post("/signup", async (req, res) => {
  const user = await reg_Schema.create(req.body);
  res.status(200).json(user);
});

auth_router.get("/sign_info", async (req, res) => {
  const logg = await reg_Schema.find();
  res.status(200).json(logg);
});

auth_router.post("/sign_Up", async (req, res) => {
  const details = await reg_Schema.create(req.body);
  const newFormData = new FormData({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  });
  newFormData
    .save()
    .then(() => {
      res.send("data added");
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json(details);
});

module.exports = auth_router;
