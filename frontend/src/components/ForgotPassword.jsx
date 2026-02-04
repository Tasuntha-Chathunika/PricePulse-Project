// frontend/src/components/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaEnvelope, FaPaperPlane, FaArrowLeft, FaCircleNotch } from 'react-icons/fa';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                alert('✅ Check your email! We sent a reset link.');
            } else {
                alert('❌ Error: ' + data.error);
            }
        } catch (error) {
            alert('❌ Server connection failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 relative flex items-center justify-center p-6 overflow-hidden font-sans">
            
            {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            {/* --- GLASS CARD CONTAINER --- */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(249,115,22,0.15)] p-8 sm:p-12 max-w-[480px] w-full relative border border-white/60 z-10 transform transition-all hover:scale-[1.01] duration-500">
                
                {/* Decoration Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 rounded-b-full"></div>

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col items-center mb-10 mt-2">
                    <div className="flex items-center gap-3 mb-8 animate-fade-in-down">
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
                            <FaChartLine />
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight text-slate-900">PricePulse</span>
                    </div>
                    
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-3 text-center">Forgot Password?</h2>
                    <p className="text-slate-500 text-sm font-medium text-center leading-relaxed max-w-[300px]">
                        Don't worry, it happens. Enter your email linked to your account.
                    </p>
                </div>

                {/* --- FORM SECTION --- */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-orange-500">
                                <FaEnvelope className="text-slate-400 text-lg group-focus-within:text-orange-500 transition-colors duration-300" />
                            </div>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all duration-300 placeholder-slate-400 font-bold text-slate-700 text-sm shadow-inner"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white font-bold py-4 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 text-sm tracking-wide ${loading ? 'bg-slate-400 cursor-not-allowed shadow-none' : 'bg-gradient-to-r from-orange-500 to-red-600'}`}
                    >
                        {loading ? (
                            <>
                                <FaCircleNotch className="animate-spin text-lg" /> Sending Link...
                            </>
                        ) : (
                            <>
                                Send Reset Link <FaPaperPlane className="text-xs group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                {/* --- FOOTER SECTION (UPDATED: GRAY BUTTON) --- */}
                <div className="text-center mt-8 pt-6 border-t border-slate-100">
                    <Link 
                        to="/login" 
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-370 text-gray-500 font-bold hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                        <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Back to Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;