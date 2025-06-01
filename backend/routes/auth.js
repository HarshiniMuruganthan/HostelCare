const express = require('express');
const router = express.Router();
const Student = require('../models/Student');


router.post('/login', async (req, res) => {
  const { username, roomNo, password } = req.body;

  try {
    
    const student = await Student.findOne({ username, roomNo });

    if (!student) {
      return res.status(400).json({ error: "Student not found" });
    }

    if (student.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.json({
      _id: student._id,
      name: student.username,
      roomNo: student.roomNo
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error during login" });
  }
});

module.exports = router;
