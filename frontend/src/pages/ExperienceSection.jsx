import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import chessQueen from "../assets/chess-queen.png";
import { useState, useEffect } from 'react';
import { sanityClient } from '../sanityClient';
import ExperienceWaypoint from '../components/ExperienceWaypoint';

const ExperienceSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const icons = ["work", "code", "business_center", "rocket_launch"];

    const [experienceData, setExperienceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const query = `*[_type == "experience"] | order(yearStart desc) {
                    _id,
                    title,
                    organization,
                    description,
                    yearStart,
                    yearEnd,
                    type
                }`;

                const data = await sanityClient.fetch(query);
                setExperienceData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching experience:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperience();
    }, []);

    return (
        <div className="min-h-screen bg-black relative py-20 px-4 overflow-hidden" id="experience">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#4cc9f0]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10" />

            <div className="w-full mx-auto px-4 md:px-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className='m-auto w-4/5 flex justify-center items-center sm:gap-3 my-5 sm:m-5'>
                        <div>
                            <img src={chessQueen} alt="" className='h-10 w-20 md:h-20 md:w-25 invert m-0 p-0' />
                        </div>
                        <p className="text-3xl sm:text-5xl md:text-7xl text-gray-500">
                            <span className="text-white">Professional</span> Experience
                        </p>

                    </div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        My journey through internships, projects, and professional roles
                        that shaped my technical and creative expertise.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4cc9f0]" />
                    </div>
                ) : (
                    <div ref={containerRef} className="relative w-full mx-auto">

                        {/* Vertical Progress Line */}
                        <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-gradient-to-b from-[#4cc9f0] to-blue-600 shadow-[0_0_10px_#4cc9f0]"
                            />
                        </div>

                        <div className="space-y-4">
                            {experienceData.map((item, index) => (
                                <ExperienceWaypoint
                                    key={index}
                                    item={item}
                                    index={index}
                                    icon={icons[index % icons.length]}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom decorative element */}
                <div className="flex justify-center mt-20">
                    <div className="flex flex-col items-center opacity-60">
                        <div className="w-px h-20 bg-linear-to-b from-transparent via-gray-500 to-transparent" />
                        <span className="material-symbols-outlined text-gray-500 mt-2 animate-bounce">
                            keyboard_double_arrow_down
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;