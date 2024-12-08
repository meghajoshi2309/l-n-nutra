const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "user1",
  password: "pass1", // replace with your MySQL password
  database: "test",
});

module.exports = db;