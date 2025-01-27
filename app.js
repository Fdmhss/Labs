const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const progressRoutes = require('./routes/progressRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ai_tutoring', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRoutes);
app.use('/api/progress', progressRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
