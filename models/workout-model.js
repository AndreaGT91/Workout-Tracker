const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    enum: ["cardio", "resistance"],
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  weight: { type: Number },
  sets: { type: Number },
  reps: { type: Number },
  duration: { type: Number },
  distance: { type: Number }
});

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now
  },
  exercises: [exerciseSchema]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
