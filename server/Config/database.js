const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting to the database:", err.stack);
        return;
    }
    console.log("Connected to the database");
});

module.exports = connection;