const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

  mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,     // Avoid deprecation warning
    useUnifiedTopology: true,  // New Server Discovery and Monitoring engine
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    maxPoolSize: 10,          // Maximum number of connections in the pool
  })
  .then(() => console.log('Connected successfully'))
  .catch(err => console.error('Connection failed:', err));

  const db = mongoose.connection;

db.on('connected', () => console.log('MongoDB connected'));
db.on('error', (err) => console.error('MongoDB error:', err));
db.on('disconnected', () => console.log('MongoDB disconnected'));

// Close connection on app termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});

if (mongoose.connection.readyState === 1) {
    console.log('Already connected');
  } else {
    mongoose.connect('mongodb://localhost:27017/mydatabase');
  }

  mongoose.connection.close()
  .then(() => console.log('Connection closed'))
  .catch(err => console.error('Error closing connection:', err));