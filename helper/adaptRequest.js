module.exports.adaptRequest = (req = {}) => {
  return {
    path: req.path,
    method: req.method,
    params: req.params,
    queryParams: req.query,
    body: req.body,
  };
};
