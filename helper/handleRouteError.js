const errorTypes = [{ message: "" }];

module.exports.handleRouteError = function ({ error, res }) {
  return res.status(400).json({ message: error.message, status: false });
};
