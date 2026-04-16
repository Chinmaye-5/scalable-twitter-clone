const express = require("express");
const router = express.Router();
const { getFeed } = require("../services/feedService");

router.get("/feed/:userId", getFeed);

module.exports = router;
