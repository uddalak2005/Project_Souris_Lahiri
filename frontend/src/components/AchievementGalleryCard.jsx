const AchievementGalleryCard = ({ image, category, caption }) => {
    return (
        <div
            className="
                min-w-[260px] sm:min-w-[300px] lg:min-w-[360px]
                rounded-3xl overflow-hidden 
                bg-[#fdfcf8] relative group
            "
        >
            {/* Aspect Ratio Wrapper */}
            <div
                className="
                    relative w-full 
                    aspect-[4/5] sm:aspect-[3/4]
                    overflow-hidden
                "
            >
                <img
                    src={image}
                    alt={caption}
                    loading="lazy"
                    className="
                        absolute inset-0 w-full h-full
                        object-cover object-center
                        
                        transition-all duration-700 ease-out
                    "
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
                <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-80">
                        {category}
                    </span>
                    <p className="mt-2 text-base sm:text-lg playfair-display leading-snug">
                        {caption}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AchievementGalleryCard