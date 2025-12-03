// import React, { useState } from 'react';

// const LeadershipPulse = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const newsItems = [
//         {
//             id: 1,
//             image: "https://z-cdn-media.chatglm.cn/files/edbb6d5c-8b27-4201-80c6-e9962dc11b73_pasted_image_1763019897675.png?auth_key=1863019922-e8cc6ffb87b9494d84a22d1a7c9d2ea0-0-bbbf1418c58efcef8a29d590a21f6fb0",
//             author: "Mohammad Khalid",
//             authorTitle: "Senior Vice President",
//             title: "HC IT Driving Retail Innovation with Digital Transformation Solutions"
//         },
//         {
//             id: 2,
//             image: "https://z-cdn-media.chatglm.cn/files/edbb6d5c-8b27-4201-80c6-e9962dc11b73_pasted_image_1763019897675.png?auth_key=1863019922-e8cc6ffb87b9494d84a22d1a7c9d2ea0-0-bbbf1418c58efcef8a29d590a21f6fb0",
//             author: "Mohammad Khalid",
//             authorTitle: "Senior Vice President",
//             title: "Mastering the Holiday Rush: Winning Strategies for Thanksgiving and Black Friday Sales"
//         },
//         {
//             id: 3,
//             image: "https://z-cdn-media.chatglm.cn/files/edbb6d5c-8b27-4201-80c6-e9962dc11b73_pasted_image_1763019897675.png?auth_key=1863019922-e8cc6ffb87b9494d84a22d1a7c9d2ea0-0-bbbf1418c58efcef8a29d590a21f6fb0",
//             author: "Mohammad Khalid",
//             authorTitle: "Senior Vice President",
//             title: "Leveraging supply chain connectivity for omnichannel excellence"
//         }
//     ];

//     return (
//         <div>
//             <div className="pricing-style-two-area py-5 bg-dark text-light blurry-shape">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 <h2 className="title split-text-right split-text-in-right">Leadership Pulse.</h2>
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
//                                         {newsItems.map((news, index) => (
//                                             <div key={news.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
//                                                 <div
//                                                     className="blog-style-two fade-up-anim news-card"
//                                                     onMouseEnter={() => setHoveredIndex(index)}
//                                                     onMouseLeave={() => setHoveredIndex(null)}
//                                                 >
//                                                     <div className="thumb mb-0">
//                                                         <a href="#">
//                                                             <div className="image-container">
//                                                                 <img src={news.image} alt="Thumb" />
//                                                                 <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                     <div className="info">
//                                                         <div className="blog-one-meta">
//                                                             <ul>
//                                                                 <li>
//                                                                     <a href="#" style={{ color: "#fff" }}>{news.author}</a>
//                                                                 </li>
//                                                                 <li>
//                                                                     {news.authorTitle}
//                                                                 </li>
//                                                             </ul>
//                                                         </div>
//                                                         <h4 className="blog-title">
//                                                             <a href="#">{news.title}</a>
//                                                         </h4>
//                                                         <a href="#" className="text-white">
//                                                             Read more <i className="fas fa-long-arrow-right"></i>
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

// export default LeadershipPulse;


import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const LeadershipPulse = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out",
        });
    }, []);

    const newsItems = [
        {
            id: 1,
            image: "https://z-cdn-media.chatglm.cn/files/edbb6d5c-8b27-4201-80c6-e9962dc11b73_pasted_image_1763019897675.png?auth_key=1863019922-e8cc6ffb87b9494d84a22d1a7c9d2ea0-0-bbbf1418c58efcef8a29d590a21f6fb0",
            author: "Mohammad Khalid",
            authorTitle: "Senior Vice President",
            title: "HC IT Driving Retail Innovation with Digital Transformation Solutions"
        },
        {
            id: 2,
            image: "https://z-cdn-media.chatglm.cn/files/edbb6d5c-8b27-4201-80c6-e9962dc11b73_pasted_image_1763019897675.png?auth_key=1863019922-e8cc6ffb87b9494d84a22d1a7c9d2ea0-0-bbbf1418c58efcef8a29d590a21f6fb0",
            author: "Mohammad Khalid",
            authorTitle: "Senior Vice President",
            title: "Mastering the Holiday Rush: Winning Strategies for Thanksgiving and Black Friday Sales"
        },
        {
            id: 3,
            image: "https://z-cdn-media.chatglm.cn/files/edbb6d5c-8b27-4201-80c6-e9962dc11b73_pasted_image_1763019897675.png?auth_key=1863019922-e8cc6ffb87b9494d84a22d1a7c9d2ea0-0-bbbf1418c58efcef8a29d590a21f6fb0",
            author: "Mohammad Khalid",
            authorTitle: "Senior Vice President",
            title: "Leveraging supply chain connectivity for omnichannel excellence"
        }
    ];

    return (
        <div>
            <div className="pricing-style-two-area py-5 bg-dark text-light blurry-shape">

                {/* Section Title */}
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="title split-text-right split-text-in-right">
                                    Leadership Pulse.
                                </h2>
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

                                        {newsItems.map((news, index) => (
                                            <div
                                                key={news.id}
                                                className="col-xl-4 col-lg-6 col-md-6 mb-50"
                                                data-aos="fade-up"
                                                data-aos-delay={index * 150}
                                            >
                                                <div 
                                                    className="blog-style-two news-card"
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                >

                                                    {/* Image */}
                                                    <div className="thumb mb-0" data-aos="zoom-in">
                                                        <a href="#">
                                                            <div className="image-container">
                                                                <img src={news.image} alt="Thumb" />
                                                                <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    {/* Text */}
                                                    <div className="info" data-aos="fade-in" data-aos-delay={index * 200}>
                                                        <div className="blog-one-meta">
                                                            <ul>
                                                                <li>
                                                                    <a href="#" style={{ color: "#fff" }}>{news.author}</a>
                                                                </li>
                                                                <li>{news.authorTitle}</li>
                                                            </ul>
                                                        </div>

                                                        <h4 className="blog-title">
                                                            <a href="#">{news.title}</a>
                                                        </h4>

                                                        <a href="#" className="text-white">
                                                            Read more <i className="fas fa-long-arrow-right"></i>
                                                        </a>
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
    )
}

export default LeadershipPulse;
