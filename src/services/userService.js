const { v4: uuidv4 } = require("uuid");

let users = [];
let follows = {};

const createUser = (req, res) => {
  const { name } = req.body;

  const user = { id: uuidv4(), name };
  users.push(user);
  follows[user.id] = [];

  res.json(user);
};

const followUser = (req, res) => {
  const { userId, followId } = req.body;

  if (!follows[userId]) return res.status(404).json({ message: "User not found" });

  follows[userId].push(followId);
  res.json({ message: "Followed successfully" });
};

module.exports = { createUser, followUser, users, follows };
