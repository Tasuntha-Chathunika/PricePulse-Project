import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChartLine, FaBars, FaTimes } from 'react-icons/fa';

const NavLink = ({ href, children }) => (
    <a
        href={href}
        className="relative group text-slate-600 hover:text-slate-900 font-semibold text-sm transition-colors duration-200"
    >
        {children}
    </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
    <a
        href={href}
        onClick={onClick}
        className="text-slate-600 font-bold hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-xl transition-all block"
    >
        {children}
    </a>
);

const PublicNavbar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm'
                : 'bg-white/60 backdrop-blur-md border-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">

                {/* --- LOGO --- */}
                <Link to="/" className="flex items-center gap-3 group">
                    {/* Squircle Icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                        <FaChartLine className="text-lg" />
                    </div>
                    {/* Text */}
                    <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                        PricePulse
                    </span>
                </Link>

                {/* --- DESKTOP LINKS --- */}
                <div className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-slate-200/50 backdrop-blur-sm">
                    <NavLink href="#how-it-works">How it Works</NavLink>
                    <NavLink href="#features">Features</NavLink>
                    <NavLink href="#about-us">About Us</NavLink>
                </div>

                {/* --- BUTTONS --- */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/login"
                        className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors px-4"
                    >
                        Log In
                    </Link>
                    <button
                        onClick={() => navigate('/signup')}
                        className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 transform"
                    >
                        Get Started
                    </button>
                </div>

                {/* --- MOBILE MENU BUTTON --- */}
                <button
                    className="md:hidden text-slate-900 text-2xl focus:outline-none hover:text-orange-600 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* --- MOBILE MENU --- */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl animate-fade-in-down h-screen">
                    <div className="flex flex-col px-6 py-8 gap-4">
                        <MobileNavLink href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it Works</MobileNavLink>
                        <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
                        <MobileNavLink href="#about-us" onClick={() => setMobileMenuOpen(false)}>About Us</MobileNavLink>
                        <div className="h-px bg-slate-100 my-4"></div>
                        <Link
                            to="/login"
                            className="text-slate-900 font-extrabold text-center py-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Log In
                        </Link>
                        <button
                            onClick={() => {
                                navigate('/signup');
                                setMobileMenuOpen(false);
                            }}
                            className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl shadow-lg w-full"
                        >
                            Create Free Account
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default PublicNavbar;