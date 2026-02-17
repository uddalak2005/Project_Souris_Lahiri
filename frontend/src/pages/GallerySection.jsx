import { useEffect, useState } from "react"
import AchievementGalleryCard from "../components/AchievementGalleryCard"
import GalleryCarousel from "../components/GalleryContent"
import { motion } from "framer-motion"
import chessBG from "../assets/chessBG.jpg";
import { sanityClient, urlFor } from '../sanityClient.js'


const GallerySection = () => {

    const [galleryItems, setGalleryItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const query = `*[_type == "gallery"] | order(year desc) {
                    _id,
                    image,
                    category,
                    caption,
                    year
                }`
                const data = await sanityClient.fetch(query)
                setGalleryItems(data)
            } catch (error) {
                console.error('Error fetching gallery:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchGallery()
    }, [])






    return (
        <section
            className="
                relative w-full py-24 overflow-hidden 
                h-screen flex justify-center items-center flex-col bg-black
            "
        >

            <div
                className="absolute inset-0 bg-cover bg-center opacity-7.5 pointer-events-none"
                style={{
                    backgroundImage: `url(${chessBG})`,
                }}
            />


            {/* Content */}
            <div className="relative z-10 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className='m-auto w-4/5 flex justify-center items-center sm:gap-3 mt-0 my-5 sm:m-5'>
                        <p className="text-3xl sm:text-5xl md:text-7xl text-gray-500">
                            <span className="text-white">Visual</span> Journey
                        </p>

                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-gray-400 mt-6 max-w-2xl mx-5 text-lg mb-0">
                            A glimpse into the moments that define my journey — from academic milestones and research presentations to hackathon wins and professional internships.
                        </p>
                    </div>
                </motion.div>

                {/* Scrolling Track */}
                <div className="w-full px-5">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4cc9f0]" />
                        </div>
                    ) : galleryItems.length > 0 ? (
                        <GalleryCarousel images={galleryItems} />
                    ) : (
                        <div className="flex flex-col justify-center items-center py-20">
                            <span className="material-symbols-outlined text-white/20 text-6xl mb-4">
                                photo_library
                            </span>
                            <p className="text-xl font-semibold text-white/60 satoshi mb-2">
                                No Gallery Items Yet
                            </p>
                            <p className="text-base text-white/40 zalando-sans text-center max-w-md">
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