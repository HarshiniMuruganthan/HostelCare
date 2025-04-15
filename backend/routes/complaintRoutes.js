const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { createComplaint } = require('../controllers/complaintController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, upload.single('image'), createComplaint);

module.exports = router;
