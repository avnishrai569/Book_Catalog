const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/books');
const favoriteRoutes = require('./routes/favorites');

const app = express();
const PORT = process.env.PORT || 5000;

// Configure Mongoose
mongoose.set('strictQuery', false); // or true based on your preference

// Mongoose connection
mongoose.connect('mongodb://localhost:27017/bookcatalog')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/favorites', favoriteRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
