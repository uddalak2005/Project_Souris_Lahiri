const PublicationCard = ({
    image,
    title,
    subtitle,
    link
}) => {
    return (
        <div className="w-[320px] sm:w-[420px] flex flex-col">
            {/* Image Card */}
            <div className="group relative block h-[230px] sm:h-[260px] rounded-2xl overflow-hidden bg-neutral-200">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

                {/* Center Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xl">↗</span>
                    </div>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col flex-grow mt-4">
                {/* Title */}
                <h3 className="text-lg font-medium text-white leading-snug line-clamp-3 min-h-[4.5rem]">
                    {title}
                </h3>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-sm text-white/50 mt-2">
                        {subtitle}
                    </p>
                )}

                {/* Spacer pushes button down */}
                <div className="flex-grow" />

                {/* Button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                    style={{
                        textDecoration: 'none'
                    }}
                >
                    <div className="ibm-plex-mono w-2/3 p-3 bg-white/20 text-white rounded-xl flex justify-between items-center hover:bg-white/50 hover:text-black transition-colors duration-300">
                        View Publication
                        <span className="material-symbols-outlined">
                            east
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default PublicationCard;
