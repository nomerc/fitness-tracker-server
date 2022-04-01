const express = require("express");
const Workout = require("../models/Workout");
const router = express.Router();
const {
  getExerciseNames,
  createExerciseName,
} = require("../controllers/exerciseNameController");

router.route("/").get(getExerciseNames);
router.route("/").post(createExerciseName);

module.exports = router;
