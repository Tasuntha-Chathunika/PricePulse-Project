// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaUser, FaEnvelope, FaLock, FaArrowLeft, FaRocket, FaCircleNotch, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import signupBg from "../assets/signup_bg.png";
import logo from "../assets/logo.png";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Backend SignUp Route
            const res = await axios.post("http://localhost:5000/api/auth/signup", {
                name,
                email,
                password,
            });

            // Save Data Locally (Auto-login after signup if needed)
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Success Alert
            alert("✅ Account Created Successfully! Redirecting to Dashboard...");
            navigate("/dashboard");

        } catch (error) {
            const errMsg = error.response?.data?.error || "Registration Failed! Check Backend.";
            alert(`❌ Error: ${errMsg}`);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = () => {
        alert("⚠️ Google Sign-In needs Advanced Setup!\n\nMachan, real Google Login karanna nam 'Google Cloud Console' eke API Key ekak hadanna one. \n\nDanata api Email/Password use karamu!");
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${signupBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"></div>

            {/* Back Button */}
            <Link to="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-xl border border-white/10 text-white shadow-xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 font-bold text-xs uppercase tracking-wide group">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-orange-500" />
                <span>Back</span>
            </Link>

            {/* Centered Signup Card */}
            <div className="relative z-10 w-full max-w-[500px] mx-4">

                <div className="bg-slate-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative ring-1 ring-white/10 hover:ring-orange-500/30 transition-all duration-500">

                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

                    <div className="animate-fade-in relative z-10">
                        {/* Logo */}
                        <div className="flex justify-center mb-6">
                            <img src={logo} alt="PricePulse" className="w-full max-w-[200px] h-auto drop-shadow-lg" />
                        </div>

                        <br></br>
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-extrabold text-white mb-2">Create Account</h1>
                            <p className="text-slate-300 text-sm">Join thousands of smart shoppers saving money daily.</p>
                        </div>

                        {/* Google Button */}
                        <button
                            onClick={handleGoogleSignup}
                            className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-50 transition duration-200 text-sm shadow-md group border-none mb-6"
                        >
                            <FcGoogle className="text-xl group-hover:scale-110 transition-transform" />
                            Sign up with Google
                        </button>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="px-3 bg-transparent text-slate-500 font-bold backdrop-blur-xl">Or register with email</span>
                            </div>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSignup} className="space-y-4">

                            {/* Full Name */}
                            <div>
                                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2 pl-1">Full Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FaUser className="text-slate-400 group-focus-within:text-orange-400 transition" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Perera"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:border-orange-500/50 focus:bg-white/10 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2 pl-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-slate-400 group-focus-within:text-orange-400 transition" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:border-orange-500/50 focus:bg-white/10 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2 pl-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FaLock className="text-slate-400 group-focus-within:text-orange-400 transition" />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Create a password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:border-orange-500/50 focus:bg-white/10 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm tracking-wide mt-2 disabled:opacity-70 flex items-center justify-center border border-transparent hover:border-orange-400/30"
                            >
                                {loading ? <><FaCircleNotch className="animate-spin mr-2" /> Creating...</> : "Create Free Account"}
                            </button>
                        </form>

                        <p className="text-center mt-8 text-sm text-slate-400">
                            Already have an account?
                            <Link to="/login" className="font-bold text-orange-400 hover:text-orange-300 hover:underline transition ml-1">Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;