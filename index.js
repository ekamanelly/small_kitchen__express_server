const express = require("express");
const app = express();
const cors = require("cors");

const env = require("dotenv").config();
const { db } = require("./db/connectDB");
const { User } = require("./model/User.model");
const { log, logger } = require("./logger/logger");

app.use(cors({ exposedHeaders: ["Content-Length", "Authorization"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8080;

// app.get("/", (req, res) => res.status(200).json({ note: "working" }));

app.listen(PORT, async () => {
  logger.info(`App Connected at port ${PORT}`);
  db();
});
