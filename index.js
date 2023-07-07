const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("./src/services/db.service.js");

const cors = require("cors");

require("dotenv").config();

const app = express();
const env = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend app's origin
    credentials: true, // Enable passing credentials
  })
);

// Router
const appRoute = require("./src/routes/app.route");
const usersRoute = require("./src/routes/users.route");

// Middleware
const { logging } = require("./src/middlewares/logging.middleware");
const { ErrorHandler } = require("./src/middlewares/error.middleware");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(logging);

app.use("/api", appRoute);
app.use("/api/users", usersRoute);

// Error handler
app.use(ErrorHandler);

app.listen(port, "0.0.0.0", () => {
  if (env === "development")
    console.log(`app listening at http://localhost:${port}`);
  else console.log("User Management v.1");
});
