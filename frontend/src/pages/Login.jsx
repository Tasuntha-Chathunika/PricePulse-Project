// src/components/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaEnvelope, FaLock, FaArrowLeft, FaBell, FaCircleNotch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Google icon for React Icons
import axios from "axios";
// import { toast } from "react-toastify"; // Optional: Better alerts

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
        <div className="bg-white h-screen flex flex-col overflow-y-auto">
            <div className="flex-grow flex flex-col md:flex-row h-full">

                {/* LEFT SIDE: FORM SECTION */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 relative overflow-hidden bg-slate-50/30">

                    {/* Animated Background Blobs */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

                    {/* Back Button */}
                    <Link to="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-orange-200 text-slate-600 hover:text-orange-600 transition-all duration-300 font-bold text-xs uppercase tracking-wide group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                    </Link>

                    <div className="w-full max-w-[400px] animate-fade-in relative z-10 my-auto">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-10">
                            <div className="bg-gradient-to-br from-yellow-400 to-red-600 text-white w-9 h-9 rounded-lg flex items-center justify-center text-lg shadow-md">
                                <FaChartLine />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">PricePulse</span>
                        </div>

                        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome back</h1>
                        <p className="text-slate-500 mb-8 text-sm">Enter your email and password to access your dashboard.</p>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-5">

                            {/* Email Input */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Email</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-slate-400 group-focus-within:text-orange-500 transition" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-slate-400 group-focus-within:text-orange-500 transition" />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between pt-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500 cursor-pointer" />
                                    <span className="text-sm text-slate-500 group-hover:text-slate-700 transition font-medium">Remember me</span>
                                </label>
                                {/* ✅ LINKED TO FORGOT PASSWORD PAGE */}
                                <Link to="/forgot-password" className="text-orange-500 hover:text-orange-600 font-medium text-sm text-right block mb-4">
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm tracking-wide disabled:opacity-70 flex items-center justify-center"
                            >
                                {loading ? <><FaCircleNotch className="animate-spin mr-2" /> Verifying...</> : "Sign In to Account"}
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="px-2 bg-slate-50/50 text-slate-400 font-bold">Or continue with</span>
                            </div>
                        </div>

                        {/* Google Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition duration-200 text-sm shadow-sm group"
                        >
                            <FcGoogle className="text-xl group-hover:scale-110 transition-transform" />
                            Sign in with Google
                        </button>

                        <p className="text-center mt-8 text-sm text-slate-500">
                            Don't have an account?
                            <Link to="/signup" className="font-bold text-orange-600 hover:text-orange-700 hover:underline transition ml-1">Create free account</Link>
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE: IMAGE/TESTIMONIAL SECTION */}
                <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-700 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
                        {/* Noise Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    </div>

                    <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-2xl max-w-md text-center transform hover:scale-105 transition duration-700">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center text-white text-4xl mx-auto mb-8 shadow-2xl shadow-orange-500/20">
                            <FaBell />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Never overpay again.</h2>
                        <p className="text-slate-300 leading-relaxed text-lg mb-8">
                            "PricePulse saved me Rs. 25,000 on my new camera gear. The instant alerts are a game changer!"
                        </p>

                        <div className="flex flex-col items-center gap-3">
                            <div className="flex -space-x-4">
                                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=33" alt="User" />
                                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=47" alt="User" />
                                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=12" alt="User" />
                                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=5" alt="User" />
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                Join 5,000+ happy shoppers
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;