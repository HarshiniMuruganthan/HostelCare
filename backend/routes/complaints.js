const express = require('express');
const multer = require('multer');
const Complaint = require('../models/Complaint');
const Student = require('../models/Student');  // Import the Student model

const router = express.Router();

// Multer setup (file upload handling)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Route for submitting complaints
router.post('/submit', upload.single('image'), async (req, res) => {
  try {
    const { studentId, studentName, roomNumber, complaintText, category } = req.body;

    // Validate required fields
    if (!studentId || !studentName || !roomNumber || !complaintText || !category) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    // Create and save complaint
    const newComplaint = new Complaint({
      studentId, 
      studentName,
      roomNumber,
      complaintText,
      category,
      image: req.file ? req.file.filename : null,
      status: 'Pending',
      submittedAt: new Date()
    });

    await newComplaint.save();

    // Add the new complaint to the student's complaints history
    await Student.findByIdAndUpdate(
      studentId, 
      { $push: { complaints: newComplaint._id } },  // Push complaint's _id to the complaints array
      { new: true }
    );

    res.status(201).json({ message: 'Complaint submitted successfully', complaint: newComplaint });
  } catch (error) {
    console.error('Error saving complaint:', error);
    res.status(500).json({ message: 'Server error while submitting complaint' });
  }
});

module.exports = router;
