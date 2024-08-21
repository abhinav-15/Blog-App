// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const postRoutes = require('./routes/postRoutes');
const { login } = require('./controllers/authController');

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/login', login);
app.use('/api', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello, Abhinav Tiwari!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
