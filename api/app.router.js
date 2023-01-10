const express = require("express");
const repo = require("./app.repository");
const checkJWT = require("./middlewares/authorization");
const router = express.Router();

router.post("/signup", repo.signup);
router.get("/login/:email/:passkey", repo.login);
router.post("/:id", checkJWT, repo.createTask);
router.get("/mytasks/:id", repo.getTasks);
module.exports = router;
