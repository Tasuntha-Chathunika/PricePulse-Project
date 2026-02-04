import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaPaperPlane, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    const handleSubscribe = () => {
        const email = document.getElementById('newsletterEmail').value;
        if (email) {
            alert("Thanks for subscribing! 🚀");
        } else {
            alert("Please enter a valid email.");
        }
    };

    return (
        <footer className="bg-slate-900 text-slate-300 pt-0 relative border-t border-slate-800">
            {/* 1. Brand Strip */}
            <div className="w-full h-1 bg-gradient-to-r from-orange-400 via-red-500 to-blue-500"></div>

            <div className="container mx-auto px-6 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-7xl">

                {/* 1. Brand & Description */}
                <div>
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4 cursor-pointer group">
                        <FaChartLine className="text-orange-500 group-hover:scale-110 transition-transform" />
                        <span className="text-white font-extrabold tracking-tight">PricePulse</span>
                    </Link>
                    <p className="text-sm leading-relaxed text-slate-400 font-medium">
                        Track prices, set alerts, and save money on your favorite products from Sri Lanka's top online stores.
                    </p>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
                    <ul className="space-y-3 text-sm font-medium text-slate-400">
                        <li><Link to="/" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">Home</Link></li>
                        <li><Link to="/dashboard" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">Dashboard</Link></li>
                        <li><Link to="/popular" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">Popular Products</Link></li>
                        <li><Link to="/#about-us" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">About Us</Link></li>
                    </ul>
                </div>

                {/* 3. Support & Legal */}
                <div>
                    <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-xs">Support & Legal</h4>
                    <ul className="space-y-3 text-sm font-medium text-slate-400">
                        <li><Link to="#" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">Help Center</Link></li>
                        <li><Link to="#" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">Privacy Policy</Link></li>
                        <li><Link to="#" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">Terms of Service</Link></li>
                        <li><Link to="#" className="hover:text-orange-500 transition-colors duration-300 hover:pl-1">Contact Us</Link></li>
                    </ul>
                </div>

                {/* 4. Newsletter & Socials */}
                <div>
                    <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-xs">Stay Connected</h4>
                    <p className="text-sm mb-4 text-slate-400">Subscribe to get the latest deal alerts.</p>

                    <div className="flex gap-2 mb-6">
                        <input
                            type="email"
                            id="newsletterEmail"
                            placeholder="Enter your email"
                            className="bg-slate-800 text-sm p-3 rounded-l-lg focus:outline-none w-full border border-slate-700 focus:border-orange-500 transition placeholder-slate-500 text-white"
                        />
                        <button
                            onClick={handleSubscribe}
                            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 rounded-r-lg hover:shadow-lg hover:shadow-orange-900/40 transition transform active:scale-95 flex items-center justify-center"
                        >
                            <FaPaperPlane />
                        </button>
                    </div>

                    <div className="flex gap-4 text-xl text-slate-400">
                        <a href="https://www.facebook.com/share/1GPB6K4eL3/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all hover:-translate-y-1">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/tasuntha_chathunika?igsh=bjVqMDc5dDJ2MHBj" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all hover:-translate-y-1">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/tasuntha-chathunika" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all hover:-translate-y-1">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="container mx-auto px-6 border-t border-slate-800 pt-8 pb-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-medium">
                    <p>© 2026 PricePulse. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center gap-1">
                        Designed & Developed by <span className="text-orange-500 font-bold">S.D. Tasuntha</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;