const express = require("express");
const cors = require("cors");

const config = require("./src/config/config");
const limiter = require("./src/middleware/rateLimiter");
const errorHandler = require("./src/middleware/errorHandler");

const userRoutes = require("./src/routes/userRoutes");
const tweetRoutes = require("./src/routes/tweetRoutes");
const feedRoutes = require("./src/routes/feedRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);

// Routes
app.use("/", userRoutes);
app.use("/", tweetRoutes);
app.use("/", feedRoutes);

// Error handler
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${config.PORT}`);
});
