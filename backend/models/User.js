// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roomNumber: { type: String, required: true },
  complaints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Complaint' }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
