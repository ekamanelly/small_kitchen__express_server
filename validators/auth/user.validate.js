module.exports.validateUser = (userObj) => {
  const {
    body: { email, username, password },
  } = userObj;
  if (!username) {
    return { isUserValid: false, body: `User Name must  be provided .` };
  }
  if (username.length < 2) {
    return {
      isUserValid: false,
      body: `username must be at least 2 characters long.`,
    };
  }
  if (!password) {
    return { isUserValid: false, body: `Password must  be provided .` };
  }
  if (password.length < 8) {
    return {
      isUserValid: false,
      body: `password must be at least 8 characters long.`,
    };
  }
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  if (!valid.test(email)) {
    return { isUserValid: false, body: "Invalid contact email address." };
  }

  return { isUserValid: true, text: `User detail is valid.` };
};
