const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT;
const uri = procesS.env.MONGODB_URI;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
mongoose
  .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log("DB Connection successful");
  })
  .catch((err) => {
    err;
  });
