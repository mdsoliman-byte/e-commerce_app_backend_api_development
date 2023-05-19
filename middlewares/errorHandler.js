// not found error
const notFound = (req, res, next) => {
  const nowError = new Error(`Not Found ${req.orginalUrl}`);
  res.send({ status: 404 });
  next(nowError);
};
// error handler
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err?.message,
    stack: err?.stack,
  });
};
module.exports = { errorHandler, notFound };
