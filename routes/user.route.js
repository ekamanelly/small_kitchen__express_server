const express = require("express");
const userRoute = express.Router();
const methods = require("../methods/baseMethods");

const { prepareRequest } = require("../helper/preparetRequest");
const { logger } = require("../logger/logger");
const { authController } = require("../controller/user.controller");
const { validateUser } = require("../validators/user.validate");
const { User } = require("../model/User.model");
const handle = authController({
  validate: validateUser,
  methods,
  models: { User },
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
userRoute.all("/user", Controller);
userRoute.get("/user/:username", Controller);
module.exports.userRoute = userRoute;
