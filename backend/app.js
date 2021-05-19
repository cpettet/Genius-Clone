const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");

const { environment } = require("./config");
const routes = require("./routes");

const isProduction = environment === "production";
const app = express();
app.use(morgan("dev")); // logs information about requests and responses
app.use(cookieParser()); // middleware: parses cookies
app.use(express.json()); // middleware: parses JSON bodies of requests
if (!isProduction) {
  // cors isn't needed in production since all React & Express resources come
  // from the same origin
  app.use(cors()); // enable cors only in development
}
app.use(
  helmet({
    // helmet sets up headers to secure app
    // disable it since React is safe at mitigating CORS
    contentSecurityPolicy: false,
  })
);
app.use(
  // adds _csrf cookie to any server response
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

// Routes
app.use(routes);

// Catch unhandled requests and forward to error handler
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a sequelize error
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
    err.title = "Validation error";
  }
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  })
})

module.exports = app;
