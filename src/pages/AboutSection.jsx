import React from 'react'
import chessKing from "../assets/chess-piece.png";
import AboutCard from "../components/AboutCard"
import MentalHeath from "../assets/MentalHealth.jpeg"
import Research from "../assets/research.jpeg"
import Voice from "../assets/voice.jpeg"


const AboutSection = () => {

    return (
        <div className='h-screen bg-black z-50 p-4 xl:p-10 overflow-x-hidden'>
            {/* <div className='border-b-2 border-[#fff8f0] d-flex gap-3 items-center py-4'>


                <p className='inter text-7xl text-[#fff8f0] m-0' style={{ fontWeight: '100' }}>

                    About <span className='font-bold text-[#4cc9f0]'>Me</span>
                </p>
            </div> */}

            <div className='m-auto w-4/5 flex justify-center items-center sm:gap-3 my-5 sm:m-5'>
                <div>
                    <img src={chessKing} alt="" className='h-10 w-20 md:h-20 md:w-20 invert m-0 p-0' />
                </div>
                <p className='text-center p-0 pt-10 text-3xl sm:text-5xl md:text-7xl text-gray-500'>
                    Bridging <span className='text-[#fff8f0]'>Evidence</span> and <span className='text-[#fff8f0]'>Empathy.</span>
                </p>
            </div>



            <div className='flex overflow-x-auto snap-x snap-mandatory justify-start xl:justify-center items-stretch h-auto xl:h-[70%] gap-5 w-full pb-4 xl:pb-0 scrollbar-hide'>
                <div className='min-w-[85vw] xl:min-w-0 snap-center w-full xl:w-1/3 text-white text-2xl zalando-sans'>
                    <AboutCard
                        bgColor="#2563eb"
                        metaBg="#111826"
                        year="2025"
                        textColor="white"
                        category="Branding & Identity"
                        title="Mental Health"
                        image={MentalHeath}
                        description="I provide psychosocial support in physical and digital settings—at Shohojatri, assisting rehabilitation programs for women inmates and their children, and at Amaha, delivering confidential, client-centered virtual care as a First Responder."
                    />


                </div>

                <div className='min-w-[85vw] xl:min-w-0 snap-center w-full xl:w-1/3 text-white text-2xl zalando-sans'>
                    <AboutCard
                        bgColor="#FEEE8C"
                        metaBg="#111826"
                        year="2025"
                        textColor="black"
                        category="Branding & Identity"
                        title="Vocal Artistry"
                        image={Voice}
                        description="Beyond my clinical career, I am an experienced vocal artist and narrator, collaborating with notable productions like Sunday Suspense and Goppo Mir er Thek. I hold a distinction in recitation from Rabindra Bharati University Alumni Association."
                    />



                </div>

                <div className='min-w-[85vw] xl:min-w-0 snap-center w-full xl:w-1/3 text-white text-2xl zalando-sans'>

                    <AboutCard
                        bgColor="white"
                        metaBg="#111826"
                        year="2025"
                        textColor="#2563eb"
                        category="Branding & Identity"
                        title="Research & Analysis"
                        image={Research}
                        description="I research human behavior through structured studies and data analysis, focusing on family dynamics, personality, and social media’s impact on body image. My work, conducted using IBM SPSS, has been recognized in peer-reviewed publications and national conferences like ICIPMPI 2026."
                    />




                </div>
            </div>

            <div className="flex flex-col items-center opacity-60 mt-10">
                <span className="text-xs tracking-[0.3em] uppercase text-gray-100">
                    Scroll
                </span>

                <div className="mt-3 w-[1px] h-10 bg-gradient-to-b from-gray-100 to-transparent animate-pulse" />
            </div>

            {/* <ScrollStack className='-mt-30 sm:-mt-50'>
                <ScrollStackItem>
                    <div className='h-full w-full bg-blue-700 rounded-xl'>

                    </div>
                </ScrollStackItem>
                <ScrollStackItem>
                    <div className='h-full w-full bg-[#FEFE20] rounded-xl'>

                    </div>
                </ScrollStackItem>
                <ScrollStackItem>
                    <div className='h-full w-full bg-[#FF3F41] rounded-xl'>

                    </div>
                </ScrollStackItem>
                {/* <ScrollStackItem>
                    <div className='h-full w-full bg-[#FF3F41] rounded-xl'>

                    </div>
                </ScrollStackItem> */}


        </div>




    )
}

export default AboutSection