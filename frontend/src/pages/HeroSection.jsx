import React from 'react'
import Beams from '../components/Beams'
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpeg"
import Shuffle from '../components/ShuffleText';
import { sanityClient, urlFor } from '../sanityClient.js';
import { useState, useEffect } from 'react';

const HeroSection = () => {

    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        // Fetch the hero image data from Sanity
        const fetchHeroImage = async () => {
            try {
                const data = await sanityClient.fetch(`*[_type == "heroImage"][0] {
                    image,
                    altText
                }`);
                setHeroData(data);
            } catch (error) {
                console.error("Error fetching hero image:", error);
            }
        };

        fetchHeroImage();
    }, []);

    return (
        <div className='h-full'>
            <div className='relative top-0 w-full min-h-screen bg-black overflow-hidden -mt-20 pt-20'>

                <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                    <Beams
                        beamWidth={3}
                        beamHeight={30}
                        beamNumber={20}
                        lightColor="#0011ff"
                        speed={2}
                        noiseIntensity={1.75}
                        scale={0.2}
                        rotation={30}
                    />
                </div>

                <div className="absolute top-0 left-0 z-50 flex items-center justify-center h-full w-full">
                    <div className='w-3/5 p-5'>
                        <Shuffle
                            text="Souris Lahiri"
                            shuffleDirection="right"
                            duration={0.35}
                            animationMode="evenodd"
                            shuffleTimes={1}
                            ease="power3.out"
                            stagger={0.03}
                            threshold={0.1}
                            triggerOnce={true}
                            triggerOnHover
                            respectReducedMotion={true}
                            loop={false}
                            loopDelay={0}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-sm md:text-lg uppercase tracking-[0.3em] !text-[#fff8f0] mb-4"
                        >
                            Psychology Student & Voice Artist
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inter text-4xl md:text-6xl mb-6 leading-tight !text-[#fff8f0]"
                            style={{ fontWeight: "100" }}
                        >
                            Exploring the <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Mind</span>.
                            <br />
                            Expressing Through <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Voice</span>.
                        </motion.p>



                    </div>
                    <div className=' w-2/5 p-5'>
                        <img src={heroData?.image ? urlFor(heroData.image).url() : heroImg}
                            alt={heroData?.altText || "Souris Lahiri"}
                        />
                    </div>



                </div>
                <div className='w-full flex justify-center'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-10"
                    >
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Scroll Indicator */}

        </div>
    )
}

export default HeroSection;