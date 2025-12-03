import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const DCOverview = () => {
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out",
        });
    }, []);

    return (
        <div
            id="overview"
            className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5"
        >
            <div className="container">

                {/* Heading */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div
                            className="site-heading text-center"
                            data-aos="zoom-in-up"
                            data-aos-delay="100"
                        >
                            <h2 className="title split-text-right split-text-in-right">Overview</h2>
                        </div>
                    </div>
                </div>

                <div className="row">

                    {/* LEFT BOX */}
                    <div className="col-lg-6 mb-3">
                        <div
                            className="overview-content-box fade-up-anim p-4 p-md-5"
                            onMouseEnter={() => setIsLeftHovered(true)}
                            onMouseLeave={() => setIsLeftHovered(false)}
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <h3 className="mb-3">AI & Microsoft Business Solutions</h3>

                            <p className='text-red'>
                                <i>
                                    Today's customers demand personalized, seamless experiences across all channels.
                                </i>
                            </p>

                            <p>
                                Visionet delivers tailored cloud solutions across all six Microsoft Cloud Partner Program
                                Solution Designations to drive innovation and ensure success.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT BOX */}
                    <div className="col-lg-6 mb-3">
                        <div
                            className="overview-content-box fade-up-anim p-4 p-md-5"
                            onMouseEnter={() => setIsRightHovered(true)}
                            onMouseLeave={() => setIsRightHovered(false)}
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            <h3 className="mb-3">Lead Generation & Management</h3>

                            <p>
                                With three decades of experience, HC IT brings unparalleled expertise to global brands.
                            </p>

                            <ul className="custom-list">
                                <li><b>Attract customers</b> – Target ideal audience with AI-powered segmentation</li>
                                <li><b>Create campaign assets</b> – Build professional marketing materials with ease</li>
                                <li><b>Personalize experiences</b> – Deliver tailored customer interactions at scale</li>
                            </ul>
                        </div>
                    </div>

                    {/* FULL WIDTH BOX */}
                    <div className="col-lg-12 mb-3">
                        <div
                            className="overview-content-box fade-up-anim p-4 p-md-5"
                            onMouseEnter={() => setIsLeftHovered(true)}
                            onMouseLeave={() => setIsLeftHovered(false)}
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            <h3 className="mb-3">Microsoft Partner of the Year Awards 2022</h3>

                            <p>
                                Visionet was acknowledged as the winner of the 2022 Microsoft Partner of the Year Award in
                                Dynamics 365 Commerce. Its commerce solution Catapult reimagines digital commerce services
                                by enabling rapid commerce adoption for both the B2B and B2C domains. With time, our influence
                                has expanded globally as we’ve been able to consistently deliver innovative technologies to
                                improve a brand’s commerce infrastructure.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DCOverview;
