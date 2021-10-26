module.exports.authController = ({ validate, methods, models }) => {
  return async function handler(httpRequest) {
    switch (httpRequest.method) {
      case "POST":
        return registerUser(httpRequest);
      case "GET":
        return getUser(httpRequest);
      default:
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 405,
          errorMessage: `${httpRequest.method} method not allowed.`,
        };
    }
    async function registerUser(httpRequest) {
      try {
        const [appointmentIsNotValid, text] = validate(httpRequest);
        if (appointmentIsNotValid) {
          return {
            headers: {
              "Content-Type": "application/json",
            },
            statusCode: 400,
            data: text,
          };
        }
        const { body } = httpRequest;
        // TODO:// salt and hash password
        const user = await methods.createData(models.User, body);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,

          data: {
            body: `your account has been created, login with your username "${body.username}" `,
          }, // madness right?,
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
    async function getUser(httpRequest) {
      try {
        const {
          params: { username },
        } = httpRequest;
        let user;
        if (username != undefined) {
          user = await methods.findOneData(models.User, { username });
        } else {
          user = await methods.findManyData(models.User, {});
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
