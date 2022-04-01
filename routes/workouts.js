const express = require("express");
const Workout = require("../models/Workout");
const router = express.Router();
const {
  createWorkout,
  updateWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
} = require("../controllers/workoutController");

const authenticate = require("../middleware/auth");

router.use(authenticate);
router.route("/").get(getWorkouts);
router.route("/").post(createWorkout);
router.route("/:date").get(getSingleWorkout);
router.route("/:date").post(updateWorkout);
router.route("/:date").delete(deleteWorkout);

module.exports = router;
