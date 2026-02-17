import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import BigFooter from "./BigFooter"
import BigFooterTablet from "./BigFooterTablet"
import { sanityClient } from "../sanityClient"

const Footer = () => {
    const [contact, setContact] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "contactInfo"][0]{
                email,
                socialLinks[]{
                    platform,
                    url
                }
            }`)
            .then(data => setContact(data))
            .catch(err => console.error(err))
    }, [])

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width <= 1024);
        };

        checkDeviceType();
        window.addEventListener('resize', checkDeviceType);
        return () => window.removeEventListener('resize', checkDeviceType);
    }, []);

    return (
        <footer className="w-full bg-blue-700 text-white px-6 sm:px-12 pt-20 pb-10">

            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

                {/* Left: Heading */}
                <div>
                    <p className="text-4xl sm:text-6xl md:text-8xl tracking-tight leading-tight text-white font-light">
                        Let’s Connect<br />There
                    </p>

                    <p className="mt-6 max-w-md text-white/70 text-sm md:text-base sm:text-lg">
                        Open to collaborations in research, academics, creative projects,
                        and meaningful work that creates impact.
                    </p>
                </div>

                {/* Right: CTA */}
                <a
                    href={`mailto:${contact?.email || "sourislahiri@gmail.com"}`}
                    className="
                        group flex items-center gap-2
                        bg-white/10 hover:bg-white/20
                        rounded-full px-3 py-3
                        transition-all duration-300
                    "
                    style={{ textDecoration: 'none' }}
                >
                    <div
                        className="
                            w-10 h-10 sm:w-15 sm:h-15 rounded-full
                            bg-black text-black
                            flex items-center justify-center
                            group-hover:translate-x-1 transition p-2
                        "
                    >
                        <ArrowRight size={40} color="#ffb703" />
                    </div>

                    <span className="text-white font-medium lg:text-xl p-2 text-sm">
                        Mail Me
                    </span>
                </a>
            </div>

            {/* */}

            {isTablet ? <BigFooterTablet /> : <BigFooter />}

            {/* Divider */}
            <div className="my-14 h-px w-full bg-white/10" />
            <div className="flex flex-col sm:flex-row justify-between gap-10 text-sm text-white/60">

                {/* Identity */}
                <div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-4">
                        {contact?.socialLinks?.map((item) => (
                            <a
                                key={item.platform}
                                href={item.url}
                                className="text-white hover:text-[#cd4631] transition"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.platform}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-12 text-center text-xs text-white/40">
                © {new Date().getFullYear()} Souris Lahiri. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer