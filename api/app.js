const express = require("express");
const cors = require("cors");
const router = require("./app.router");
const app = express();

app.use(express.json());
app.use(cors());

module.exports = app;