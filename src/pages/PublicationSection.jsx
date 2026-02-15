import { useEffect, useState } from "react";
import PublicationCard from "../components/PublicationCard";
import { motion } from "framer-motion";
import chessBishop from "../assets/bishop.png"

const PublicationSection = () => {

    const achievements = [
        {
            _id: "1",
            category: "research",
            year: "2024",
            title: "Research Internship at ISI Kolkata",
            description: "Worked on microcalcification detection and classification using deep learning algorithms on mammograms.",
            image: null
        },
        {
            _id: "2",
            category: "hackathon",
            year: "2024",
            title: "Smart India Hackathon 2024",
            description: "Developed a hospital management system with AI prediction of bed occupancy status.",
            image: null
        },
        {
            _id: "2",
            category: "hackathon",
            year: "2024",
            title: "Smart India Hackathon 2024",
            description: "Developed a hospital management system with AI prediction of bed occupancy status.",
            image: null
        },
        {
            _id: "2",
            category: "hackathon",
            year: "2024",
            title: "Smart India Hackathon 2024",
            description: "Developed a hospital management system with AI prediction of bed occupancy status.",
            image: null
        },
        {
            _id: "2",
            category: "hackathon",
            year: "2024",
            title: "Smart India Hackathon 2024",
            description: "Developed a hospital management system with AI prediction of bed occupancy status.",
            image: null
        }
    ];



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
            <div id="publication-scroll" className="overflow-x-auto scrollbar-hide sm:px-10 py-10">
                <div className="flex gap-6 w-max">
                    {achievements.length > 0 && achievements.map((achievement) => (
                        <PublicationCard
                            key={achievement._id}
                            title={achievement.title}
                            subtitle={achievement.description}
                            image={
                                achievement.image
                                    ? urlFor(achievement.image).url()
                                    : 'https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }
                        />
                    ))}
                </div>
            </div>


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