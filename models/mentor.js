const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: [],
    },
  ],
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
