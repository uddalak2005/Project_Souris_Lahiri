import { motion } from 'framer-motion';

const ExperienceWaypoint = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-10 w-full mb-8 md:mb-24 items-center my-5 sm:!m-0">

            <div className={`
                z-20 flex items-center justify-center w-8 h-8 md:w-16 md:h-16 
                bg-black border-2 border-blue-600 rounded-full shadow-[0_0_15px_rgba(76,201,240,0.5)] shrink-0
                col-start-1 md:col-start-2 row-start-1 justify-self-center
            `}>
                <span className="material-symbols-outlined text-blue-600 text-xs md:text-xl">

                </span>
            </div>



            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`
                    bg-[#121212]/80 backdrop-blur-md
                    p-6 md:p-8 rounded-2xl
                    hover:shadow-[0_0_25px_rgba(76,201,240,0.3)]
                    transition-all duration-300
                    
                    col-start-2 row-start-1
                    md:w-full
                    
                    ${isEven
                        ? 'md:col-start-1 md:text-right md:justify-self-end'
                        : 'md:col-start-3 md:text-left md:justify-self-start'}
                `}
            >
                <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <span className="px-3 py-1 text-xs md:text-sm rounded-full text-white bg-blue-600 ibm-plex-mono font-bold">
                        {item.yearStart} - {item.yearEnd}
                    </span>
                    <div className="h-px bg-gray-700 grow" />
                </div>

                <div className={`flex justify-between items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-white mb-1">
                            {item.title}
                        </p>

                        <p className="text-[#4cc9f0] font-medium mb-2">
                            {item.organization}
                        </p>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                    <div>
                        <p className='uppercase text-white/50 ibm-plex-mono'>{item.type}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ExperienceWaypoint;