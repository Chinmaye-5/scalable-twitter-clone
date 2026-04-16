const express = require("express");
const cors = require("cors");

const userRoutes = require("./src/routes/userRoutes");
const tweetRoutes = require("./src/routes/tweetRoutes");
const feedRoutes = require("./src/routes/feedRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/", tweetRoutes);
app.use("/", feedRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
