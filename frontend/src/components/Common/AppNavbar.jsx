// src/components/Common/AppNavbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChartLine, FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';

const AppNavbar = ({ onSearch }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("User");

    // LocalStorage එකෙන් නම ගන්නවා
    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) setUserName(storedName);
    }, []);

    // Logout Function
    const handleLogout = () => {
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            localStorage.removeItem('token');
            navigate('/'); // Home එකට යවනවා
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-lg py-3">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* 1. LOGO SECTION */}
                <div
                    className="flex items-center gap-2 cursor-pointer text-white"
                    onClick={() => navigate('/dashboard')}
                >
                    <div className="text-3xl"><FaChartLine /></div>
                    <span className="text-2xl font-bold tracking-tight drop-shadow-md">
                        PricePulse
                    </span>
                </div>

                {/* 2. SEARCH BAR (Center) */}
                <div className="flex-1 w-full md:max-w-2xl md:mx-10 relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search saved items..."
                            onChange={(e) => onSearch && onSearch(e.target.value)}
                            className="w-full bg-white text-gray-700 py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md text-sm transition-shadow"
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-600 text-lg hover:scale-110 transition">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* 3. RIGHT SECTION (Links & Profile) */}
                <div className="flex items-center gap-6 text-sm font-medium">

                    {/* Link to Popular Items */}
                    <Link
                        to="/popular"
                        className="text-white hover:text-yellow-100 transition hidden md:block border-b-2 border-transparent hover:border-yellow-200 pb-0.5"
                    >
                        Popular Products
                    </Link>

                    {/* Separator Line */}
                    <div className="h-8 w-px bg-white/30 hidden md:block"></div>

                    {/* User Profile Area */}
                    <div className="flex items-center gap-3">
                        <div className="text-right text-white leading-tight hidden md:block">
                            <div className="font-bold text-base">{userName}</div>
                            <button
                                onClick={handleLogout}
                                className="text-xs opacity-90 cursor-pointer hover:text-yellow-200 hover:underline flex items-center justify-end gap-1 ml-auto"
                            >
                                Log Out
                            </button>
                        </div>

                        {/* Profile Icon (Yellow Circle) */}
                        <div className="h-10 w-10 rounded-full bg-yellow-300 text-orange-600 flex items-center justify-center font-bold border-2 border-white shadow-md text-lg">
                            <FaUser />
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default AppNavbar;