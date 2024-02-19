const mongoose = require("mongoose");

const P_Schema = new mongoose.Schema({
  product: String,
  name_of_product: String,
  size: Number,
  price: Number,
});

const pro_Schema = mongoose.model("product", P_Schema);

module.exports = pro_Schema;
