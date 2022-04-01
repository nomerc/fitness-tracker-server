const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please enter the title"],
  },
  repsInSets: {
    type: [],
    required: true,
  },
});

module.exports = mongoose.model("exercise", ExerciseSchema);
