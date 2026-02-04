// backend/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../services/emailService');

// --- 1. SIGNUP ---
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Salt and Hash
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // --- PROFESSIONAL WELCOME EMAIL ---
        await sendEmail(email, 'welcome', { name });

        res.status(201).json({ message: "Registration Successful!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// backend/controllers/authController.js

// ... (අනිත් imports උඩින් තියෙන්න ඕන: User, jwt, nodemailer, etc.)

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Token එක හදනවා (15 mins valid)
        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

        // Link එක (Frontend URL එක)
        const resetLink = `http://localhost:5173/reset-password?token=${resetToken}`;

        // --- PROFESSIONAL EMAIL TEMPLATE ---
        await sendEmail(email, 'reset_password', {
            name: user.name,
            resetLink
        });


        res.json({ message: "Password reset link sent!" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

// --- 3. RESET PASSWORD (NEW) ---
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ error: "Invalid token or user not found" });
        }

        // Hash New Password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        await user.save();

        res.json({ message: "Password updated successfully" });

    } catch (error) {
        res.status(400).json({ error: "Invalid or expired token" });
    }
};

// --- 4. LOGIN ---
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Validate Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Return Success
        res.json({
            message: "Login Successful",
            name: user.name,
            email: user.email
        });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: "Server Error during Login" });
    }
};