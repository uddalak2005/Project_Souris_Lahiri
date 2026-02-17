import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import chessRook from "../assets/rook.png";
import { useState, useEffect } from 'react';
import { sanityClient } from '../sanityClient';


const Waypoint = ({ item, index, icon }) => {
    const isEven = index % 2 === 0;


    return (
        <div className={`grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-10 w-full mb-8 md:mb-24 items-center sm:!mb-0 mb-5`}>

            {/* Waypoint Marker - Logic: 
                Mobile: First column. 
                Desktop: Center column (2).
            */}
            <div className={`
                z-20 flex items-center justify-center w-8 h-8 md:w-16 md:h-16 
                bg-black border-2 border-blue-600 rounded-full shadow-[0_0_15px_rgba(76,201,240,0.5)] shrink-0
                col-start-1 md:col-start-2 row-start-1 justify-self-center
            `}>
                <span className="material-symbols-outlined text-blue-600 text-xs md:text-xl">
                    {icon}
                </span>
            </div>

            {/* Content Card - Logic:
                Mobile: Second column (Right of marker).
                Desktop Even: First column (Left of marker).
                Desktop Odd: Third column (Right of marker).
            */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`
                    bg-[#1c1c1c] p-6 rounded-xl shadow-lg hover:border-[#4cc9f0] transition-colors duration-300 relative
                    
                    /* Mobile placement */
                    col-start-2 row-start-1
                    
                    /* Desktop placement & sizing */
                    md:w-full
                    ${isEven
                        ? 'md:col-start-1 md:text-right md:justify-self-end'
                        : 'md:col-start-3 md:text-left md:justify-self-start'}
                `}
            >
                <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-[#4cc9f0] font-bold ibm-plex-mono text-sm md:text-base">
                        {item.yearStart} - {item.yearEnd}
                    </span>
                    <div className="h-px bg-gray-700 grow" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-1 zalando-sans">
                    {item.degree}
                </h3>
                <p className="text-gray-400 text-sm md:text-lg font-medium mb-3 inter">
                    {item.institution}
                </p>
            </motion.div>
        </div>
    );
};

const AcademicsSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const icons = ["school", "psychology", "menu_book", "draw"]


    const [academicData, setAcademicData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAcademics = async () => {
            try {
                const query = `*[_type == "academics"] | order(yearStart desc) {
                    _id,
                    degree,
                    institution,
                    yearStart,
                    yearEnd
                }`
                const data = await sanityClient.fetch(query)
                setAcademicData(data)
                console.log(data)
            } catch (error) {
                console.error('Error fetching academics:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchAcademics()
    }, [])

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="min-h-screen bg-black relative py-20 px-4 sm:px-0 overflow-hidden" id="academics">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4cc9f0]/10 rounded-full blur-3xl -z-10" />

            <div className="w-full mx-auto px-4 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className='m-auto w-4/5 flex justify-center items-center sm:gap-3 my-5 sm:m-5'>
                        <div>
                            <img src={chessRook} alt="" className='h-10 w-20 md:h-20 md:w-25 invert m-0 p-0' />
                        </div>
                        <p className='text-center p-0 pt-10 text-3xl sm:text-5xl md:text-7xl text-gray-500'>
                            <span className='text-[#fff8f0]'>Academic</span> Journey and  <span className='text-[#fff8f0]'>Milestone</span>
                        </p>
                    </div>
                    <p className="text-gray-400 inter text-lg max-w-2xl mx-auto">
                        My educational journey and key milestones that have shaped my understanding of psychology and human behavior.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4cc9f0]" />
                    </div>
                ) : (
                    <div ref={containerRef} className="relative w-full mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-linear-to-b from-[#4cc9f0] to-blue-600 shadow-[0_0_10px_#4cc9f0]"
                            />
                        </div>

                        <div className="space-y-4">
                            {academicData.map((item, index) => (
                                <Waypoint key={index} item={item} index={index} icon={icons[index % icons.length]} />
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

export default AcademicsSection;