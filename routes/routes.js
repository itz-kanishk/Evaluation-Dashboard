const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const Mentor = require("../models/mentor");

// make a new mentor with email and no students

router.post("/mentor", async (req, res) => {
  try {
    const mentor = new Mentor({
      email: req.body.email,
    });
    await mentor.save();
    res.send(mentor);
  } catch (error) {
    res.error(error);
  }
});

// make a new student with email and mentor id as empty and score 0

router.post("/student", async (req, res) => {
  try {
    const student = new Student({
      email: req.body.email,
      //mentor id is empty
      mentor: null,
    });
    await student.save();
    res.send(student);
  } catch (error) {
    res.error(error);
  }
});

// take a array of student ids and assign them to a mentor

router.post("/mentor/:mentorId/student", async (req, res) => {
  try {
    let data = [];
    const students = await Student.find();
    students.forEach((student) => {
      if (student.mentor == req.params.mentorId) {
        data.push(student);
      }
    });
    let len = data.length;
    let len2 = req.body.students.length;
    if (len + len2 > 4) {
      return res.json("Mentor can have at most 4 students");
    }
    req.body.students.forEach(async (studentId) => {
      const student = await Student.findById(studentId);
      if (student.mentor) {
        //do nothing
      } else {
        student.mentor = req.params.mentorId;
        await student.save();
      }
    });
    const mentor = await Mentor.findById(req.params.mentorId);
    mentor.students = mentor.students.concat(req.body.students);
    await mentor.save();
    res.send(mentor);
  } catch (error) {
    res.json(error);
  }
});

// get all students of a mentor
router.get("/mentor/:mentorId/students", async (req, res) => {
  //for every student find it mentor id and send the matching students
  let data = [];
  try {
    const students = await Student.find();
    req.params.mentorId;
    students.forEach((student) => {
      if (student.mentor == req.params.mentorId) {
        data.push(student);
      }
    });
    res.send(data);
  } catch (error) {
    res.json(error);
  }
});

// edit the score of a student by student id
router.put("/student/:studentId/score", async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    // if total is not given then it is sum of idea, execution and viva
    //req.body.total = (req.body.idea + req.body.execution + req.body.viva) ;
    // req.body.total = Math.round(req.body.total);
    // console.log(req.body.total);
    // if (req.body.total > 10) {
    //   req.body.total = 10;
    // }
    //convert to integer
    req.body.total = parseInt(req.body.total);
    req.body.idea = parseInt(req.body.idea);
    req.body.execution = parseInt(req.body.execution);
    req.body.viva = parseInt(req.body.viva);

    if (req.body.total < 0) {
      req.body.total = 0;
    }
    if (req.body.idea > 10) {
      req.body.idea = 10;
    }
    if (req.body.idea < 0) {
      req.body.idea = 0;
    }
    if (req.body.execution > 10) {
      req.body.execution = 10;
    }
    if (req.body.execution < 0) {
      req.body.execution = 0;
    }
    if (req.body.viva > 10) {
      req.body.viva = 10;
    }
    if (req.body.viva < 0) {
      req.body.viva = 0;
    }
    student.total = req.body.idea + req.body.execution + req.body.viva;
    student.idea = req.body.idea;
    student.execution = req.body.execution;
    student.viva = req.body.viva;
    await student.save();
    res.send(student);
  } catch (error) {
    res.json(error);
  }
});
// get all the student that are not assigned to any mentor
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find({ mentor: null });
    res.send(students);
  } catch (error) {
    res.error(error);
  }
});

// remove the student from the mentor and mentor from the student
router.delete("/mentor/:mentorId/student/:studentId", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const student = await Student.findById(req.params.studentId);
    mentor.students = mentor.students.filter(
      (studentId) => studentId != req.params.studentId
    );
    student.mentor = null;
    //make grade 0
    student.total = 0;
    student.idea = 0;
    student.execution = 0;
    student.viva = 0;
    await mentor.save();
    await student.save();
    res.send(mentor);
  } catch (error) {
    res.error(error);
  }
});

module.exports = router;
