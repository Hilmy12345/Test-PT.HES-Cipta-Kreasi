const cors = require("cors");
const corsOptions = {
  origin: ["http://test.com", "http://test.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

module.exports = cors(corsOptions);
