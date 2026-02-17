import { useEffect, useState } from "react";
import PublicationCard from "../components/PublicationCard";
import { motion } from "framer-motion";
import chessBishop from "../assets/bishop.png"
import { sanityClient, urlFor } from '../sanityClient.js';

const PublicationSection = () => {

    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const query = `*[_type == "publications"] | order(year desc) {
                    _id,
                    title,
                    journal,
                    year,
                    paperLink,
                    coverImage
                }`
                const data = await sanityClient.fetch(query)
                setPublications(data)
            } catch (error) {
                console.error('Error fetching publications:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPublications()
    }, [])



    return (
        <section className="w-full py-16 bg-black sm:p-5 p-4 min-h-screen">

            <div className="w-full mx-auto px-4 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className='m-auto w-4/5 flex justify-center items-center sm:gap-3 my-5 sm:m-5'>
                        <div>
                            <img src={chessBishop} alt="" className='h-10 w-18 md:h-20 md:w-20 invert m-0 p-0' />
                        </div>
                        <p className='text-center p-0 pt-10 text-3xl sm:text-5xl md:text-7xl text-gray-500'>
                            From <span className='text-[#fff8f0]'>Questions</span> to <span className='text-[#fff8f0]'>Contributions</span>
                        </p>
                    </div>
                    <p className="text-gray-400 inter text-lg max-w-2xl mx-auto">
                        A collection of publications and research endeavors that highlight my pursuit of knowledge and contribution to the field.
                    </p>
                </motion.div>
            </div>


            {/* Horizontal Scroll */}

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4cc9f0]" />
                </div>
            ) : publications.length > 0 ? (
                <div id="publication-scroll" className="overflow-x-auto scrollbar-hide sm:px-10 py-10">
                    <div className="flex gap-6 w-max">
                        <div id="publication-scroll" className="overflow-x-auto scrollbar-hide mx-3">
                            <div className="flex gap-6 w-max sm:py-6">
                                {publications.map((publication) => (
                                    <PublicationCard
                                        key={publication._id}
                                        image={publication.coverImage ? urlFor(publication.coverImage).url() : 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc'}
                                        title={publication.title}
                                        subtitle={`${publication.journal || 'Research Publication'} · ${publication.year}`}
                                        link={publication.paperLink}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full'>
                    <div className="w-full flex flex-col items-center justify-center py-20 px-10">
                        <span className="material-symbols-outlined text-white/20 text-6xl mb-4">
                            description
                        </span>
                        <p className="text-xl font-semibold text-white/60 satoshi mb-2">
                            No Publications Yet
                        </p>
                        <p className="text-base text-white/40 zalando-sans text-center max-w-md">
                            Research work and publications will be featured here as they become available.
                        </p>
                    </div>
                </div>
            )}




            <div className="w-full flex gap-2 justify-center items-center">
                <button
                    onClick={() => {
                        document.getElementById("publication-scroll")
                            ?.scrollBy({ left: 400, behavior: "smooth" })
                    }}
                    className="shrink-0 w-14 h-14 rounded-full bg-blue-600 
                   flex items-center justify-center
                   hover:scale-105 transition-transform m-5"
                >
                    <span className="material-symbols-outlined text-white text-2xl">
                        north_east
                    </span>
                </button>
            </div>

        </section>
    )
}

export default PublicationSection