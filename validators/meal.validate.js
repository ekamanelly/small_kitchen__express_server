module.exports.validateMeal = (reqObj) => {
  const {
    body: { username, mealName },
  } = reqObj;
  if (!mealName) {
    return [true, `meal Name must be provided.`];
  }
  if (!username) {
    return [true, `username must be provided.`];
  }

  return [false, `User detail is valid.`];
};
