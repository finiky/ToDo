const express = require("express");
const router = express.Router();

router.get("/", (requset, response) => {
    return response.status(200).json({message: "Hey this is the start"});
});

module.exports = router;