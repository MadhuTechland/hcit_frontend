// import React, { useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import required modules
// import { Navigation, Pagination } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const SubIndustries = () => {
//     // State for hover effects
//     const [isLeftHovered, setIsLeftHovered] = useState(false);
//     const [isRightHovered, setIsRightHovered] = useState(false);

//     // Industry data array for looping
//     const industries = [
//         {
//             id: 1,
//             title: "Apparel & Footwear",
//             image: "https://www.visionet.com/sites/default/files/2024-08/Apparel%20%26%20Footwear.webp?fid=5191",
//             alt: "Apparel and Footwear Services - HC IT",
//             description: "Transform your apparel and footwear business with cutting-edge digital strategies. Enhance your digital presence, streamline customer experiences, and offer personalized services to ensure sustainable growth with maximum customer satisfaction.",
//             link: "/industry/apparel-and-footwear"
//         },
//         {
//             id: 2,
//             title: "Food & Beverages",
//             image: "https://www.visionet.com/sites/default/files/2024-08/Food%20%26%20Beverages.webp?fid=5196",
//             alt: "Food and Beverage Solutions - HC IT",
//             description: "Revolutionize your food and beverage operations with advanced Supply Chain Management, seamless D2C commerce, and AI-driven supply and demand forecasting accuracy. Achieve efficiency and meet the evolving needs of your customers.",
//             link: "/industry/food-and-beverage"
//         },
//         {
//             id: 3,
//             title: "Manufacturing ",
//             image: "https://www.visionet.com/sites/default/files/2024-08/Manufacturing%20%26%20Distribution.webp?fid=5201",
//             alt: "Manufacturing and Distribution Industry Services and Solutions",
//             description: "Drive your manufacturing and distribution operations to the next level with our advanced data-driven analytics, omnichannel strategies, and innovative supply chain solutions. Operational efficiency and optimize factory operations via our AI-driven tools.",
//             link: "/industry/manufacturing-and-distribution"
//         },
//         {
//             id: 4,
//             title: "Logistics",
//             image: "https://www.visionet.com/sites/default/files/2024-08/Retail%20%26%20CPG.webp?fid=5206",
//             alt: "Logistics Supply Chain & Retail Services - HC IT",
//             description: "Optimize your value-chain with efficient process flows, integrated applications. Enhance user experience and delight customer with personalized B2B and B2C experience. Gain efficiency in Order fulfilment cycle, cost optimization in procurement and planning through AI driven processes.",
//             link: "/industry/logistics-supply-chain-and-eretail"
//         }
//     ];

//     return (
//         <div>
//             {/* The main container class is kept, but the ID is changed for clarity */}
//             <div id="overview" className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 {/* Changed title from "Case studies" to "Overview" */}
//                                 <h2 className="title split-text-right split-text-in-right">Sub-industries we support</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* New content structure based on the image */}
//                 <div className="container position-relative">
//                     <Swiper
//                         // Install Navigation and Pagination modules
//                         modules={[Navigation, Pagination]}
//                         // Space between slides
//                         spaceBetween={30}
//                         // Slides per view
//                         slidesPerView={1}
//                         // Navigation buttons configuration
//                         navigation={{
//                             nextEl: '.custom-swiper-button-next',
//                             prevEl: '.custom-swiper-button-prev',
//                         }}
//                         autoplay={{
//                             delay: 3500, 
//                             disableOnInteraction: false, 
//                             pauseOnMouseEnter: true, 
//                         }}
//                         pagination={{
//                             el: '.custom-swiper-pagination',
//                             clickable: true,
//                             bulletClass: 'custom-swiper-pagination-bullet',
//                             bulletActiveClass: 'custom-swiper-pagination-bullet-active',
//                         }}
//                         // Responsive breakpoints
//                         breakpoints={{
//                             // When window width is >= 640px (tablet)
//                             640: {
//                                 slidesPerView: 2,
//                             },
//                             // When window width is >= 1024px (desktop)
//                             1024: {
//                                 slidesPerView: 3,
//                             },
//                         }}
//                         className="mySwiper"
//                     >
//                         {/* Loop through industries data */}
//                         {industries.map((industry) => (
//                             <SwiperSlide key={industry.id}>
//                                 <div className="card dxpr-shadow-1 h-100" style={{ margin: ' 1px', padding: '15px' }}>
//                                     <div className="card-body d-flex flex-column h-100">
//                                         <div className="az-ctnr flex-grow-1">
//                                             <div className="az-image sub-industries">
//                                                 <img
//                                                     className="az-image-content"
//                                                     style={{ width: '100%' }}
//                                                     src={industry.image}
//                                                     alt={industry.alt}
//                                                     loading="lazy"
//                                                 />
//                                             </div>
//                                             <div className="az-text" style={{ paddingTop: '30px' }}>
//                                                 <h3 className="vsi-subtitle-bgw-h3">{industry.title}</h3>
//                                                 <p className="vsi-desc-bgw-lp">
//                                                     {industry.description}
//                                                 </p>
//                                                 <p>
//                                                     <a href={industry.link} id="read-more-link">
//                                                         <span style={{ fontSize: '15px' }}>Learn More</span>
//                                                     </a>
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Custom circular navigation buttons */}
//                     <div
//                         className="custom-swiper-button-prev position-absolute"
//                         style={{
//                             top: '50%',
//                             left: '10px',
//                             transform: 'translateY(-50%)',
//                             width: '50px',
//                             height: '50px',
//                             borderRadius: '50%',
//                             backgroundColor: '#fff',
//                             boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             cursor: 'pointer',
//                             zIndex: 10,
//                             transition: 'all 0.3s ease'
//                         }}
//                         onMouseEnter={() => setIsLeftHovered(true)}
//                         onMouseLeave={() => setIsLeftHovered(false)}
//                     >
//                         <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             style={{
//                                 transform: isLeftHovered ? 'translateX(-3px)' : 'translateX(0)',
//                                 transition: 'transform 0.3s ease'
//                             }}
//                         >
//                             <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </div>

//                     <div
//                         className="custom-swiper-button-next position-absolute"
//                         style={{
//                             top: '50%',
//                             right: '10px',
//                             transform: 'translateY(-50%)',
//                             width: '50px',
//                             height: '50px',
//                             borderRadius: '50%',
//                             backgroundColor: '#fff',
//                             boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             cursor: 'pointer',
//                             zIndex: 10,
//                             transition: 'all 0.3s ease'
//                         }}
//                         onMouseEnter={() => setIsRightHovered(true)}
//                         onMouseLeave={() => setIsRightHovered(false)}
//                     >
//                         <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             style={{
//                                 transform: isRightHovered ? 'translateX(3px)' : 'translateX(0)',
//                                 transition: 'transform 0.3s ease'
//                             }}
//                         >
//                             <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </div>

//                     {/* Custom pagination dots */}
//                     <div className="custom-swiper-pagination d-flex justify-content-center mt-4"></div>
//                 </div>
//             </div>

//             {/* Custom styles for pagination dots */}
//             <style jsx>{`
//                 .custom-swiper-pagination-bullet {
//                     width: 12px;
//                     height: 12px;
//                     border-radius: 50%;
//                     background-color: #ccc;
//                     opacity: 1;
//                     margin: 0 5px;
//                     transition: all 0.3s ease;
//                 }
                
//                 .custom-swiper-pagination-bullet-active {
//                     background-color: #333;
//                     transform: scale(1.2);
//                 }
//                     .swiper-navigation-icon{
//                     display:none;
                    
//                     }
//                     .sub-industries img{
//                     height:200px
//                     }
//             `}</style>
//         </div>
//     )
// }

// export default SubIndustries;

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AOS from "aos";
import "aos/dist/aos.css";

const SubIndustries = () => {

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out",
        });
    }, []);

    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    const industries = [
        {
            id: 1,
            title: "Apparel & Footwear",
            image: "https://www.visionet.com/sites/default/files/2024-08/Apparel%20%26%20Footwear.webp?fid=5191",
            alt: "Apparel and Footwear Services - HC IT",
            description: "Transform your apparel and footwear business with cutting-edge digital strategies...",
            link: "/industry/apparel-and-footwear"
        },
        {
            id: 2,
            title: "Food & Beverages",
            image: "https://www.visionet.com/sites/default/files/2024-08/Food%20%26%20Beverages.webp?fid=5196",
            alt: "Food and Beverage Solutions - HC IT",
            description: "Revolutionize your food and beverage operations with advanced Supply Chain Management...",
            link: "/industry/food-and-beverage"
        },
        {
            id: 3,
            title: "Manufacturing ",
            image: "https://www.visionet.com/sites/default/files/2024-08/Manufacturing%20%26%20Distribution.webp?fid=5201",
            alt: "Manufacturing and Distribution Industry Services and Solutions",
            description: "Drive your manufacturing and distribution operations to the next level...",
            link: "/industry/manufacturing-and-distribution"
        },
        {
            id: 4,
            title: "Logistics",
            image: "https://www.visionet.com/sites/default/files/2024-08/Retail%20%26%20CPG.webp?fid=5206",
            alt: "Logistics Supply Chain & Retail Services - HC IT",
            description: "Optimize your value-chain with efficient process flows and integrated applications...",
            link: "/industry/logistics-supply-chain-and-eretail"
        }
    ];

    return (
        <div>
            <div id="overview" className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">

                {/* Title */}
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="title split-text-right split-text-in-right">
                                    Sub-industries we support
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="200">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-swiper-button-next',
                            prevEl: '.custom-swiper-button-prev',
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            el: '.custom-swiper-pagination',
                            clickable: true,
                            bulletClass: 'custom-swiper-pagination-bullet',
                            bulletActiveClass: 'custom-swiper-pagination-bullet-active',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >

                        {industries.map((industry, index) => (
                            <SwiperSlide key={industry.id}>
                                <div 
                                    className="card dxpr-shadow-1 h-100"
                                    style={{ margin: '1px', padding: '15px' }}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 150}
                                >
                                    <div className="card-body d-flex flex-column h-100">
                                        <div className="az-ctnr flex-grow-1">
                                            <div className="az-image sub-industries">
                                                <img
                                                    className="az-image-content"
                                                    style={{ width: '100%' }}
                                                    src={industry.image}
                                                    alt={industry.alt}
                                                    loading="lazy"
                                                />
                                            </div>

                                            <div 
                                                className="az-text"
                                                style={{ paddingTop: '30px' }}
                                                data-aos="fade-in"
                                                data-aos-delay={index * 200}
                                            >
                                                <h3 className="vsi-subtitle-bgw-h3">{industry.title}</h3>
                                                <p className="vsi-desc-bgw-lp">{industry.description}</p>
                                                <p>
                                                    <a href={industry.link} id="read-more-link">
                                                        <span style={{ fontSize: '15px' }}>Learn More</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

                    {/* Prev Button */}
                    <div
                        className="custom-swiper-button-prev position-absolute"
                        data-aos="fade-right"
                        style={{
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10
                        }}
                        onMouseEnter={() => setIsLeftHovered(true)}
                        onMouseLeave={() => setIsLeftHovered(false)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                transform: isLeftHovered ? 'translateX(-4px)' : 'translateX(0)',
                                transition: '0.3s ease'
                            }}
                        >
                            <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Next Button */}
                    <div
                        className="custom-swiper-button-next position-absolute"
                        data-aos="fade-left"
                        style={{
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 10
                        }}
                        onMouseEnter={() => setIsRightHovered(true)}
                        onMouseLeave={() => setIsRightHovered(null)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                transform: isRightHovered ? 'translateX(4px)' : 'translateX(0)',
                                transition: '0.3s ease'
                            }}
                        >
                            <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="custom-swiper-pagination d-flex justify-content-center mt-4"></div>
                </div>
            </div>

            <style jsx>{`
                .custom-swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color: #ccc;
                    margin: 0 5px;
                    transition: 0.3s ease;
                }

                .custom-swiper-pagination-bullet-active {
                    background-color: #000;
                    transform: scale(1.2);
                }
                .sub-industries img { height: 200px; }
            `}</style>
        </div>
    )
}

export default SubIndustries;
