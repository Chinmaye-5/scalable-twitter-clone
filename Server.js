const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let tweets = [];

// Create Tweet
app.post("/tweet", (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  const newTweet = {
    id: uuidv4(),
    content,
    likes: 0,
    createdAt: new Date()
  };

  tweets.unshift(newTweet);
  res.json(newTweet);
});

// Get All Tweets
app.get("/tweets", (req, res) => {
  res.json(tweets);
});

// Like Tweet
app.post("/like/:id", (req, res) => {
  const tweet = tweets.find(t => t.id === req.params.id);

  if (!tweet) {
    return res.status(404).json({ message: "Tweet not found" });
  }

  tweet.likes += 1;
  res.json(tweet);
});

// AI Sentiment Feature
app.post("/analyze", (req, res) => {
  const { content } = req.body;

  let sentiment = "neutral";

  if (content.toLowerCase().includes("happy") || content.toLowerCase().includes("good")) {
    sentiment = "positive";
  } else if (content.toLowerCase().includes("sad") || content.toLowerCase().includes("bad")) {
    sentiment = "negative";
  }

  res.json({ content, sentiment });
});

app.listen(5000, () => {
  console.log(" Server running on http://localhost:5000");
});
