import React from "react";
import Beams from "../components/Beams";
import heroImg from "../assets/hero.jpeg";
import { motion } from "framer-motion";

const HeroSectionMobile = () => {
    return (
        <div className="relative top-0 w-full min-h-screen bg-black overflow-hidden -mt-20 pt-20">

            {/* 🔵 Background Beams */}
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={2}
                    beamHeight={20}
                    beamNumber={12}
                    lightColor="#0011ff"
                    speed={1.5}
                    noiseIntensity={1.5}
                    scale={0.2}
                    rotation={30}
                />
            </div>

            {/* 🔵 Content Wrapper */}
            <div className="relative z-10 flex flex-col min-h-screen">

                {/* 🔹 Top Image Section (Full Width) */}
                <div className="w-full h-[50vh] overflow-hidden">
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 🔹 Bottom Text Section */}
                <div className="flex flex-col justify-center px-6 py-10 text-center items-center">

                    <p className="text-xs uppercase tracking-[0.3em] text-[#fff8f0] ">
                        Psychology Student & Voice Artist
                    </p>

                    <p className="inter text-4xl leading-snug text-[#fff8f0]"
                        style={{ fontWeight: "100" }}>
                        Exploring the{" "}
                        <span className="!font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Mind
                        </span>
                        .
                        <br />
                        Expressing Through{" "}
                        <span className="!font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                            Voice
                        </span>
                        .
                    </p>

                    {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hide-short-screen">
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                        </div>
                    </div> */}

                    <div className="w-full flex justify-center items-center hide-short-screen">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                        >
                            <div className="w-4 h-6 border-2 border-white/30 rounded-full flex justify-center p-1">
                                <div className="w-0.5 h-1 bg-white rounded-full animate-bounce" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* 🔹 Scroll Indicator */}


        </div>
    );
};

export default HeroSectionMobile;
