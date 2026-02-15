const PublicationCard = ({
    image,
    title,
    subtitle,
    link
}) => {
    return (
        <div className="w-[320px] sm:w-[420px]">
            {/* Image Card */}
            <div
                className="group relative block h-[230px] rounded-2xl overflow-hidden bg-neutral-200"
            >
                {/* Image */}

                <div className="w-full h-[200px] sm:h-[300px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

                {/* Center Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xl">↗</span>
                    </div>
                </div>
            </div>

            {/* Text Below Image */}
            <div className="mt-3">
                <h3 className="text-base font-medium text-white leading-snug">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-sm text-white/50 mt-1">
                        {subtitle}
                    </p>
                )}
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="ibm-plex-mono w-1/2 p-3 bg-white/20 border-white  text-white rounded-xl flex justify-between items-center hover:bg-white/50 hover:text-black transition-colors duration-300">
                    View Publication
                    <div className="material-symbols-outlined text-white">
                        east
                    </div>
                </div>

            </a>
        </div>
    );
};

export default PublicationCard;
