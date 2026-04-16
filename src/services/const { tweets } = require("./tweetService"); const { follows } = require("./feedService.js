const { tweets } = require("./tweetService");
const { follows } = require("./userService");

const getFeed = (req, res) => {
  const userId = req.params.userId;
  const following = follows[userId] || [];

  const feed = tweets
    .filter(t => t.userId === userId || following.includes(t.userId))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json(feed);
};

module.exports = { getFeed };
