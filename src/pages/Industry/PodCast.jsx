// import React, { useState } from 'react';

// const PodCast = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const podcastItems = [
//         {
//             id: 1,
//             image: "https://www.visionet.com/sites/default/files/2025-06/beyond-the-checkout-podcast-vsi.webp?fid=15641",
//             title: "Scaling smart: Using AI to drive value in the Lifestyle & Fitness industry",
//             guest: "Joshua Ainsley",
//             guestTitle: "Head of Data Science, New Balance",
//               host: "Ali Zubairy",
//             actionText: "Watch now"
//         },
//         {
//             id: 2,
//             image: "https://www.visionet.com/sites/default/files/2025-07/scaling-smart-fitness-josh-ai-web.webp?fid=16181",
//             title: "Beyond the Checkout: Transforming Fashion Retail through Digital Innovation",
//             guest: "Katerina Suh",
//             guestTitle: "VP of Information Systems, Delta Galil",
//             host: "Ali Zubairy",
//             hostTitle: "Head of UK/EU, HC IT",
//             actionText: "Watch now"
//         },
//          {
//             id: 1,
//             image: "https://www.visionet.com/sites/default/files/2025-06/beyond-the-checkout-podcast-vsi.webp?fid=15641",
//             title: "Scaling smart: Using AI to drive value in the Lifestyle & Fitness industry",
//             guest: "Joshua Ainsley",
//             guestTitle: "Head of Data Science, New Balance",
//               host: "Ali Zubairy",
//             actionText: "Watch now"
//         },
//     ];

//     return (
//         <div>
//             <div className="pricing-style-two-area py-5 bg-dark text-light blurry-shape">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 <h4 className="sub-title">Podcast</h4>
//                                 <h2 className="title split-text-right split-text-in-right">Retail unlocked</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="pricing-style-four-items">
//                         <div className="blog-area blog-grid">
//                             <div className="container">
//                                 <div className="blog-item-box">
//                                     <div className="row">
//                                         {podcastItems.map((podcast, index) => (
//                                             <div key={podcast.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
//                                                 <div
//                                                     className="blog-style-two fade-up-anim news-card podcast-card bg-dark"
//                                                     onMouseEnter={() => setHoveredIndex(index)}
//                                                     onMouseLeave={() => setHoveredIndex(null)}
//                                                 >
//                                                     <div className="thumb mb-0">
//                                                         <a href="#">
//                                                             <div className="image-container">
//                                                                 <img src={podcast.image} alt="Podcast Thumbnail" />
//                                                                 <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                     <div className="info">
//                                                         <h4 className="blog-title">
//                                                             <a href="#">{podcast.title}</a>
//                                                         </h4>
//                                                         <div className="podcast-meta">
//                                                             <p className="guest-name">
//                                                                 <b>Guest:</b> <span style={{fontSize:"13px"}}>{podcast.guest}, {podcast.guestTitle}</span>
//                                                             </p>
//                                                             {podcast.host && (
//                                                                 <p className="host-name  pb-3">
//                                                                     <b>Host:</b> <span style={{fontSize:"13px"}}> {podcast.host}, {podcast.hostTitle}</span>
//                                                                 </p>
//                                                             )}
//                                                         </div>
//                                                         <a href="#" className="text-white podcast-btn">
//                                                             {podcast.actionText} 
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PodCast;

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PodCast = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out"
        });
    }, []);

    const podcastItems = [
        {
            id: 1,
            image: "https://www.visionet.com/sites/default/files/2025-06/beyond-the-checkout-podcast-vsi.webp?fid=15641",
            title: "Scaling smart: Using AI to drive value in the Lifestyle & Fitness industry",
            guest: "Joshua Ainsley",
            guestTitle: "Head of Data Science, New Balance",
            host: "Ali Zubairy",
            actionText: "Watch now"
        },
        {
            id: 2,
            image: "https://www.visionet.com/sites/default/files/2025-07/scaling-smart-fitness-josh-ai-web.webp?fid=16181",
            title: "Beyond the Checkout: Transforming Fashion Retail through Digital Innovation",
            guest: "Katerina Suh",
            guestTitle: "VP of Information Systems, Delta Galil",
            host: "Ali Zubairy",
            hostTitle: "Head of UK/EU, HC IT",
            actionText: "Watch now"
        },
        {
            id: 3,
            image: "https://www.visionet.com/sites/default/files/2025-06/beyond-the-checkout-podcast-vsi.webp?fid=15641",
            title: "Scaling smart: Using AI to drive value in the Lifestyle & Fitness industry",
            guest: "Joshua Ainsley",
            guestTitle: "Head of Data Science, New Balance",
            host: "Ali Zubairy",
            actionText: "Watch now"
        }
    ];

    return (
        <div>
            <div className="pricing-style-two-area py-5 bg-dark text-light blurry-shape">

                {/* Heading */}
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Podcast</h4>
                                <h2 className="title split-text-right split-text-in-right">Retail unlocked</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="container">
                    <div className="pricing-style-four-items">
                        <div className="blog-area blog-grid">
                            <div className="container">
                                <div className="blog-item-box">
                                    <div className="row">

                                        {podcastItems.map((podcast, index) => (
                                            <div 
                                                key={podcast.id} 
                                                className="col-xl-4 col-lg-6 col-md-6 mb-50"
                                                data-aos="fade-up"
                                                data-aos-delay={100 * index}
                                            >
                                                <div
                                                    className="blog-style-two news-card podcast-card bg-dark"
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                >
                                                    <div className="thumb mb-0" data-aos="zoom-in" data-aos-delay={150 * index}>
                                                        <div className="image-container">
                                                            <img src={podcast.image} alt="Podcast Thumbnail" />
                                                            <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
                                                        </div>
                                                    </div>

                                                    <div className="info" data-aos="fade-in" data-aos-delay={200 * index}>
                                                        <h4 className="blog-title">
                                                            <a href="#">{podcast.title}</a>
                                                        </h4>

                                                        <div className="podcast-meta">
                                                            <p className="guest-name">
                                                                <b>Guest:</b> <span style={{fontSize:"13px"}}>{podcast.guest}, {podcast.guestTitle}</span>
                                                            </p>

                                                            {podcast.host && (
                                                                <p className="host-name pb-3">
                                                                    <b>Host:</b> <span style={{fontSize:"13px"}}>{podcast.host}, {podcast.hostTitle}</span>
                                                                </p>
                                                            )}
                                                        </div>

                                                        <a href="#" className="text-white podcast-btn">{podcast.actionText}</a>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PodCast;
