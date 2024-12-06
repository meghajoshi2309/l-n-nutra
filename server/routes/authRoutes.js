// const express = require('express');
// const { register, login } = require('../Controllers/authController');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../Controllers/authController');

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
