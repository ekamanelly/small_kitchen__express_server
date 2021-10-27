const { logger } = require("../logger/logger");
const { mealRoute } = require("../routes/meal.route");

module.exports.mealController = ({ utilities, methods, models }) => {
  return async function handler(httpRequest) {
    switch (httpRequest.method) {
      case "POST":
        return prepareMeal(httpRequest);
      case "GET":
        return getMeal(httpRequest);
      default:
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 405,
          errorMessage: `${httpRequest.method} method not allowed.`,
        };
    }
    async function prepareMeal(httpRequest) {
      try {
        const [appointmentIsNotValid, text] =
          utilities.validateMeal(httpRequest);
        if (appointmentIsNotValid) {
          return {
            headers: {
              "Content-Type": "application/json",
            },
            statusCode: 400,
            data: text,
          };
        }
        const {
          body,
          body: { username },
        } = httpRequest;
        body["trackId"] = utilities.generateRandomString({
          name: username,
          length: 5,
        });

        const meal = await methods.createData(models.Meal, body);
        logger.info(meal);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,

          data: {
            body: `thanks for patronage, you can track your order with ${meal.body.trackId}" `,
          },
        };
      } catch (error) {
        console.log(error);

        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 400,
          data: error.message,
        };
      }
    }
    async function getMeal(httpRequest) {
      try {
        const {
          params: { trackId },
        } = httpRequest;
        let user;
        if (trackId != undefined) {
          user = await methods.findOneData(models.Meal, { trackId });
        } else {
          user = await methods.findManyData(models.Meal, {});
        }
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          data: user,
        };
      } catch (error) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 400,
          data: error.message,
        };
      }
    }
  };
};
