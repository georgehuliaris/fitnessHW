const express = require("express");
const mongojs = require("mongojs");
const mongoose = require('mongoose');
const app = express();
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
require("dotenv").config()

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true }, { useUnifiedTopology: true });

app.listen(3000, () => {
    console.log(`App running on port ${PORT}!`);
  });