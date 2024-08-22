const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Use auth routes
app.use('/api/posts', postRoutes); // Use post routes

app.get('/', (req, res) => {
  res.send('Hello, Abhinav Tiwari!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
