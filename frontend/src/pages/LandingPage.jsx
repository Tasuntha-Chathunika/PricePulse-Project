// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaLink, FaBell, FaCheckCircle, FaClock, FaBolt,
    FaChartLine, FaArrowRight, FaLaptop, FaApple
} from 'react-icons/fa';
import Footer from '../components/Common/Footer';
import PublicNavbar from '../components/Common/PublicNavbar';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full relative overflow-x-hidden font-sans selection:bg-orange-100 selection:text-orange-600 bg-slate-50">

            {/* --- UNIFIED AMBIENT MESH BACKGROUND --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Base & Noise */}
                <div className="absolute inset-0 bg-slate-50"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Floating Orbs (Fixed positions to create continuous feel) */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-orange-300/20 to-red-300/20 blur-[100px] animate-drift-slow mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-blue-300/20 to-indigo-300/20 blur-[100px] animate-drift-medium animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-yellow-200/20 to-amber-200/20 blur-[120px] animate-drift-fast animation-delay-4000 mix-blend-multiply opacity-60"></div>
            </div>

            {/* --- CONTENT LAYER (Scrollable) --- */}
            <div className="relative z-10">

                <PublicNavbar />

                {/* Hero Section (Transparent) */}
                <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

                            <div className="lg:w-1/2 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm hover:shadow-md transition cursor-default">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                    </span>
                                    #1 Price Tracker in Sri Lanka
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                                    Don't Buy Until <br />
                                    The Price <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600">Drops.</span>
                                </h1>

                                <p className="text-lg text-slate-900 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium opacity-80">
                                    Stop overpaying on <b>Daraz</b> and <b>Wasi.lk</b>. We track product prices 24/7 and send you an instant alert when it's cheapest to buy.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                    <button onClick={() => navigate('/signup')} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 hover:from-yellow-500 hover:via-orange-600 hover:to-red-700 text-white font-bold rounded-xl shadow-xl shadow-orange-200 hover:shadow-2xl hover:-translate-y-1 transition transform flex items-center justify-center gap-2">
                                        Start Tracking Free <FaArrowRight />
                                    </button>
                                    <button onClick={() => navigate('/dashboard')} className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md text-slate-900 font-bold rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-white transition flex items-center justify-center gap-2 shadow-sm">
                                        <FaLaptop /> Live Demo
                                    </button>
                                </div>

                                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-semibold">
                                    <span className="flex items-center gap-1"><FaCheckCircle className="text-emerald-500" /> No credit card</span>
                                    <span className="flex items-center gap-1"><FaCheckCircle className="text-emerald-500" /> Always Free</span>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative perspective-1000">
                                {/* Alert Box Animation */}
                                <div className="absolute -top-12 -right-4 lg:-right-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-red-100/50 z-30 animate-bounce border border-red-50" style={{ animationDuration: '3s' }}>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 p-2.5 rounded-full text-red-600"><FaBell /></div>
                                        <div>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase">Alert</p>
                                            <p className="text-sm font-bold text-slate-900">iPhone 13 dropped by Rs. 5,000!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 shadow-2xl transform rotate-y-12 hover:rotate-0 transition duration-500">
                                    <div className="bg-white/70 rounded-xl p-3 shadow-sm border border-white/50 flex items-center gap-3 mb-6">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="bg-slate-50/50 px-3 py-1 rounded-md text-xs text-slate-500 flex-1 text-center font-mono">wasi.lk/product/iphone-13</div>
                                    </div>

                                    <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-white/50 flex gap-5 items-center">
                                        <div className="w-28 h-28 bg-slate-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                                            <FaApple className="text-5xl text-slate-300" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-4 w-3/4 bg-slate-100 rounded mb-2"></div>
                                            <div className="h-3 w-1/2 bg-slate-50 rounded mb-5"></div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-slate-400 line-through">Rs. 240,000</span>
                                                    <span className="text-xl font-bold text-slate-900">Rs. 207,900</span>
                                                </div>
                                                <div className="px-3 py-1 bg-red-50 rounded-lg text-red-500 text-xs font-bold border border-red-100 animate-pulse">-15% OFF</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section (Glassmorphic) */}
                <div id="how-it-works" className="py-24 bg-transparent relative">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-orange-600 font-bold tracking-wider uppercase text-xs bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full shadow-sm mb-4 inline-block">Simple Process</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">How it Works</h2>
                            <p className="text-slate-500 mt-4 text-lg font-medium">Start saving money in 3 simple steps.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
                            {/* Connecting Line (Desktop Only) */}
                            <div className="hidden md:block absolute top-[28%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-slate-200 via-orange-200 to-slate-200 -z-10 border-t-2 border-dashed border-slate-300"></div>

                            {/* Step 1 */}
                            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-200 text-white mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <FaSearch className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">1. Find It</h3>
                                <p className="text-slate-600 text-center leading-relaxed font-medium">
                                    Browse your favorite stores like <span className="text-slate-900 font-bold">Wasi.lk</span> or <span className="text-slate-900 font-bold">SimplyTek</span> and find the product you want.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-200 text-white mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <FaLink className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">2. Track It</h3>
                                <p className="text-slate-600 text-center leading-relaxed font-medium">
                                    Copy the product link and paste it into <span className="text-orange-600 font-extrabold">PricePulse</span>. We'll start monitoring instantly.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg shadow-red-200 text-white mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <FaBell className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">3. Buy It</h3>
                                <p className="text-slate-600 text-center leading-relaxed font-medium">
                                    Get an <span className="text-slate-900 font-bold">instant email alert</span> when the price drops to your target. Buy and save.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section (Glassmorphic Cards) */}
                <div id="features" className="py-24 bg-transparent">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Everything you need to save money</h2>
                            <p className="text-slate-700 text-lg font-medium">Smart tools built for smart shoppers. We do the hard work.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-indigo-100/20 hover:shadow-2xl hover:bg-white/70 hover:-translate-y-2 transition duration-300">
                                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-yellow-500 text-2xl mb-6 shadow-inner border border-white/50">
                                    <FaBolt />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Real-time Monitoring</h3>
                                <p className="text-slate-700 leading-relaxed text-sm">
                                    We track prices 24/7 so you never miss a deal.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-indigo-100/20 hover:shadow-2xl hover:bg-white/70 hover:-translate-y-2 transition duration-300">
                                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-blue-500 text-2xl mb-6 shadow-inner border border-white/50">
                                    <FaChartLine />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Price History</h3>
                                <p className="text-slate-700 leading-relaxed text-sm">
                                    View 6-month trends to spot fake discounts.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-indigo-100/20 hover:shadow-2xl hover:bg-white/70 hover:-translate-y-2 transition duration-300">
                                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-red-500 text-2xl mb-6 shadow-inner border border-white/50">
                                    <FaBell />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Instant Alerts</h3>
                                <p className="text-slate-700 leading-relaxed text-sm">
                                    Get notified immediately via email on price drops.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-indigo-100/20 hover:shadow-2xl hover:bg-white/70 hover:-translate-y-2 transition duration-300">
                                <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center text-green-500 text-2xl mb-6 shadow-inner border border-white/50">
                                    <FaCheckCircle />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Always Free</h3>
                                <p className="text-slate-700 leading-relaxed text-sm">
                                    No hidden fees. 100% free for all users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Us Section (Glassmorphic Overlay) */}
                <div id="about-us" className="py-20 lg:py-28 bg-transparent">
                    <div className="container mx-auto px-6">
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden">
                            {/* Inner ambient glow for separation */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 blur-3xl -z-10"></div>

                            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                                <div className="lg:w-1/2">
                                    <span className="text-red-500 font-bold tracking-wider uppercase text-sm">Who We Are</span>
                                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
                                        Fighting Inflation, <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">One Drop at a Time.</span>
                                    </h2>
                                    <p className="text-lg text-slate-800 mb-8 leading-relaxed font-medium">
                                        <span className="font-bold text-slate-900">PricePulse</span> is Sri Lanka's #1 Price Tracker. We help smart shoppers save money by tracking real-time price changes on major electronics stores like Wasi.lk and SimplyTek.
                                    </p>

                                    <div className="space-y-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center text-orange-500 shrink-0 shadow-sm border border-white/50">
                                                <FaCheckCircle className="text-xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900">100% Free to Use</h4>
                                                <p className="text-slate-700 text-sm">No hidden fees or subscriptions. Save money for free.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center text-orange-500 shrink-0 shadow-sm border border-white/50">
                                                <FaClock className="text-xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900">24/7 Monitoring</h4>
                                                <p className="text-slate-700 text-sm">We check prices around the clock so you don't have to.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center text-orange-500 shrink-0 shadow-sm border border-white/50">
                                                <FaBolt className="text-xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900">Instant Alerts</h4>
                                                <p className="text-slate-700 text-sm">Get notified via email the second a discount appears.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Content */}
                                <div className="lg:w-1/2 relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                    <div className="relative bg-slate-900 rounded-[2rem] p-8 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500 border border-slate-700">
                                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="text-white/40 text-xs font-mono">pricepulse_tracker.exe</div>
                                        </div>

                                        {/* Simulated Code/Terminal */}
                                        <div className="font-mono text-sm space-y-3">
                                            <div className="flex gap-2">
                                                <span className="text-green-400">➜</span>
                                                <span className="text-blue-300">~</span>
                                                <span className="text-white">init price_tracker</span>
                                            </div>
                                            <div className="text-white/70 pl-4">
                                                <span className="text-green-400">✔</span> Connecting to stores... <br />
                                                <span className="text-green-400">✔</span> Analyzing Wasi.lk... <br />
                                                <span className="text-green-400">✔</span> Analyzing SimplyTek... <br />
                                            </div>
                                            <div className="flex gap-2 pt-2">
                                                <span className="text-green-400">➜</span>
                                                <span className="text-blue-300">~</span>
                                                <span className="text-white">track product --url="https://wasi.lk/..."</span>
                                            </div>
                                            <div className="bg-white/5 p-3 rounded-lg border-l-4 border-orange-500 mt-2">
                                                <span className="text-orange-400 font-bold block mb-1">Target Reached! 🚀</span>
                                                <span className="text-white text-xs">Price dropped by Rs. 8,500. Sending alert...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Layer */}
                <div className="py-24 px-4 bg-transparent">
                    <div className="container mx-auto px-6">
                        <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden backdrop-blur-sm opacity-100">
                            {/* Abstract Shapes inside CTA */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-900/40 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to stop overpaying?</h2>
                            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto relative z-10">Join thousands of Sri Lankans using PricePulse to find the best deals every day.</p>

                            <button onClick={() => navigate('/signup')} className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition text-lg relative z-10">
                                Create Free Account <FaArrowRight className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;