import { useEffect, useState } from "react"
import AchievementGalleryCard from "../components/AchievementGalleryCard"

const GallerySection = () => {

    const [loading, setLoading] = useState(true)


    const galleryItems = [
        {
            _id: "1",
            image: "https://example.com/images/research1.jpg",
            category: "research",
            caption: "Presented research on deep learning for breast cancer detection."
        },
        {
            _id: "2",
            image: "https://example.com/images/hackathon1.jpg",
            category: "hackathon",
            caption: "Winning project at Smart India Hackathon 2024."
        },
        {
            _id: "3",
            image: "https://example.com/images/certification1.jpg",
            category: "certification",
            caption: "Completed Microsoft AI Classroom Series Certification."
        },
        {
            _id: "4",
            image: "https://example.com/images/clubEvent1.jpg",
            category: "club",
            caption: "Organized a tech workshop at CODEX club event."
        },
        {
            _id: "5",
            image: "https://example.com/images/internship1.jpg",
            category: "internship",
            caption: "Research Internship at ISI Kolkata on microcalcification classification."
        }
    ];




    return (
        <section
            className="
                relative w-full py-24 overflow-hidden 
                h-screen flex justify-center items-center flex-col bg-black
            "
        >
            {/* Overlay */}

            {/* Content */}
            <div className="relative z-10 w-full">

                {/* Header */}
                <div className="px-6 sm:px-12 mb-12 w-full flex flex-col items-start">
                    <p className="text-whitesm:text-6xl text-3xl font-semibold playfair-display">
                        Visual <span className="text-[#ad2e24]">J</span>ourney
                    </p>
                    <p className="mt-4 max-w-xl text-white zalando-sans sm:text-xl">
                        A visual archive of academic milestones, research work,
                        and artistic expression through movement.
                    </p>
                </div>

                {/* Scrolling Track */}
                <div className="relative w-full overflow-hidden">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <p className="text-lg text-black/50 zalando-sans">Loading gallery...</p>
                        </div>
                    ) : galleryItems.length > 0 ? (
                        <div className="marquee-track">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-8">
                                    {galleryItems.map((item) => (
                                        <AchievementGalleryCard
                                            key={`${item._id}-${i}`}
                                            image={urlFor(item.image).url()}
                                            category={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                            caption={item.caption}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center py-20">
                            <span className="material-symbols-outlined text-black/20 text-6xl mb-4">
                                photo_library
                            </span>
                            <p className="text-xl font-semibold text-black/60 satoshi mb-2">
                                No Gallery Items Yet
                            </p>
                            <p className="text-base text-black/40 zalando-sans text-center max-w-md">
                                Visual content will be featured here soon.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default GallerySection