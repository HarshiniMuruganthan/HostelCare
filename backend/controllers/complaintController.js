const Complaint = require('../models/Complaint');

exports.submitComplaint = async (req, res) => {
  try {
    const { name, roomNumber, complaint } = req.body;
    const image = req.file ? req.file.filename : null;

    const newComplaint = new Complaint({
      name,
      roomNumber,
      complaint,
      image,
      user: req.user.id, // from JWT token middleware
    });

    await newComplaint.save();

    res.status(201).json({
      message: 'Complaint submitted successfully',
      complaint: newComplaint,
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};
