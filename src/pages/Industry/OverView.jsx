// import React, { useState } from 'react';

// const OverView = () => {
//     // State can be used for hover effects on the new cards if desired
//     const [isLeftHovered, setIsLeftHovered] = useState(false);
//     const [isRightHovered, setIsRightHovered] = useState(false);

//     return (
//         <div>
//             {/* The main container class is kept, but the ID is changed for clarity */}
//             <div id="overview" className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 {/* Changed title from "Case studies" to "Overview" */}
//                                 <h2 className="title split-text-right split-text-in-right">Overview</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* New content structure based on the image */}
//                 <div className="container">
//                     <div className="row">
//                         {/* Left Column Content */}
//                         <div className="col-lg-6 mb-3">
//                             <div 
//                                 className="overview-content-box fade-up-anim p-4 p-md-5"
//                                 onMouseEnter={() => setIsLeftHovered(true)}
//                                 onMouseLeave={() => setIsLeftHovered(false)}
//                             >
//                                 <h3 className="mb-3">Driving Transformation in Retail & Consumer Goods</h3>
//                                 <p className='text-red'>
//                                     <i>Today's customers demand personalized, seamless experiences across all channels. 
//                                     This expectation is the primary driver of change in the retail and consumer goods industry.</i>
//                                 </p>
//                                 <p>
//                                     Our focus is on creating human-centric experiences that leverage technology to 
//                                     not only meet these demands but also to unlock new avenues for sustainable growth.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Right Column Content */}
//                         <div className="col-lg-6  mb-3">
//                             <div 
//                                 className="overview-content-box fade-up-anim p-4 p-md-5"
//                                 onMouseEnter={() => setIsRightHovered(true)}
//                                 onMouseLeave={() => setIsRightHovered(false)}
//                             >
//                                 <h3 className="mb-3">HC IT: Your Partner in Innovation</h3>
//                                 <p>
//                                     With three decades of experience partnering with top global brands, HC IT brings 
//                                     unparalleled expertise to the table.
//                                 </p>
//                                 <ul className="custom-list">
//                                     <li><strong>Omnichannel Excellence:</strong> We specialize in creating integrated, end-to-end customer experiences across all touchpoints.</li>
//                                     <li><strong>Integrated Supply Chain:</strong> Our solutions optimize your supply chain for efficiency, resilience, and speed-to-market.</li>
//                                     <li><strong>AI & Data Analytics:</strong> We harness the power of AI and data to provide actionable insights, empowering you to make smarter, data-driven decisions.</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OverView;

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OverView = () => {

    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    

    return (
        <div>
            <div id="overview" className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
                
                {/* Heading */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div 
                                className="site-heading text-center"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <h2 className="title split-text-right split-text-in-right">Overview</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container">
                    <div className="row">

                        {/* LEFT BOX */}
                        <div 
                            className="col-lg-6 mb-3"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-offset="150"
                        >
                            <div 
                                className={`overview-content-box p-4 p-md-5 ${
                                    isLeftHovered ? "shadow-lg scale-[1.02]" : ""
                                }`}
                                style={{
                                    transition: "0.3s ease-in-out",
                                    transform: isLeftHovered ? "translateY(-6px)" : "translateY(0)"
                                }}
                                onMouseEnter={() => setIsLeftHovered(true)}
                                onMouseLeave={() => setIsLeftHovered(false)}
                            >
                                <h3 className="mb-3">Driving Transformation in Retail & Consumer Goods</h3>
                                <p className='text-red'>
                                    <i>Today's customers demand personalized, seamless experiences across all channels.</i>
                                </p>
                                <p>
                                    We focus on creating human-centric digital experiences that unlock new 
                                    opportunities for sustainable growth.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT BOX */}
                        <div 
                            className="col-lg-6 mb-3"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            data-aos-offset="150"
                        >
                            <div 
                                className={`overview-content-box p-4 p-md-5 ${
                                    isRightHovered ? "shadow-lg scale-[1.02]" : ""
                                }`}
                                style={{
                                    transition: "0.3s ease-in-out",
                                    transform: isRightHovered ? "translateY(-6px)" : "translateY(0)"
                                }}
                                onMouseEnter={() => setIsRightHovered(true)}
                                onMouseLeave={() => setIsRightHovered(false)}
                            >
                                <h3 className="mb-3">HC IT: Your Partner in Innovation</h3>
                                <p>
                                    With 30+ years of global experience, HC IT brings expertise across retail, CPG, and digital transformation.
                                </p>

                                <ul className="custom-list mt-3">
                                    <li data-aos="fade-up" data-aos-delay="400">
                                        <strong>Omnichannel Excellence:</strong> Integrated, seamless customer journeys.
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="500">
                                        <strong>Integrated Supply Chain:</strong> Improved speed-to-market & resilience.
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="600">
                                        <strong>AI & Data Analytics:</strong> Actionable insights for smarter decisions.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default OverView;
