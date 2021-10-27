const express = require("express");
const app = express();

const env = require("dotenv").config();
const { db } = require("./db/connectDB");
const { logger } = require("./logger/logger");
const { mealRoute } = require("./routes/meal.route");
const { userRoute } = require("./routes/user.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8082;

app.use(userRoute);
app.use(mealRoute);

app.listen(PORT, async () => {
  logger.info(`App Connected at port ${PORT}`);
  db();
});
