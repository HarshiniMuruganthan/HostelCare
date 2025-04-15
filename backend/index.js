const express = require('express');
const dotenv = require('dotenv');
const complaintsRoute = require('./routes/complaints');
const connectDB = require('./config/db'); // Import DB connector

// Load environment variables
dotenv.config();

// Log initial message
console.log(' Starting HostelCare Backend...');

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());


app.use('/uploads', express.static('uploads'));


// API Routes
app.use('/api/complaints', complaintsRoute);

// Connect to MongoDB and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
});
