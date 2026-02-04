// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaUser, FaEnvelope, FaLock, FaArrowLeft, FaRocket, FaCircleNotch, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
        // ✅ වෙනස: min-h-screen අයින් කරලා h-screen දැම්මා & overflow-hidden දැම්මා.
        <div className="h-screen flex bg-white font-sans overflow-hidden">

            {/* --- LEFT SIDE: FORM SECTION --- */}
            <div className="flex-grow flex flex-col md:flex-row h-full">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 relative overflow-hidden bg-slate-50/30">

                    {/* Animated Background Blobs */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

                    {/* Back Button */}
                    <Link to="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-orange-200 text-slate-600 hover:text-orange-600 transition-all duration-300 font-bold text-xs uppercase tracking-wide group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                    </Link>

                    <div className="w-full max-w-[400px] relative z-10 my-auto mt-20 lg:mt-auto">

                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-10">
                            <div className="bg-gradient-to-br from-yellow-400 to-red-600 text-white w-9 h-9 rounded-lg flex items-center justify-center text-lg shadow-md">
                                <FaChartLine />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">PricePulse</span>
                        </div>

                        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Create an account</h1>
                        <p className="text-slate-500 mb-8 text-sm">Join thousands of smart shoppers saving money daily.</p>

                        {/* Google Button */}
                        <button
                            onClick={handleGoogleSignup}
                            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-bold py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition duration-200 text-sm shadow-sm mb-6 group"
                        >
                            <FcGoogle className="text-xl group-hover:scale-110 transition-transform" />
                            Sign up with Google
                        </button>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                <span className="px-2 bg-slate-50/50 text-slate-400 font-bold">Or with email</span>
                            </div>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSignup} className="space-y-5">

                            {/* Full Name */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Full Name</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-slate-400 group-focus-within:text-orange-500 transition" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Perera"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Email Address</label>
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

                            {/* Password */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-slate-400 group-focus-within:text-orange-500 transition" />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Create a password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition duration-200 font-medium text-sm"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm tracking-wide mt-2 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? <><FaCircleNotch className="animate-spin" /> Creating Account...</> : "Create Account"}
                            </button>
                        </form>

                        <p className="text-center mt-8 text-sm text-slate-500">
                            Already have an account?
                            <Link to="/login" className="font-bold text-orange-600 hover:text-orange-700 hover:underline transition ml-1">Log in</Link>
                        </p>
                    </div>
                </div>

                {/* --- RIGHT SIDE: IMAGE SECTION --- */}
                <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-700 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    </div>

                    <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-2xl max-w-md text-center transform hover:scale-105 transition duration-700">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center text-white text-4xl mx-auto mb-8 shadow-2xl shadow-orange-500/20">
                            <FaRocket />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Start saving today.</h2>
                        <p className="text-slate-300 leading-relaxed text-lg mb-8">
                            Create your free account and start tracking unlimited products from Wasi.lk, SimplyTek and more instantly.
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-1 text-yellow-400 text-lg">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className="text-slate-400 text-sm font-medium">Trusted by 5,000+ Sri Lankans</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;