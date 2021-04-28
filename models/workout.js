const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter a type of workout",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter a name for exercises",
        },
        duration: {
          type: Number,
          required: "Enter how long you want to work out for",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);



const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
