const express = require("express");
const repo = require("./app.repository");
const router = express.Router();

router.post("/signup", repo.signup);
router.get("/login", repo.login);

module.exports = router;
