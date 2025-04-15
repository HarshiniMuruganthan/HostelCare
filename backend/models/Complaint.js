const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roomNumber: { type: String, required: true },
  complaint: { type: String, required: true },
  image: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Complaint', complaintSchema);
