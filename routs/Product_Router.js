const express = require("express");
const pro_Schema = require("../models/Product_Schema");

const product_router = express.Router();

product_router.post("/product", async (req, res) => {
  const list = await pro_Schema.create(req.body);
  res.status(200).json(list);
});

product_router.get("/check_List", async (req, res) => {
  const Pro_list = await pro_Schema.find();
  // res.send({ message: "checked" });
  res.status(200).json(Pro_list);
});

module.exports = product_router;
