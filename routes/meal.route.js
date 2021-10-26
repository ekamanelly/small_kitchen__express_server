const express = require("express");
const mealRoute = express.Router();
const methods = require("../methods/baseMethods");

const { prepareRequest } = require("../helper/preparetRequest");
const { logger } = require("../logger/logger");
const { authController } = require("../controller/user.controller");
const { validateUser } = require("../validators/user.validate");
const { User } = require("../model/User.model");
const { Meal } = require("../model/Meal.model");
const handle = authController({
  validate: validateUser,
  methods,
  models: { User, Meal },
});
async function Controller(req, res) {
  try {
    logger.info("called");
    const httpRequest = prepareRequest(req);
    const { headers, statusCode, data } = await handle(httpRequest);
    return res.set(headers).status(statusCode).json(data);
  } catch (error) {
    logger.info(error);
    return res.status(500).end();
  }
}
mealRoute.all("/user", Controller);
mealRoute.get("/user/:username", Controller);
module.exports.mealRoute = mealRoute;
