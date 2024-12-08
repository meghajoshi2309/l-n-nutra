const bcrypt = require('bcryptjs');

const db = require('../config/database')

module.exports = {
  async registerUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  async findUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [email], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }
};
