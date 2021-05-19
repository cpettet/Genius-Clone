const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

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

module.exports = app;