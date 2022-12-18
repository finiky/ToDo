const express = require("express");
const repo = require("./app.repository");
const router = express.Router();

router.get("/", (requset, response) => {
  return response.status(200).json({ message: "Hey this is the start" });
});
router.post("/signup", repo.new_user);

module.exports = router;
