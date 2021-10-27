const express = require("express");
const mealRoute = express.Router();
const methods = require("../methods/baseMethods");

const { prepareRequest } = require("../helper/preparetRequest");
const { logger } = require("../logger/logger");
const { validateMeal } = require("../validators/meal.validate");
const { generateRandomString } = require("../helper/generateRandomString");
const { Meal } = require("../model/Meal.model");
const { mealController } = require("../controller/meal.controller");
const handle = mealController({
  utilities: { validateMeal, generateRandomString },
  methods,
  models: { Meal },
});
generateRandomString;
async function Controller(req, res) {
  try {
    logger.info("meal route");
    const httpRequest = prepareRequest(req);
    const { headers, statusCode, data } = await handle(httpRequest);
    return res.set(headers).status(statusCode).json(data);
  } catch (error) {
    logger.info(error);
    return res.status(500).end();
  }
}
mealRoute.all("/meal", Controller);
mealRoute.get("/meal/:trackId", Controller);
module.exports.mealRoute = mealRoute;
