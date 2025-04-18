const mongoose = require('mongoose');

const wardenSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String
});

module.exports = mongoose.model('Warden', wardenSchema);
