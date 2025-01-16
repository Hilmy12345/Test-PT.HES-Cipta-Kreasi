const express = require("express");
const bodyParser = require("body-parser");
const rateLimitConfig = require("../config/rateLimit");
const sessionConfig = require("../config/SessionRedis");
const cors = require("cors"); // Aktifkan CORS
const helmetConfig = require("../config/helmet");
const morganConfig = require("../config/morgan");
const mahasiswaRoute = require("../route/mahasiswa");
const errorMiddelware = require("../middleware/error-Middleware");

const app = express();

// Middleware untuk parsing body request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware keamanan dan konfigurasi lainnya
app.use(cors()); // Aktifkan CORS
app.use(rateLimitConfig);
app.use(sessionConfig);
app.use(helmetConfig);
app.use(morganConfig);

// Routing
app.use("/api", mahasiswaRoute);

// Middleware untuk menangani error
app.use(errorMiddelware);

module.exports = app;
