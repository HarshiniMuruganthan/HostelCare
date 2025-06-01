const express = require('express');
const multer = require('multer');
const path = require('path');
const Complaint = require('../models/Complaint');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });


const router = express.Router();


router.post('/', upload.single('image'), async (req, res) => {
  const { username, roomNo, block, problem, category } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''; 

  try {
    const newComplaint = new Complaint({
      username,
      roomNo,
      block,
      problem,
      category,
      imageUrl,
    });
    await newComplaint.save();
    res.status(201).json({
      message: 'Complaint created successfully',
      complaint: newComplaint,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating complaint' });
  }
});

module.exports = router;
