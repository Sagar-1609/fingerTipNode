const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const auth_router = require("./routs/auth_Router");
const product_router = require("./routs/Product_Router");

const app = express();
const port = 3000;

const uri =
  "mongodb+srv://bhatisagar812:zoro12345@cluster0.scyko0l.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
  console.log("cloud is connected");
});
app.use(express.json());
app.use("/cloud", auth_router);
app.use("/cloud", product_router);
app.listen(port, () => {
  console.log("server is running");
});
