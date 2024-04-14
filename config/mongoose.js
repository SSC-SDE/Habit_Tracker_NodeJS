const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Get the MongoDB connection URI from environment variable
const uri = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your Express server or perform other actions here
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    // Exit the application if failed to connect to the database
    process.exit(1);
  });

// Export the Mongoose connection instance to be used elsewhere
module.exports = mongoose.connection;