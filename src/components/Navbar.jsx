import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { sanityClient } from "../sanityClient";

function NavScrollExample() {
    const [activeKey, setActiveKey] = useState("home");
    const [email, setEmail] = useState("yourmail@gmail.com"); // fallback

    // useEffect(() => {
    //     sanityClient
    //         .fetch(`*[_type == "contactInfo"][0]{ email }`)
    //         .then(data => {
    //             if (data?.email) setEmail(data.email);
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    return (
        <>
            <style>{`
                .nav-link-custom {
                    position: relative;
                    transition: all 0.3s ease;
                    padding-bottom: 0.5rem !important;
                    color: #fff8f0;
                }
                
                @media (min-width: 1200px) {
                    .nav-link-custom:hover {
                        color: #4cc9f0 !important;
                        transform: translateY(-2px);
                    }
                    
                    .nav-link-custom::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%) scaleX(0);
                        width: 80%;
                        height: 2px;
                        background-color: #4cc9f0;
                        transition: transform 0.3s ease;
                    }
                    
                    .nav-link-custom:hover::after,
                    .nav-link-custom.active::after {
                        transform: translateX(-50%) scaleX(1);
                    }
                }

                @media (max-width: 1199px) {
                    .nav-link-custom {
                        padding: 0.75rem 1rem !important;
                        margin: 0.25rem 0 !important;
                        border-radius: 8px;
                    }
                    
                    .nav-link-custom.active {
                        background-color: rgba(76, 201, 240, 0.1);
                    }
                }

                .nav-link-custom.active {
                    color: #4cc9f0 !important;
                    font-weight: 600;
                }

                .connect-btn {
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                @media (min-width: 1200px) {
                    .connect-btn:hover {
                        transform: scale(1.05);
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    }
                }

                .connect-btn:active {
                    transform: scale(0.98);
                }

                .navbar-sticky {
                    position: sticky !important;
                    top: 0;
                    z-index: 1000;
                }

                @media (max-width: 1199px) {
                    .navbar-collapse {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: rgba(0, 0, 0, 0.8);
                        backdrop-filter: blur(12px);
                        padding: 1rem;
                        border-radius: 0 0 16px 16px;
                        border : 1
                        border-color : white
                    }
                        .navbar-collapse.show {
                            border: 1px solid rgba(255, 255, 255, 0.15);
                            border-top: none; /* prevents double border with navbar */
                            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                        }
                }
            `}</style>


            <Navbar expand="xl"
                variant="dark"
                className="navbar-sticky p-3 border-b-2 border-black"
                style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff8f0",
                }}>
                <Container fluid>
                    <div className="pr-12 playfair-display text-3xl text-[#fff8f0] ">SOURIS.</div>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="me-auto my-2 my-lg-0"
                            activeKey={activeKey}
                            onSelect={(selectedKey) => setActiveKey(selectedKey)}
                            navbarScroll
                        >
                            {[
                                ["home", "Home"],
                                ["about", "About"],
                                ["academics", "Academics"],
                                ["achievements", "Achievements"],
                                ["experience", "Experience"],
                                ["publications", "Publications"],
                                ["gallery", "Gallery"]
                            ].map(([key, label]) => (
                                <Nav.Link
                                    key={key}
                                    eventKey={key}
                                    href={`#${key}`}
                                    className={`zalando-sans mx-1 nav-link-custom text-[#fff8f0]${activeKey === key ? 'active' : ''}`}
                                >
                                    {label}
                                </Nav.Link>
                            ))}
                        </Nav>

                        {/* 🔗 SAME email from Sanity */}
                        <a
                            href={`mailto:${email}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="zalando-sans d-flex gap-2 justify-center items-center bg-blue-700 rounded-full p-2.5 px-3 text-white connect-btn">
                                <p className="m-0 p-0">Lets Connect</p>
                                <div className="material-symbols-outlined">
                                    north_east
                                </div>
                            </div>
                        </a>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavScrollExample;
