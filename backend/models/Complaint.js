const mongoose = require('mongoose');

// Complaint schema definition
const complaintSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, // Correct type for referencing User model
    ref: 'User', // Refers to the User model
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  complaintText: { 
    type: String, 
    required: true 
  },
  roomNumber: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    default: 'Pending' 
  },
  feedback: { 
    type: String, 
    default: '' 
  },
}, { timestamps: true });  // This adds createdAt and updatedAt fields automatically

// Create and export the Complaint model
const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
