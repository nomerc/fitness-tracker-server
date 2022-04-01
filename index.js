const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Load Config File
dotenv.config({ path: "./config/config.env" });

// Connect To Database
db().then();

// Express App
const app = express();

// Middlewares
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(
  cors({
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id",
    exposedHeaders: "x-access-token, x-refresh-token",
  })
);

// Load Routes
const workoutsRoute = require("./routes/workouts");
const exerciseNamesRoute = require("./routes/ExerciseNames");
const usersRoute = require("./routes/users");

// Use Routes
app.use("/workouts", workoutsRoute);
app.use("/exercise_names", exerciseNamesRoute);
app.use("/users", usersRoute);

// Define Port Number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
