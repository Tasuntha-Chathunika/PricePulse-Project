import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChartLine, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const NavLink = ({ href, children }) => (
    <a
        href={href}
        className="relative group text-slate-600 hover:text-orange-600 font-bold text-sm transition-all duration-300 px-2 py-1"
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
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
                ? 'bg-white/90 backdrop-blur-xl border-white/20 shadow-md py-1'
                : 'bg-white/50 backdrop-blur-md border-transparent py-2'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">

                {/* --- LOGO --- */}
                <Link to="/" className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300 -ml-28">
                    <img src={logo} alt="PricePulse" className="h-12 w-auto drop-shadow-sm" />
                </Link>

                {/* --- DESKTOP LINKS --- */}
                <div className="hidden md:flex items-center gap-8 bg-white/50 px-8 py-2.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md hover:bg-white/70 transition-colors duration-300">
                    <NavLink href="#how-it-works">How it Works</NavLink>
                    <NavLink href="#features">Features</NavLink>
                    <NavLink href="#about-us">About Us</NavLink>
                </div>

                {/* --- BUTTONS --- */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        to="/login"
                        className="text-sm font-bold text-slate-700 hover:text-orange-600 bg-white/50 hover:bg-white border border-slate-200 hover:border-orange-200 px-6 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        Log In
                    </Link>
                    <button
                        onClick={() => navigate('/signup')}
                        className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 transform border border-transparent hover:border-orange-300"
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