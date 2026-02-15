import { useEffect, useState } from "react";
import AchievementPaperCard from "../components/AchievementPaperCard.jsx";
import { motion } from "framer-motion";
import chessKnight from "../assets/knight.png"

const AchievementsSection = () => {

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
                            <img src={chessKnight} alt="" className='h-10 w-20 md:h-20 md:w-25 invert m-0 p-0' />
                        </div>
                        <p className='text-center p-0 pt-10 text-3xl sm:text-5xl md:text-7xl text-gray-500'>
                            Turning <span className='text-[#fff8f0]'>Efforts</span> into <span className='text-[#fff8f0]'>Milestones</span>
                        </p>
                    </div>
                    <p className="text-gray-400 inter text-lg max-w-2xl mx-auto">
                        Key milestones and achievements that reflect my learning, growth, and impact along the way.
                    </p>
                </motion.div>
            </div>


            {/* Horizontal Scroll */}
            <div className="overflow-x-auto scrollbar-hide sm:px-10 py-10">
                <div className="flex gap-6 w-max">
                    {achievements.length > 0 && achievements.map((achievement) => (
                        <AchievementPaperCard
                            key={achievement._id}
                            tag={achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                            date={achievement.year}
                            title={achievement.title}
                            description={achievement.description}
                            image={
                                achievement.image
                                    ? urlFor(achievement.image).url()
                                    : 'https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }
                        />
                    ))}
                </div>
            </div>


            <div className="w-full flex gap-2 justify-center items-center mt-5">
                <p className="text-white">Check out More</p>
                <p className="material-symbols-outlined text-white text-xs">
                    east
                </p>
            </div>

        </section>
    )
}

export default AchievementsSection