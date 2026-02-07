import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaLink, FaBell, FaCheckCircle, FaClock, FaBolt,
    FaChartLine, FaArrowRight, FaLaptop, FaApple
} from 'react-icons/fa';
import Footer from '../components/Common/Footer';
import PublicNavbar from '../components/Common/PublicNavbar';
import HeroSlider from '../components/HeroSlider';
import FeaturesWithSlider from '../components/FeaturesWithSlider';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen font-sans selection:bg-orange-100 selection:text-orange-600 bg-slate-50">

            {/* --- UNIFIED AMBIENT MESH BACKGROUND --- */}
            {/* Kept as it provides the core aesthetic */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Base & Noise */}
                <div className="absolute inset-0 bg-slate-50"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Floating Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-orange-300/20 to-red-300/20 blur-[100px] animate-drift-slow mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-blue-300/20 to-indigo-300/20 blur-[100px] animate-drift-medium animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-yellow-200/20 to-amber-200/20 blur-[120px] animate-drift-fast animation-delay-4000 mix-blend-multiply opacity-60"></div>
            </div>

            {/* 1. Navbar (Fixed on top, z-index managed in component) */}
            <PublicNavbar />

            {/* Content Layer (Relative to stack above background) */}
            <div className="relative z-10 flex-grow">

                {/* 2. Hero Slider */}
                <div className="relative">
                    <HeroSlider />
                </div>

                {/* 3. Original Rich Content Sections */}

                {/* How It Works Section - VIBRANT COLORFUL REDESIGN */}
                <div id="how-it-works" className="py-24 relative overflow-hidden bg-slate-50">
                    {/* Vibrant Colorful Background Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-rose-50 opacity-80"></div>

                    {/* Animated Colorful Blobs */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden">
                        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-orange-400/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
                        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-400/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse delay-1000"></div>
                        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-rose-400/20 rounded-full blur-[130px] mix-blend-multiply animate-pulse delay-700"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-200/50 text-orange-700 text-xs font-bold uppercase tracking-widest shadow-sm mb-6 backdrop-blur-sm">
                                <FaBolt className="text-orange-500" />
                                <span>Simple Process</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                                How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Works</span>
                            </h2>
                            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                                Start saving money on your favorite tech in just 3 simple steps. No credit card required.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
                            {/* Connecting Line (Desktop Only) - Enhanced */}
                            <div className="hidden md:block absolute top-[80px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>
                            <div className="hidden md:block absolute top-[80px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent -z-10 animate-pulse opacity-50"></div>

                            {/* Step 1 */}
                            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">
                                {/* Large Background Number */}
                                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-100/50 select-none pointer-events-none group-hover:text-orange-50/80 transition-colors duration-500">1</div>

                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-200 text-white mx-auto relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <FaSearch className="text-3xl drop-shadow-md" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Find It</h3>
                                <p className="text-slate-600 text-center leading-relaxed font-medium relative z-10">
                                    Browse your favorite stores like <span className="text-slate-900 font-bold bg-orange-100/50 px-1 rounded">Wasi.lk</span> or <span className="text-slate-900 font-bold bg-orange-100/50 px-1 rounded">SimplyTek</span> and find the gadget you love.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500 delay-100">
                                {/* Large Background Number */}
                                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-100/50 select-none pointer-events-none group-hover:text-orange-50/80 transition-colors duration-500">2</div>

                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-200 text-white mx-auto relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                    <FaLink className="text-3xl drop-shadow-md" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Track It</h3>
                                <p className="text-slate-600 text-center leading-relaxed font-medium relative z-10">
                                    Copy the product link and paste it into <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">PricePulse</span>. We'll start monitoring it instantly.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/80 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500 delay-200">
                                {/* Large Background Number */}
                                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-100/50 select-none pointer-events-none group-hover:text-orange-50/80 transition-colors duration-500">3</div>

                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mb-8 shadow-lg shadow-red-200 text-white mx-auto relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <FaBell className="text-3xl drop-shadow-md" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-orange-600 transition-colors">Buy It</h3>
                                <p className="text-slate-600 text-center leading-relaxed font-medium relative z-10">
                                    Get an <span className="text-slate-900 font-bold bg-red-100/50 px-1 rounded">instant email alert</span> when the price drops to your target. Buy and save big.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section - DARK THEME (Contrast) */}
                {/* Features Section - New Slider Component */}
                <FeaturesWithSlider />

                {/* About Us Section - VIBRANT & PROFESSIONAL COLOR OVERHAUL */}
                <div id="about-us" className="py-20 lg:py-28 relative overflow-hidden bg-white">
                    {/* 1. Deep Vibrant Base Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-rose-50 to-purple-100 opacity-90"></div>

                    {/* 2. Intense Moving Blobs with Blending */}
                    <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-gradient-to-br from-orange-400/40 via-red-300/40 to-yellow-300/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-purple-400/30 to-blue-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-700"></div>
                    <div className="absolute top-[40%] left-[20%] w-[30rem] h-[30rem] bg-rose-300/30 rounded-full blur-[80px] mix-blend-multiply animate-pulse delay-1000"></div>

                    {/* 3. Texture Overlay for Professional Feel */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-soft-light"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        {/* Glassmorphic Card - Highly Refined */}
                        <div className="bg-white/70 backdrop-blur-3xl border border-white/80 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(249,115,22,0.15)] hover:shadow-[0_30px_80px_-20px_rgba(249,115,22,0.25)] transition-all duration-500">

                            {/* Inner Card Glow */}
                            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-orange-300/20 via-rose-200/20 to-transparent blur-3xl -z-10 rounded-full"></div>


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

            </div>

            {/* 4. Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;