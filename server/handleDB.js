const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'videochatdb'
});

db.connect((error) => {
  if (error) {
    console.error('Database connection error:', error);
    throw error; // Handle connection error
  }
  console.log("Connected to database");
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM userdata';
  db.query(sql, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(result);
  });
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const sql = 'INSERT INTO userdata (username, email, password) VALUES (?, ?, ?)';
  const params = [username, email, password];

  db.query(sql, params, (error, result) => {
    if (error) {
      console.error('Error inserting into database:', error);
      return res.status(500).json({ error: 'Database insertion error' });
    }
    res.json({ message: 'User registered successfully', data: { username, email } });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM userdata WHERE email = ? AND password = ?';
  const params = [email, password];

  db.query(sql, params, (error, result) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    if (result.length === 1) {
      res.json({ status: true, username: result[0].username, message: 'Login successful' });
    } else {
      res.json({ status: false, message: 'Email or password incorrect' });
    }
  });
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
