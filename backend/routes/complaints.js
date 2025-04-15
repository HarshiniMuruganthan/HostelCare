const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// POST /api/complaints
router.post('/', async (req, res) => {
  const { name, roomNumber, complaintText } = req.body;

  if (!name || !roomNumber || !complaintText) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newComplaint = new Complaint({ name, roomNumber, complaintText });
    await newComplaint.save();
    res.status(201).json({ message: 'Complaint submitted successfully.' });
  } catch (error) {
    console.error('Error saving complaint:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;
