export default function ProjectCard({
    bgColor = "#0B0F14",
    metaBg = "#111826",
    year,
    textColor,
    category,
    title,
    description,
    image,
    alt = "Project Image",
}) {
    return (
        <div
            className="group w-full h-full xl:h-180 rounded-2xl overflow-hidden transition-all duration-500 relative flex flex-col"
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            {/* Top Meta Strip */}


            {/* Title */}
            <div className="px-6 pt-6 flex justify-between">
                <p className="text-2xl sm:text-3xl md:text-5xl xl:text-4xl font-semibold tracking-tight">
                    {title}
                </p>
                <div className="material-symbols-outlined">
                    east
                </div>
            </div>

            {/* Image */}
            <div className="mt-6 overflow-hidden grow">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-48 sm:h-64 md:h-96 xl:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Description */}
            <div className="px-6 py-6">
                <p className="ibm-plex-mono leading-relaxed text-sm sm:text-base md:text-xl xl:text-lg font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
}
