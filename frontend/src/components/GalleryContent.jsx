import React, { useEffect, useState } from "react";
import { urlFor } from "../sanityClient";

const GalleryCarousel = ({ images, autoSlide = true, interval = 4000 }) => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        if (!autoSlide || isHovered) return;

        const slideInterval = setInterval(nextSlide, interval);
        return () => clearInterval(slideInterval);
    }, [current, autoSlide, isHovered]);

    return (
        <div
            className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slides */}
            <div
                className="w-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-full min-h-[300px] sm:!h-[700px] relative group"
                    >
                        <img
                            src={urlFor(item.image).url()}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div
                            className="
                                absolute inset-0 
                                bg-black/10 group-hover:bg-black/20 
                                transition
                            "
                        />

                        {/* Text */}
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-80">
                                {item.category}
                            </span>
                            <p className="mt-3 text-lg sm:text-2xl playfair-display leading-snug">
                                {item.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
            >
                ‹
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index
                            ? "bg-white w-6"
                            : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default GalleryCarousel;
