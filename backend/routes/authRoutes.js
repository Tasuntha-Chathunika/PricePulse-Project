// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, login, forgotPassword, resetPassword } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);

// ✅ මේ අලුත් පේළි දෙක දාන්න
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;