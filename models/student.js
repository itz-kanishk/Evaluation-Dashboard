const express = require("express");
const app = express();
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  //mentor id that is from other collection named mentor
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  idea: {
    type: Number,
    required: true,
    default: 0,
  },
  execution: {
    type: Number,
    required: true,
    default: 0,
  },
  viva: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
