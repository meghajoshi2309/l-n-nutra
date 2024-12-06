// const User = require('../Models/User');
// const bcrypt = require('bcrypt');

// // Registration
// exports.register = async (req, res) => {
//     const { username, email, password, confirmPassword } = req.body;
//     if (password !== confirmPassword) {
//         return res.status(400).json({ message: "Passwords do not match." });
//     }

//     try {
//         const newUser = new User({ username, email, password });
//         await newUser.save();
//         res.status(201).json({ message: "User registered successfully!" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Login
// exports.login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: "Invalid email or password." });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid email or password." });
//         }

//         res.status(200).json({ message: "Login successful!", userId: user._id });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


const userModel = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registration Controller
module.exports.register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await userModel.registerUser(username, email, password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Login Controller
module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
