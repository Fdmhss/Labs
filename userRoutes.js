const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully!' });
});

module.exports = router;
