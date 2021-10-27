const { authController } = require("../../../controller/user.controller");
const { validateUser } = require("../../../validators/user.validate");

// describe("user validator", function () {
describe("User validator test, ", function () {
  test("when invalid email is provided, should throw Invalid contact email", async () => {
    body = {
      email: "Bad email",
      password: "sdcsdvsdv",
      username: "john bosco",
    };
    // validateAppointment;
    const handler = authController({
      validate: validateUser,
      methods: {},
      models: {},
    });
    const res = await handler({ body, method: "POST" });

    // expect(res.statusCode).toBe(400);
    expect(res.data).toContain("Invalid contact email");
  });
  test("when no username, should throw User Name must be provided", async () => {
    body = {
      email: "johnBosco@google.com",
      password: "sdcsdvsdv",
      // username: "",
    };

    const handler = authController({
      validate: validateUser,
      methods: {},
      models: {},
    });
    const res = await handler({ body, method: "POST" });

    // expect(res.statusCode).toBe(400);
    expect(res.data).toContain("User Name must");
  });
  test("when username is 3 character or less, should throw 3 characters or more ", async () => {
    body = {
      email: "johnBosco@google.com",
      password: "sdcsdvsdv",
      username: "u",
    };

    const handler = authController({
      validate: validateUser,
      methods: {},
      models: {},
    });
    const res = await handler({ body, method: "POST" });

    // expect(res.statusCode).toBe(400);
    expect(res.data).toContain("3 characters long");
  });
  test("when password is 3 character or less, should throw 3 characters or more", async () => {
    body = {
      email: "johnBosco@google.com",
      password: "sdc",
      username: "john bosco",
    };

    const handler = authController({
      validate: validateUser,
      methods: {},
      models: {},
    });
    const res = await handler({ body, method: "POST" });

    // expect(res.statusCode).toBe(400);
    expect(res.data).toContain("least 8 characters long");
  });
  test("when password is not provided, should throw provide password", async () => {
    body = {
      email: "johnBosco@google.com",
      // password: "sdc",
      username: "john bosco",
    };

    const handler = authController({
      validate: validateUser,
      methods: {},
      models: {},
    });
    const res = await handler({ body, method: "POST" });

    // expect(res.statusCode).toBe(400);
    expect(res.data).toContain("Password must be provided");
  });
});
// });
