const morgan = require("morgan");
const { logger } = require("./winston");

const morganMiddleware = morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

module.exports = morganMiddleware;
