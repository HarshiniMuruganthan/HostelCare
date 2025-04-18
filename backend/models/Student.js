const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roomNo: {
    type: String,
    required: true
  },
  complaints: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Complaint'  // Reference to the Complaint model
  }]
});

module.exports = mongoose.model('Student', studentSchema);
