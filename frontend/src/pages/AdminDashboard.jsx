import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    FaTrash, FaEye, FaSearch, FaUserShield, FaUsers,
    FaShoppingBag, FaChartLine, FaSignOutAlt, FaBolt, FaCrown, FaMagic, FaTimes
} from "react-icons/fa";
import logo from "../assets/logo.png";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [adminUser, setAdminUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUserItems, setSelectedUserItems] = useState(null);
    const [loading, setLoading] = useState(true);

    // --- AUTH CHECK ---
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo || (userInfo.role && userInfo.role.trim() !== "admin")) {
            navigate("/login");
        } else {
            setAdminUser(userInfo);
            fetchUsersData();
        }
    }, [navigate]);

    // --- FETCH DATA ---
    const fetchUsersData = async () => {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:5000/api/auth/users-with-data");
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    // --- DELETE USER ---
    const deleteUser = async (id) => {
        if (window.confirm("Are you sure you want to remove this user? This action cannot be undone.")) {
            try {
                await axios.delete(`http://localhost:5000/api/auth/user/${id}`);
                setUsers(users.filter((user) => user._id !== id));
                alert("User deleted successfully.");
            } catch (error) {
                alert("Failed to delete user.");
            }
        }
    };

    // --- SEARCH FILTER ---
    const filteredUsers = users.filter(user =>
        (user.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
        (user.email?.toLowerCase() || "").includes(searchTerm.toLowerCase())
    );

    // --- STATS CALCULATION ---
    const totalUsers = users.length;
    const totalItems = users.reduce((acc, user) => acc + (user.trackedItems?.length || 0), 0);
    const activeAdmins = users.filter(u => u.role === 'admin').length;

    return (
        <div className="min-h-screen font-sans selection:bg-pink-200 selection:text-pink-900 relative overflow-hidden bg-[#F8FAFC]">

            {/* --- ADVANCED BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Deep Aurora Gradients */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 contrast-125 brightness-100 mix-blend-overlay"></div>
            </div>

            {/* --- NAVBAR --- */}
            <nav className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-xl py-4 sticky top-0 z-50 transition-all duration-300">
                <div className="container mx-auto px-6 flex flex-wrap justify-between items-center max-w-7xl relative z-10">

                    {/* Background Texture (Subtle) */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none"></div>

                    {/* LOGO AREA */}
                    <div className="flex items-center gap-5 cursor-pointer relative z-10" onClick={() => navigate('/')}>
                        <img src={logo} alt="PricePulse" className="h-10 w-auto drop-shadow-md hover:scale-105 transition duration-300" />
                        <div className="hidden md:flex flex-col text-white drop-shadow-md">
                            <span className="text-sm font-black tracking-tight leading-none">PricePulse</span>
                            <div className="flex items-center gap-1 mt-0.5">
                                <FaCrown className="text-[10px] text-yellow-300" />
                                <span className="text-[10px] font-bold uppercase tracking-widest leading-none text-yellow-100">Admin Panel</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-white drop-shadow-sm">{adminUser?.name}</p>
                            <div className="flex items-center justify-end gap-1.5">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
                                <p className="text-[10px] font-bold text-white/80 uppercase tracking-wide">Online</p>
                            </div>
                        </div>

                        <button
                            onClick={() => { localStorage.removeItem("userInfo"); navigate("/login"); }}
                            className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white text-white hover:text-red-600 transition-all duration-300 font-bold text-xs shadow-sm flex items-center gap-2 backdrop-blur-sm border border-white/30"
                        >
                            <FaSignOutAlt />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MAIN LAYOUT --- */}
            <main className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 animate-fade-in-up">
                    <div>
                        <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-1">
                            <FaMagic className="animate-pulse" /> Admin Dashboard
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
                            Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">{adminUser?.name.split(' ')[0]}</span>.
                        </h1>
                        <p className="text-slate-500 font-medium mt-1">Manage your community and tracked items efficiently.</p>
                    </div>

                    <div className="relative group w-full md:w-80">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                            <FaSearch className="text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search database..."
                            className="w-full pl-11 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all shadow-sm group-hover:shadow-md"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* --- STATS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <StatsCard
                        title="Total Users"
                        value={totalUsers}
                        icon={<FaUsers />}
                        color="blue"
                        trend="+12%"
                        delay="0"
                    />
                    <StatsCard
                        title="Active Trackers"
                        value={totalItems}
                        icon={<FaShoppingBag />}
                        color="emerald"
                        trend="Live"
                        delay="100"
                    />
                    <StatsCard
                        title="System Role"
                        value="Admin"
                        icon={<FaCrown />}
                        color="orange"
                        trend="Privileged"
                        delay="200"
                    />
                </div>

                {/* --- CONTENT SECTION --- */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-slate-800 pl-1 flex items-center gap-2">
                        <FaUserShield className="text-slate-400" /> Recent Members
                    </h2>

                    {/* LOADING STATE */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 bg-white/40 rounded-3xl border border-white/60">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
                            <p className="text-sm font-bold text-slate-500 mt-4">Loading data...</p>
                        </div>
                    ) : filteredUsers.length === 0 ? (
                        <div className="text-center py-24 bg-white/40 rounded-3xl border border-white/60">
                            <h3 className="text-xl font-bold text-slate-700">No results found</h3>
                            <p className="text-slate-500">Try adjusting your search criteria</p>
                        </div>
                    ) : (
                        // --- FLOATY ROW LIST ---
                        <div className="space-y-3">
                            {filteredUsers.map((user, index) => (
                                <div
                                    key={user._id}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    className="group flex flex-col md:flex-row items-center justify-between p-4 bg-white/80 backdrop-blur-sm border border-white/60 hover:border-orange-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                                >
                                    {/* USER INFO */}
                                    <div className="flex items-center gap-4 w-full md:w-1/3">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold shadow-inner ${user.role === 'admin' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'
                                            }`}>
                                            {user.name?.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-slate-800 truncate">{user.name}</h3>
                                            <p className="text-xs font-medium text-slate-500 truncate">{user.email}</p>
                                        </div>
                                    </div>

                                    {/* ROLE */}
                                    <div className="w-full md:w-1/6 flex justify-start my-2 md:my-0">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${user.role === 'admin'
                                                ? 'bg-purple-100 text-purple-700 border-purple-200'
                                                : 'bg-green-100/50 text-green-700 border-green-200'
                                            }`}>
                                            {user.role || 'USER'}
                                        </span>
                                    </div>

                                    {/* STATS */}
                                    <div className="w-full md:w-1/6 flex items-center gap-2 my-2 md:my-0 text-slate-600 font-bold text-sm">
                                        <FaChartLine className="text-slate-400" />
                                        {user.trackedItems?.length || 0} Items
                                    </div>

                                    {/* DATE */}
                                    <div className="w-full md:w-1/6 text-xs font-bold text-slate-400 my-2 md:my-0">
                                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                                    </div>

                                    {/* ACTIONS */}
                                    <div className="w-full md:w-auto flex items-center gap-2 justify-end">
                                        <button
                                            onClick={() => setSelectedUserItems(user)}
                                            className="p-2.5 rounded-xl text-blue-500 hover:bg-blue-50 hover:scale-105 transition-all bg-white border border-slate-100 shadow-sm"
                                            title="View Items"
                                        >
                                            <FaEye />
                                        </button>
                                        {user.role !== 'admin' && (
                                            <button
                                                onClick={() => deleteUser(user._id)}
                                                className="p-2.5 rounded-xl text-red-400 hover:bg-red-50 hover:text-red-500 hover:scale-105 transition-all bg-white border border-slate-100 shadow-sm"
                                                title="Delete User"
                                            >
                                                <FaTrash />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* --- MODAL --- */}
            {selectedUserItems && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden transform scale-100 animate-in zoom-in-95 duration-300 border border-white/20">

                        {/* Modal Header */}
                        <div className="bg-slate-900 p-6 flex justify-between items-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-[50px] opacity-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-white font-bold text-lg">User Portfolio</h3>
                                <p className="text-slate-400 text-xs">Tracking details for {selectedUserItems.name}</p>
                            </div>

                            {/* FIXED CLOSE BUTTON */}
                            <button
                                onClick={() => setSelectedUserItems(null)}
                                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:text-red-200 transition relative z-50 cursor-pointer"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 bg-slate-50 max-h-[400px] overflow-y-auto custom-scrollbar">
                            {selectedUserItems.trackedItems?.length > 0 ? (
                                <div className="grid grid-cols-1 gap-3">
                                    {selectedUserItems.trackedItems.map((item, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded-2xl flex gap-4 border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all group">
                                            <img
                                                src={item.image || item.img || "https://via.placeholder.com/150"}
                                                alt="Item"
                                                className="w-16 h-16 object-contain mix-blend-multiply bg-slate-50 rounded-xl p-2"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-slate-800 truncate mb-1">{item.title || item.name || "Item"}</h4>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{item.site || "Store"}</span>
                                                    <span className="text-emerald-600 font-black text-sm">Rs. {(item.currentPrice || item.price || 0).toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-slate-400 font-medium">No items tracked yet.</p>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-white text-center border-t border-slate-100">
                            <button onClick={() => setSelectedUserItems(null)} className="text-slate-500 hover:text-slate-800 font-bold text-sm transition">Close View</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Global Styles for Animations */}
            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; opacity: 0; transform: translateY(10px); }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>
        </div>
    );
};

// --- MODERN STATS CARD ---
const StatsCard = ({ title, value, icon, color, trend, delay }) => {
    const gradients = {
        blue: "from-blue-500 to-indigo-600",
        emerald: "from-emerald-400 to-teal-500",
        orange: "from-orange-400 to-pink-500"
    };

    const shadows = {
        blue: "shadow-blue-500/20",
        emerald: "shadow-emerald-500/20",
        orange: "shadow-orange-500/20"
    };

    return (
        <div
            style={{ animationDelay: `${delay}ms` }}
            className={`relative overflow-hidden bg-white p-6 rounded-[2rem] shadow-xl ${shadows[color]} border border-slate-100 group hover:-translate-y-2 transition-all duration-500 animate-fade-in-up`}
        >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradients[color]} opacity-10 rounded-full -mr-8 -mt-8 blur-xl group-hover:scale-150 transition-transform duration-700`}></div>

            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{title}</p>
                    <h3 className="text-4xl font-extrabold text-slate-800 tracking-tighter">{value}</h3>
                </div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[color]} flex items-center justify-center text-white text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    {icon}
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md bg-${color}-50 text-${color}-600 uppercase tracking-widest`}>
                    {trend}
                </span>
            </div>
        </div>
    );
};

export default AdminDashboard;
