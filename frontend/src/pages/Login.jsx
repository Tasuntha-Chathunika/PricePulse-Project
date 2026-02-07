// src/components/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaEnvelope, FaLock, FaArrowLeft, FaBell, FaCircleNotch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Google icon for React Icons
import axios from "axios";
import loginBg from "../assets/login_bg.png";
import logo from "../assets/logo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Backend eka run wenne port 5000 nisa URL eka hariyata dammu
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            // Login Success
            localStorage.setItem("userName", res.data.name);
            localStorage.setItem("userEmail", email);

            // Navigate to Dashboard
            navigate("/dashboard");

        } catch (error) {
            // Error Handling
            const errMsg = error.response?.data?.error || "Server Connection Failed!";
            alert(`❌ Error: ${errMsg}`); // Nathnam toast.error(errMsg) use karanna puluwan
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        // Google Login Placeholder
        alert("⚠️ Google Sign-In needs Advanced Setup!\n\nMachan, real Google Login karanna nam 'Google Cloud Console' eke API Key ekak hadanna one. \n\nDanata api Email/Password use karamu!");
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/30 backdrop-blur-sm"></div>

            {/* Back Button */}
            <Link to="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-xl border border-white/10 text-white shadow-xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 font-bold text-xs uppercase tracking-wide group">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-orange-500" />
                <span>Back</span>
            </Link>

            {/* Centered Login Card */}
            <div className="relative z-10 w-full max-w-[480px] mx-4">



                <div className="bg-slate-900/70 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative ring-1 ring-white/5">

                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

                    <div className="animate-fade-in relative z-10">
                        {/* Logo */}
                        <div className="flex justify-center mb-8">
                            <img src={logo} alt="PricePulse" className="w-full max-w-[200px] h-auto drop-shadow-lg" />
                        </div>

                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-extrabold text-white mb-2">Welcome Back</h1>
                            <p className="text-slate-300 text-sm">Enter your credentials to access your dashboard.</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-5">

                            {/* Email Input */}
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

                            {/* Password Input */}
                            <div>
                                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-2 pl-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FaLock className="text-slate-400 group-focus-within:text-orange-400 transition" />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-400 focus:border-orange-500/50 focus:bg-white/10 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between pt-1">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 text-orange-500 rounded border-slate-600 bg-white/5 focus:ring-orange-500/50 focus:ring-offset-0 cursor-pointer" />
                                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition font-medium">Remember me</span>
                                </label>
                                <Link to="/forgot-password" className="text-orange-400 hover:text-orange-300 font-medium text-sm transition">
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm tracking-wide disabled:opacity-70 flex items-center justify-center border border-transparent hover:border-orange-400/30"
                            >
                                {loading ? <><FaCircleNotch className="animate-spin mr-2" /> Verifying...</> : "Sign In to Account"}
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="px-3 bg-transparent text-slate-500 font-bold backdrop-blur-xl">Or continue with</span>
                            </div>
                        </div>

                        {/* Google Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-50 transition duration-200 text-sm shadow-md group border-none"
                        >
                            <FcGoogle className="text-xl group-hover:scale-110 transition-transform" />
                            Sign in with Google
                        </button>

                        <p className="text-center mt-8 text-sm text-slate-400">
                            Don't have an account?
                            <Link to="/signup" className="font-bold text-orange-400 hover:text-orange-300 hover:underline transition ml-1">Create free account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;