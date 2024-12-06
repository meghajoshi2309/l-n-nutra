// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// }, { timestamps: true });

// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// const User = mongoose.model('User', UserSchema);
// module.exports = User;


const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'user1',
  password: 'pass1', // replace with your MySQL password
  database: 'test'
});

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
