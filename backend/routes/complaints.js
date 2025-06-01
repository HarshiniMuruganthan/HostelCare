const express = require('express');
const multer = require('multer');
const path = require('path');
const Complaint = require('../models/Complaint');
const Student = require('../models/Student');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

/**
 * Submit Complaint
 */
router.post('/submit', upload.single('image'), async (req, res) => {
  try {
    const { userId, studentName, roomNumber, complaintText, category } = req.body;

    // Validation
    if (!userId || !studentName || !roomNumber || !complaintText || !category) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newComplaint = new Complaint({
      userId,
      studentName,
      roomNumber,
      complaintText,
      category: category || 'General', // default fallback if empty string
      image: req.file ? req.file.filename : null,
      status: 'Pending',
      submittedAt: new Date(),
    });

    await newComplaint.save();

    await Student.findByIdAndUpdate(
      userId,
      { $push: { complaints: newComplaint._id } },
      { new: true }
    );

    res.status(201).json({
      message: 'Complaint submitted successfully',
      complaint: newComplaint
    });
  } catch (error) {
    console.error('Error saving complaint:', error);
    res.status(500).json({ message: 'Server error while submitting complaint' });
  }
});

/**
 * Get Complaint History for a User
 */
router.get('/user/:userId/history', async (req, res) => {
  try {
    const userId = req.params.userId;

    const complaints = await Complaint.find({ userId })
      .populate('userId', 'name roomNo')
      .exec();

    if (!complaints || complaints.length === 0) {
      return res.status(404).json({ message: 'No complaints found for this user.' });
    }

    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ message: 'Server error while fetching complaints' });
  }
});

/**
 * Get Complaints by Category (for Admin)
 */
router.get('/admin/category/:category', async (req, res) => {
  try {
    const category = req.params.category;

    const complaints = await Complaint.find({ category });
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints by category:', error);
    res.status(500).json({ message: 'Server error while fetching complaints by category' });
  }
});

/**
 * Update Complaint Status (for Admin)
 */
router.patch('/admin/update-status/:id', async (req, res) => {
  try {
    const complaintId = req.params.id;
    const { status } = req.body;

    const updatedComplaint = await Complaint.findByIdAndUpdate(
      complaintId,
      { status },
      { new: true }
    );

    if (!updatedComplaint) {
      return res.status(404).json({ msg: "Complaint not found" });
    }

    res.json(updatedComplaint);
  } catch (err) {
    res.status(500).json({ msg: "Error updating complaint status" });
  }
});


/**
 * Get All Complaints Grouped by Category (for Admin)
 */
router.get('/admin/all', async (req, res) => {
  try {
    const complaints = await Complaint.find().populate('userId', 'name roomNo').lean();

    // Group complaints by category
    const grouped = complaints.reduce((acc, curr) => {
      const category = curr.category || 'Uncategorized';
      if (!acc[category]) acc[category] = [];
      acc[category].push(curr);
      return acc;
    }, {});

    res.status(200).json(grouped);
  } catch (error) {
    console.error("Error fetching all complaints:", error);
    res.status(500).json({ message: "Server error while fetching complaints for admin" });
  }
});

module.exports = router;
