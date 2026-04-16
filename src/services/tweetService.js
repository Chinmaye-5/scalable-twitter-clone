const { v4: uuidv4 } = require("uuid");

let tweets = [];

const createTweet = (req, res) => {
  const { userId, content } = req.body;

  const tweet = {
    id: uuidv4(),
    userId,
    content,
    likes: 0,
    createdAt: new Date()
  };

  tweets.push(tweet);
  res.json(tweet);
};

const likeTweet = (req, res) => {
  const tweet = tweets.find(t => t.id === req.params.id);
  if (!tweet) return res.status(404).json({ message: "Tweet not found" });

  tweet.likes += 1;
  res.json(tweet);
};

const deleteTweet = (req, res) => {
  tweets = tweets.filter(t => t.id !== req.params.id);
  res.json({ message: "Deleted" });
};

const getTweets = (req, res) => {
  res.json(tweets);
};

module.exports = { createTweet, likeTweet, deleteTweet, getTweets, tweets };
