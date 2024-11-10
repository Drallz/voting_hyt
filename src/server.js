// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Port for the backend server

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Enable CORS for frontend requests
app.use(cors());

// MySQL database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Moloko123*',
  database: 'hyt', // Make sure to change this to your DB name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define the login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // SQL query to find the user with the provided username
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    if (results.length > 0) {
      // User found, return a success response
      res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      // No matching user, return an error response
      res.status(401).json({ error: 'Invalid username or password' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
