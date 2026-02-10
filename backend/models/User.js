const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    // ⚠️ වෙනස: Password එක required: false කරන්න. 
    // මොකද Google අයට Password නෑ.
    password: { type: String, required: false },

    role: { type: String, default: "user" }, // 👈 role field added

    img: { type: String },
    fromGoogle: { type: Boolean, default: false }, // Google user කෙනෙක්ද කියලා බලන්න
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);