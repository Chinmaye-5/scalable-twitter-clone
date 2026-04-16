const express = require("express");
const router = express.Router();
const { createTweet, likeTweet, deleteTweet, getTweets } = require("../services/tweetService");

router.post("/tweet", createTweet);
router.post("/like/:id", likeTweet);
router.delete("/tweet/:id", deleteTweet);
router.get("/tweets", getTweets);

module.exports = router;
