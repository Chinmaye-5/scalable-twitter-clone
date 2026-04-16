const express = require("express");
const router = express.Router();
const { createUser, followUser } = require("../services/userService");

router.post("/user", createUser);
router.post("/follow", followUser);

module.exports = router;
