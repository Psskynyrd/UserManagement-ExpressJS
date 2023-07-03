const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  mongoose = require("./src/services/db.service.js")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Router
const appRoute = require('./src/routes/app.route')
const usersRoute = require('./src/routes/users.route');

// Middleware
const { logging } = require('./src/middlewares/logging.middleware');
const { ErrorHandler } = require("./src/middlewares/error.middleware");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(logging)

app.use('/api', appRoute)
app.use('/api/users', usersRoute)

// Error handler
app.use(ErrorHandler);

app.listen(port, "0.0.0.0", () => {
  console.log(`app listening at http://localhost:${port}`);
});
