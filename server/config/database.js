const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "user1",
  password: "pass1", // replace with your MySQL password
  database: "test",
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;