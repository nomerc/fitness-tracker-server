const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Please enter user id"],
  },
  date: {
    type: Date,
    required: [true, "Please enter workout date"],
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: String,
        required: [true, "Please enter exercise name"],
      },
      repsInSets: {
        type: [Number],
        required: [true, "Please enter reps in sets"],
      },
    },
  ],
});

module.exports = mongoose.model("workout", WorkoutSchema);
