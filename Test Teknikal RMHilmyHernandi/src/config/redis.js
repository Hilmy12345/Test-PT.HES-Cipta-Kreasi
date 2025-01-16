const Redis = require("ioredis");

const redisClient = new Redis({
  host: "localhost",
  port: 6379,
  password: "",
});

module.exports = redisClient;
