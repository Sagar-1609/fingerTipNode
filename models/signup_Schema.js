const mongoose = require("mongoose");

const newschema = new mongoose.Schema({
  name: String,
  phoneNumber: Number,
  email: String,
});

const reg_Schema = mongoose.model("user", newschema);

module.exports = reg_Schema;
