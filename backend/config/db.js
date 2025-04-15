const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  console.log('🔄 Attempting MongoDB connection...');
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(' MongoDB Connected');
  } catch (err) {
    console.error(' MongoDB connection failed:', err);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
