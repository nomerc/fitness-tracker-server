const ExerciseName = require("../models/ExerciseName");

exports.getExerciseNames = (req, res) => {
  ExerciseName.find()
    .then((ExerciseNames) => {
      res.send(ExerciseNames);
    })
    .catch((e) => res.send(e));
};

exports.createExerciseName = (req, res) => {
  ExerciseName.create(req.body)
    .then((ExerciseName) => res.send(ExerciseName))
    .catch((e) => res.send(e));
};

/* 
exports.updateWorkout = (req, res) => {
  const workout = { date: req.body.date, exercises: req.body.exercises };
  Workout.findOneAndUpdate({ date: req.body.date }, workout, { upsert: true })
    .then(() => res.send(workout))
    .catch((e) => res.send(e));
};

exports.deleteWorkout = (req, res) => {
  Workout.findOneAndRemove({ date: req.params.date })
    .then((workout) => res.send(workout))
    .catch((e) => res.send(e));
};
 */
