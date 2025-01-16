const ConnectionRedis = require("./redis");
const session = require("express-session");
const { RedisStore } = require("connect-redis");
const sessionConfig = session({
  store: new RedisStore({ client: ConnectionRedis }),
  secret: process.env.SESSION_SECRET || "defaultSecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000,
  },
});

module.exports = sessionConfig;
