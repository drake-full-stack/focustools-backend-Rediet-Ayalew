const mongoose = require("mongoose");

// TODO: Define your Session schema here
const sessionSchema = new mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
      required: true
    },
    duration: {
      type: Number, // Duration in seconds
      min: 1,
      required: true
    },
    completed: {
      type: Boolean,
      default: true   // Assume completed when logged
    },
    startTime: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
