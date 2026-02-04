// src/pages/Popular.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    FaSearch, FaUserCircle, FaHeart, FaRegHeart, FaChartLine
} from "react-icons/fa";
import Footer from "../components/Common/Footer";

const Popular = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // User Info
    const userName = localStorage.getItem("userName");

    // Categories
    const categories = ["All", "Phones", "Audio", "Laptops"];

    // Sample Data for Fallback/Testing
    const SAMPLE_PRODUCTS = [
        {
            _id: "1",
            title: "iPhone 15 Pro Max",
            subtitle: "Blue Titanium (256GB)",
            brand: "Apple",
            site: "Wasi.lk",
            currentPrice: 415000,
            priceHistory: [{ price: 450000 }],
            image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
            url: "https://wasi.lk",
            tag: "Best Seller",
            tagColor: "bg-orange-100 text-orange-800"
        },
        {
            _id: "2",
            title: "Galaxy S24 Ultra",
            subtitle: "Titanium Grey (12GB/256GB)",
            brand: "Samsung",
            site: "SimplyTek",
            currentPrice: 245000,
            priceHistory: [{ price: 285000 }],
            image: "https://images.samsung.com/is/image/samsung/p6pim/lk/sm-s928bztqxhl/gallery/lk-galaxy-s24-s928-sm-s928bztqxhl-539609783?$650_519_PNG$",
            url: "https://simplytek.lk",
            tag: "Trending",
            tagColor: "bg-yellow-100 text-yellow-800"
        },
        {
            _id: "3",
            title: "WH-1000XM5",
            subtitle: "Noise Canceling Headphones",
            brand: "Sony",
            site: "Daraz",
            currentPrice: 108000,
            priceHistory: [{ price: 125000 }],
            image: "https://www.sony.lk/image/6145c1d32e6ac8e63a46c912dc834794?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
            url: "#",
            tag: "Price Drop",
            tagColor: "bg-red-100 text-red-800"
        },
        {
            _id: "4",
            title: "Charge 5",
            subtitle: "Portable Bluetooth Speaker",
            brand: "JBL",
            site: "Wasi.lk",
            currentPrice: 36900,
            priceHistory: [{ price: 45000 }],
            image: "https://uk.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1d9b3252/JBL_Charge_5_Teal_Hero_1605x1605px.png?sw=537&sfrm=png&ixlib=js-2.3.2",
            url: "#",
            tag: "Hot",
            tagColor: "bg-pink-100 text-pink-800"
        },
        {
            _id: "5",
            title: "Watch Ultra 2",
            subtitle: "GPS + Cellular (Titanium)",
            brand: "Apple",
            site: "SimplyTek",
            currentPrice: 255000,
            priceHistory: [{ price: 275000 }],
            image: "https://www.istore.lk/wp-content/uploads/2023/09/Apple-Watch-Ultra-2-Alpine-Loop-Blue-1.jpg",
            url: "#",
            tag: "New",
            tagColor: "bg-blue-100 text-blue-800"
        }
    ];

    // --- FETCH DATA ---
    useEffect(() => {
        const fetchPopular = async () => {
            try {
                // Correct Endpoint
                const res = await axios.get("http://localhost:5000/api/products/popular");
                if (res.data.length > 0) {
                    setProducts(res.data);
                } else {
                    setProducts(SAMPLE_PRODUCTS);
                }
            } catch (error) {
                console.error("Using sample data", error);
                setProducts(SAMPLE_PRODUCTS);
            } finally {
                setLoading(false);
            }
        };
        fetchPopular();
    }, []);

    // Filter Logic
    const filteredProducts = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());

        let category = "Other";
        const t = p.title.toLowerCase();
        if (t.includes("iphone") || t.includes("samsung") || t.includes("pixel")) category = "Phones";
        else if (t.includes("macbook") || t.includes("laptop")) category = "Laptops";
        else if (t.includes("headphone") || t.includes("speaker") || t.includes("buds")) category = "Audio";

        const matchesCategory = activeCategory === "All" || category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-sans flex flex-col text-slate-800">

            {/* --- NAVBAR --- */}
            <nav className="bg-white sticky top-0 z-50 px-6 py-4 shadow-sm border-b border-gray-100">
                <div className="container mx-auto flex items-center justify-between">
                    {/* 1. Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition">
                            <FaChartLine />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">PricePulse</span>
                    </Link>

                    {/* 2. Search Bar (Centered) */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-10 relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-gray-100 border-none text-slate-700 py-3 pl-6 pr-12 rounded-full focus:bg-white focus:ring-2 focus:ring-orange-200 transition-all font-medium text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* 3. Actions */}
                    <div className="flex items-center gap-6">
                        <button className="bg-[#E13030] hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md shadow-red-100 transition">
                            Popular
                        </button>

                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                            <div className="text-right hidden sm:block leading-tight">
                                <p className="font-bold text-xs text-slate-900">{userName || "Guest"}</p>
                                <button onClick={() => { localStorage.clear(); navigate("/login"); }} className="text-[10px] text-gray-400 font-bold hover:text-red-500 tracking-wide">LOG OUT</button>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center font-bold shadow-md cursor-pointer hover:scale-105 transition">
                                {userName ? userName.charAt(0).toUpperCase() : <FaUserCircle />}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <div className="relative bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50 pt-12 pb-16">
                <div className="container mx-auto px-6 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        LIVE DEALS
                    </div>

                    {/* Header */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
                        Trending <span className="text-slate-900">Drops</span> 🔥
                    </h1>
                    <p className="text-slate-500 font-medium text-sm mb-10">
                        Tracked live from Wasi.lk & SimplyTek.
                    </p>

                    {/* Category Filter */}
                    <div className="flex justify-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${activeCategory === cat
                                    ? "bg-slate-900 text-white shadow-lg lg:scale-105"
                                    : "bg-white text-slate-600 hover:bg-gray-50 hover:text-slate-900"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- PRODUCT GRID --- */}
            <div className={`container mx-auto px-6 py-12 flex-grow ${loading ? 'flex items-center justify-center' : ''}`}>
                {loading ? (
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

// --- COLOURFUL PRODUCT CARD ---
const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(false);

    // Price Calculation
    const currentPrice = product.currentPrice || 0;
    const initialPrice = product.priceHistory?.[0]?.price || currentPrice;
    const diff = initialPrice - currentPrice;

    // Tag Logic - More Vibrant Default
    let tagText = product.tag || "NEW";
    let tagBg = "bg-gradient-to-r from-blue-400 to-blue-600";

    // Auto-detect drops
    if (diff > 0) {
        tagText = "PRICE DROP";
        tagBg = "bg-gradient-to-r from-red-500 to-orange-500";
    } else if (product.tag === "Best Seller") {
        tagBg = "bg-gradient-to-r from-yellow-400 to-orange-500";
    }

    return (
        <div className="group relative z-0">
            {/* 1. Animated Gradient Border Effect */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-[34px] opacity-0 group-hover:opacity-100 blur-[2px] transition-all duration-500"></div>

            <div className="relative bg-white rounded-[32px] p-5 h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] border border-gray-100 group-hover:border-transparent">

                {/* 2. Soft Background Blob for Image */}
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-tr from-orange-100 to-red-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

                {/* Top Bar */}
                <div className="flex justify-between items-start mb-4 z-10">
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider text-white shadow-sm ${tagBg}`}>
                        {tagText}
                    </span>
                    <button
                        onClick={() => setLiked(!liked)}
                        className="w-8 h-8 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all duration-300 transform active:scale-90"
                    >
                        {liked ? <FaHeart className="text-red-500 text-sm" /> : <FaRegHeart className="text-sm" />}
                    </button>
                </div>

                {/* Image */}
                <div className="h-44 w-full flex items-center justify-center mb-6 relative z-10">
                    <img
                        src={product.image}
                        alt={product.title}
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }}
                        className="h-full w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                    />
                </div>

                {/* Content */}
                <div className="mt-auto z-10">
                    <p className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <span className="w-1 h-4 bg-orange-500 rounded-full inline-block"></span>
                        {product.brand || "STORE"}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-5 line-clamp-1">
                        {product.subtitle || product.site}
                    </p>

                    {/* Price Row */}
                    <div className="flex items-center justify-between border-t border-dashed border-gray-100 pt-4">
                        <div>
                            <div className="text-xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                                Rs. {(currentPrice).toLocaleString()}
                            </div>
                            {diff > 0 && (
                                <div className="text-xs text-slate-400 line-through decoration-slate-300">
                                    Rs. {(initialPrice).toLocaleString()}
                                </div>
                            )}
                        </div>

                        {diff > 0 ? (
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md shadow-red-200 animate-pulse">
                                -{(diff / 1000).toFixed(0)}k Off
                            </div>
                        ) : (
                            <div className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-md">
                                Best Price
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;