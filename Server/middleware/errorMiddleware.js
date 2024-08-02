// Unsupported (404) routes

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  error.status = 404; // Set status code to 404
  next(error); // Forward the error to the error handler
};

// Middleware to handle errors

const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res
    .status(error.status || 500) // Use error.status set in notFound middleware
    .json({ message: error.message || "An unknown error occurred" });
};

module.exports = { notFound, errorHandler }; 
