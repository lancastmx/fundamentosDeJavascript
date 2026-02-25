exports.success = (req, res, message = '', status = 200) => {
  res.status(status).send({
    error: false,
    status: status,
    body: message,
  });
};

exports.error = (req, res, message = 'Internal Error', status = 500) => {
  console.error('[Response Error]:', message);
  res.status(status).send({
    error: true,
    status: status,
    body: message,
  });
};
