module.exports.validateUser = (userObj) => {
  const {
    body: { email, username, password },
  } = userObj;
  if (!username) {
    return [true, `User Name must  be provided .`];
  }
  if (username.length < 2) {
    return [true, `username must be at least 2 characters long.`];
  }
  if (!password) {
    return [true, `Password must  be provided .`];
  }
  if (password.length < 8) {
    return [true, `password must be at least 8 characters long.`];
  }
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  if (!valid.test(email)) {
    return [true, "Invalid contact email address."];
  }

  return [false, `User detail is valid.`];
};
