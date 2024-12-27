const apiResponseMiddleware = (req, res, next) => {
  res.success = (result, statusCode = 200) => {
    res.status(statusCode).json({
      statusCode,
      isSuccess: true,
      errorMessages: [],
      result,
    });
  };
  next();
};

module.exports = apiResponseMiddleware