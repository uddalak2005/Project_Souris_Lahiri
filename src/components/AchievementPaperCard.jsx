const AchievementPaperCard = ({ title, date, description, tag, image }) => {
    // Default image URL
    const defaultImage = "https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="group min-w-[320px] max-w-[300px] sm:min-w-[500px] sm:max-w-[500px] 
            bg-[#1c1c1c] rounded-2xl overflow-hidden transition-all duration-300 
            hover:shadow-2xl hover:shadow-blue-900/10 cursor-pointer">

            {/* Image Container */}
            <div className="w-full aspect-4/3 overflow-hidden bg-gray-900">
                <img
                    src={image || defaultImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col gap-4">

                {/* Meta Row */}
                <div className="flex justify-between items-center text-xs font-medium tracking-wide text-gray-400 uppercase ibm-plex-mono">
                    <span>{title.split(' ')[0]}</span> {/* Using first word of title as brand-like element */}
                    <span>{tag} | {date}</span>
                </div>

                {/* Main Title/Description Area matching reference */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-white leading-tight zalando-sans group-hover:text-[#4cc9f0] transition-colors">
                        {title}
                    </h3>
                    <p className="ibm-plex-mono text-sm sm:text-base text-gray-400 leading-relaxed inter line-clamp-3">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AchievementPaperCard;
