const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter exercise name"],
  },
});

module.exports = mongoose.model("exerciseName", WorkoutSchema);
