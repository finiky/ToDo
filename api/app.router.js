const express = require("express");
const repo = require("./app.repository");
const router = express.Router();

router.post("/signup", repo.new_user);

module.exports = router;
