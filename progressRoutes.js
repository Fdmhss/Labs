const express = require('express');
const Progress = require('../models/progressModel');
const router = express.Router();

// Get user progress
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const progress = await Progress.findOne({ userId });
  res.status(200).json(progress);
});

module.exports = router;
