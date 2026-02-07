import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 1. ඔයාගේ ෆොටෝස් ටික මෙතනට Import කරගන්න
// (නම් වෙනස් නම් ඒ අනුව හදාගන්න)
import img1 from '../assets/hero_bg_1.png';
import img2 from '../assets/hero_bg_2.png';
import img3 from '../assets/hero_bg_3.png';
import img4 from '../assets/hero_bg_4.png';

const HeroSlider = () => {
    // 2. ෆොටෝස් ටික Array එකකට දාගමු
    const images = [img1, img2, img3, img4];

    // 3. දැනට පෙන්වන ෆොටෝ එකේ අංකය (Index) මතක තියාගන්න State එක
    const [currentIndex, setCurrentIndex] = useState(0);

    // 4. සෑම තත්පර 5කට (5000ms) වරක් ෆොටෝ එක මාරු කරන Logic එක
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                // අන්තිම ෆොටෝ එකට ආවම ආපහු මුලට යන්න (Loop එකක්)
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // මෙතන 5000 වෙනස් කරලා වේගය අඩු වැඩි කරන්න පුළුවන්

        // Component එක අයින් වෙද්දී Interval එකත් අයින් කරන්න (Memory Leaks නවත්වන්න)
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* --- Background Slideshow --- */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'} 
          `}
                    style={{ backgroundImage: `url(${img})` }}
                >
                    {/* Trick එක මේකයි:
             හැම ෆොටෝ එකම එක උඩ එක තියෙනවා. 
             හැබැයි 'currentIndex' එකට අදාළ ෆොටෝ එකේ විතරක් opacity එක 100% කරනවා.
             අනිත් ඒවා 0% කරනවා. 'duration-1000' නිසා ඒක ස්මූත් විදිහට ෆේඩ් වෙනවා.
          */}
                </div>
            ))}

            {/* --- Dark Overlay (අකුරු පැහැදිලිව පේන්න) --- */}
            <div className="absolute inset-0 bg-slate-900/60"></div>

            {/* --- Content (උඩින් එන විස්තර ටික) --- */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                    Track Prices. Save Money. <br />
                    <span className="text-orange-500">Welcome to PricePulse</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl drop-shadow-md">
                    Your ultimate tool for monitoring product prices and getting alerts when they drop. Smart shopping starts here.
                </p>
                <div className="flex gap-4">
                    <Link to="/signup" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                        Get Started Free
                    </Link>
                    <Link to="/about" className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full border-2 border-white transition duration-300">
                        Learn More
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HeroSlider;