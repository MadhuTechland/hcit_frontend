// import React from 'react'
// import { Link } from 'react-router-dom'

// const CpgAndRetail = () => {
//     return (
//         <div>
//             <div className="breadcrumb-area text-center bg-cover text-light bg-light-theme" >
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">


//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className='container'>
//                     <ul className="breadcrumb mb-0 py-2 text-xs">
//                         <li><Link to="/"><i className="fas fa-home"></i> Home&nbsp; </Link></li>
//                         <li className='disable'> / Industries /</li>
//                         <li>&nbsp; Retail & CPG</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">
//                 <div className="newsletter-thumb">
//                     <img src="/assets/img/thumb/2.jpg" alt="Image Not Found" />
//                 </div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-6 offset-lg-6">
//                             <div className="newsletter-style-two">
//                                 <h4 className="sub-title">Newsletter</h4>
//                                 <h3 className="itle split-text-right split-text-in-right">Transform shopping experiences with our cutting-edge CPG and retail consulting services</h3>
//                                 <div className="fade-up-anim">
//                                   <p>Explore Visionet’s retail and consumer goods solutions and services.

// </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CpgAndRetail


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CpgAndRetail = () => {

  
    return (
        <div>

            {/* Breadcrumb Banner */}
            <div 
                className="breadcrumb-area text-center bg-cover text-light bg-light-theme"
                data-aos="fade-down"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2"></div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb Links */}
            <div data-aos="fade-up" data-aos-delay="200">
                <div className='container'>
                    <ul className="breadcrumb mb-0 py-2 text-xs">
                        <li><Link to="/"><i className="fas fa-home"></i> Home&nbsp; </Link></li>
                        <li className='disable'> / Industries /</li>
                        <li>&nbsp; Retail & CPG</li>
                    </ul>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">
                
                {/* Left Image */}
                <div 
                    className="newsletter-thumb"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                >
                    <img src="/assets/img/thumb/2.jpg" alt="Image Not Found" />
                </div>

                {/* Right Content */}
                <div className="container">
                    <div className="row">
                        <div 
                            className="col-lg-6 offset-lg-6"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="newsletter-style-two">
                                <h4 className="sub-title" data-aos="zoom-in">Newsletter</h4>

                                <h3 
                                    className=" split-text-right split-text-in-right"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    Transform shopping experiences with our cutting-edge CPG and retail consulting services
                                </h3>

                                <p 
                                    className="fade-up-anim"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    Explore Visionet’s retail and consumer goods solutions and services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CpgAndRetail;
