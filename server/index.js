require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;