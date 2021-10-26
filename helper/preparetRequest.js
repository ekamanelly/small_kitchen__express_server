module.exports.prepareRequest = (req = {}) => {
  return {
    path: req.path,
    method: req.method,
    params: req.params,
    queryParams: req.query,
    body: req.body,
  };
};
