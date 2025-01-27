const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: String,
  completedLessons: Array,
});

module.exports = mongoose.model('Progress', progressSchema);
