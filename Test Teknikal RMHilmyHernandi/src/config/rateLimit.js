const ConnectionRedis = require("./redis");
const rateLimit = require("express-rate-limit");
const { RedisStore } = require("rate-limit-redis");

const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => ConnectionRedis.call(...args),
  }),
  windowMs: 86400000,
  max: 10,
  message: {
    status: 429,
    error: "Terlalu banyak permintaan",
    message: "Terlalu banyak permintaan dari IP ini, coba lagi nanti.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
