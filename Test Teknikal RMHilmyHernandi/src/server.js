const app = require("./application/app");
require("dotenv").config();
const { logger, logErrorServer } = require("./config/winston");
const { connectToMongoDB } = require("./config/db");
const Port = process.env.PORT || 4100;

const serverConfig = () => {
  try {
    app.listen(Port, () => {
      logger.info(`Server berjalan pada ${Port}`);
    });
  } catch (err) {
    logErrorServer.error(`Server Down`);
  }
};
connectToMongoDB()
  .then(() => {
    serverConfig();
  })
  .catch((err) => {
    logErrorServer.error(`Server Down ${err}`);
  });
