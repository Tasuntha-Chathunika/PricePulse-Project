import React, { useState, useEffect } from "react";
import { FaBolt, FaChartLine, FaBell, FaCheckCircle } from "react-icons/fa";

// පින්තූර Import (src/assets)
import img1 from "../assets/feature_1.png";
import img2 from "../assets/feature_2.png";
import img3 from "../assets/feature_3.png";
import img4 from "../assets/feature_4.png";
import img5 from "../assets/feature_5.png";

const FeaturesWithSlider = () => {
    const images = [img1, img2, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const featureItems = [
        {
            icon: <FaBolt />,
            title: "Real-time Monitoring",
            desc: "We track prices 24/7 so you never miss a deal.",
            color: "text-orange-600",
            bgGradient: "bg-orange-100",
            borderGradient: "from-orange-400 to-red-500",
            shadow: "shadow-orange-200"
        },
        {
            icon: <FaChartLine />,
            title: "Price History",
            desc: "View 6-month trends to spot fake discounts.",
            color: "text-blue-600",
            bgGradient: "bg-blue-100",
            borderGradient: "from-blue-400 to-indigo-500",
            shadow: "shadow-blue-200"
        },
        {
            icon: <FaBell />,
            title: "Instant Alerts",
            desc: "Get notified immediately via email on price drops.",
            color: "text-red-600",
            bgGradient: "bg-red-100",
            borderGradient: "from-red-400 to-rose-500",
            shadow: "shadow-red-200"
        },
        {
            icon: <FaCheckCircle />,
            title: "Always Free",
            desc: "No hidden fees. 100% free for all users.",
            color: "text-green-600",
            bgGradient: "bg-green-100",
            borderGradient: "from-green-400 to-emerald-500",
            shadow: "shadow-green-200"
        },
    ];

    return (
        <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle Top Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* --- LEFT SIDE: IMAGE SLIDER --- */}
                    <div className="w-full lg:w-1/2 relative h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-xl border border-white group">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform
                  ${index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}
                `}
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        ))}
                        {/* Very Light Overlay for clarity */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>

                    {/* --- RIGHT SIDE: CONTENT --- */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-12 text-center lg:text-left">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                                Everything you need to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">save money</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium">
                                Smart tools built for smart shoppers. We do the hard work.
                            </p>
                        </div>

                        {/* Features Cloud Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featureItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative rounded-[2rem] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-6 border border-slate-100 overflow-hidden"
                                >
                                    {/* Colorful Background Glow on Hover */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.borderGradient} opacity-10 rounded-bl-[4rem] transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`}></div>

                                    {/* Bottom Border Gradient Line */}
                                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.borderGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 ${item.bgGradient} ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                            {item.icon}
                                        </div>
                                        <h3 className={`text-lg font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.borderGradient} transition-colors duration-300`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesWithSlider;