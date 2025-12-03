


// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import the Navigation module along with Pagination
// import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation'; // Import the navigation CSS

// const OurExpertise = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const expertiseItems = [
//         {
//             id: 1,
//             title: "Digital Commerce",
//             image: "/assets/img/icon/5.png",
//             alt: "Digital Commerce Services - HC IT",
//             description: "Our expertise in areas like B2B & B2C Commerce, and Omnichannel strategies ensures your customers have a seamless and engaging experience across all channels."
//         },
//         {
//             id: 2,
//             title: "ERP & CRM",
//             image: "/assets/img/icon/6.png",
//             alt: "Dynamics 365 ERP and CRM Services",
//             description: "As industry leaders in implementing top-tier ERP and CRM systems such as Dynamics 365 and Salesforce, we ensure your operations—from financial management and manufacturing to procurement, marketing, and sales automation—are streamlined and efficient."
//         },
//         {
//             id: 3,
//             title: "Cloud Services",
//             image: "/assets/img/icon/7.png",
//             alt: "Cloud Services and Solutions - HC IT",
//             description: "Partnered with top hyperscalers (such as AWS, Microsoft, and GCP), our cloud services—including consulting, storage, migration, security, and managed services—transform your enterprise into an intelligent, cloud-native organization."
//         },
//         {
//             id: 4,
//             title: "Data Analytics",
//             image: "/assets/img/icon/6.png",
//             alt: "HC IT's Data Analytics Services",
//             description: "We transform business data into valuable, actionable insights. With our expertise in AI/ML, BI Analytics Products, and Gen AI, we help you leverage data to drive smarter decisions and stay ahead of market trends."
//         },
//         {
//             id: 5,
//             title: "Quality Assurance",
//             image: "/assets/img/icon/7.png",
//             alt: "HC IT's Quality Assurance Services",
//             description: "Our rigorous quality assurance processes ensure perfection in every aspect of your technology stack. From software development to infrastructure, we guarantee that your systems meet the highest standards of performance and security."
//         },
//         {
//             id: 6,
//             title: "Integration Frameworks",
//             image: "/assets/img/icon/5.png",
//             alt: "Integration Frameworks - HC IT",
//             description: "We build robust information architectures that provide real-time insights and seamless integration across your entire operation. Our focus on interconnected systems and apps ensures your data integration is always optimized."
//         },
//     ];

//     return (
//         <>
//             <div className="pricing-style-two-area pt-5 bg-dark text-light blurry-shape">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 <h4 className="sub-title">Our Expertise</h4>
//                                 <h2 className="title">Our expertise</h2>
//                                 <p>Our expertise spans the entire technological landscape of retail IT serivces and consumer goods, covering foundational systems, core operations, and customer-facing experiences. Our specialized expertise optimizes every aspect of your business, ensuring seamless integration across your value chain and positioning you for growth.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container">
//                     <div className="expertise-swiper-container position-relative">
//                         <Swiper
//                             // Add Navigation to the modules array
//                             modules={[Pagination, Navigation]}
//                             spaceBetween={30}
//                             slidesPerView={1}
//                             pagination={{
//                                 el: '.custom-swiper-pagination',
//                                 clickable: true,
//                                 bulletClass: 'swiper-pagination-bullet custom-swiper-pagination-bullet',
//                                 bulletActiveClass: 'swiper-pagination-bullet-active custom-swiper-pagination-bullet-active',
//                             }}
//                             // Add navigation configuration
//                             navigation={{
//                                 nextEl: '.swiper-button-next-custom',
//                                 prevEl: '.swiper-button-prev-custom',
//                             }}
//                             breakpoints={{
//                                 640: {
//                                     slidesPerView: 2,
//                                 },
//                                 768: {
//                                     slidesPerView: 2,
//                                 },
//                                 1024: {
//                                     slidesPerView: 3,
//                                 },
//                             }}
//                             className="expertise-swiper"
//                         >
//                             {expertiseItems.map((item, index) => (
//                                 <SwiperSlide key={item.id}>
//                                     <div
//                                         className="az-element az-card card dxpr-shadow-1 expertise-card"
//                                         onMouseEnter={() => setHoveredIndex(index)}
//                                         onMouseLeave={() => setHoveredIndex(null)}
//                                     >
//                                         <div className="card-overlay"></div>

//                                         <div className="card-body">
//                                             <div className="az-ctnr" data-azcnt="true">
//                                                 <div className="az-element az-image text-center">
//                                                     <img
//                                                         className="az-image-content"
//                                                         src={item.image}
//                                                         alt={item.alt}
//                                                         loading="lazy"
//                                                     />
//                                                 </div>
//                                                 <div className="az-element az-text">
//                                                     <h3 className="vsi-subtitle-bgd-h3">{item.title}</h3>
//                                                     <p className="vsi-desc-bgd-mp">{item.description}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* Custom Navigation Buttons */}
//                         <div className="swiper-button-prev-custom swiper-nav-button"></div>
//                         <div className="swiper-button-next-custom swiper-nav-button"></div>

//                         {/* Custom pagination dots */}
//                         <div className="custom-swiper-pagination d-flex justify-content-center mt-4"></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Global styles for the component */}
//             <style>{`
//                 .expertise-swiper-container {
//                     padding-bottom: 40px;
//                 }

//                 .expertise-card {
//                     padding: 15px;
//                     border: 1px solid #2c3b61;
//                     background-color: transparent;
//                     margin: 30px 0;
//                     height: 100%;
//                     min-height: 400px;
//                     max-height: 400px;
//                     transition: transform 0.3s ease, box-shadow 0.3s ease;
//                     background-image: url('/assets/img/shape/banner-7.jpg');
//                     background-size: cover;
//                     background-position: center;
//                     position: relative;
//                     border-radius: 8px;
//                     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//                     display: flex;
//                     flex-direction: column;
//                 }

//                 .expertise-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
//                 }

//                 .card-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background-color: rgba(0, 0, 0, 0.7);
//                     border-radius: 8px;
//                     z-index: 1;
//                 }

//                 .expertise-card .card-body {
//                     position: relative;
//                     z-index: 2;
//                     height: 100%;
//                     display: flex;
//                     flex-direction: column;
//                     padding: 20px;
//                 }

//                 .expertise-card .az-ctnr {
//                     height: 100%;
//                     display: flex;
//                     flex-direction: column;
//                 }

//                 .expertise-card .az-element.az-text {
//                     padding-top: 30px;
//                     flex: 1;
//                     display: flex;
//                     flex-direction: column;
//                 }

//                 .vsi-subtitle-bgd-h3 {
//                     color: #fff;
//                     margin-bottom: 15px;
//                     font-size: 1.5rem;
//                 }
                
//                 .vsi-desc-bgd-mp {
//                     color: #e0e0e0;
//                     line-height: 1.6;
//                     flex: 1;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     display: -webkit-box;
//                     -webkit-line-clamp: 6;
//                     -webkit-box-orient: 'vertical';
//                 }

//                 /* Pagination Dots Styling */
//                 .custom-swiper-pagination {
//                     position: relative;
//                     width: 100%;
//                     z-index: 10;
//                 }

//                 .custom-swiper-pagination-bullet {
//                     width: 12px !important;
//                     height: 12px !important;
//                     border-radius: 50%;
//                     background-color: #555 !important;
//                     opacity: 1 !important;
//                     margin: 0 5px !important;
//                     transition: all 0.3s ease !important;
//                     display: inline-block !important;
//                 }
                
//                 .custom-swiper-pagination-bullet-active {
//                     background-color: #fff !important;
//                     transform: scale(1.2);
//                 }

//                 /* --- NEW: Navigation Buttons Styling --- */
//                 .swiper-nav-button {
//                     position: absolute;
//                     top: 50%;
//                     transform: translateY(-50%);
//                     z-index: 10;
//                     cursor: pointer;
//                     width: 40px;
//                     height: 40px;
//                     border-radius: 50%;
//                     background-color: rgba(255, 255, 255, 0.2);
//                     backdrop-filter: blur(4px);
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     transition: all 0.3s ease;
//                 }

//                 .swiper-nav-button:hover {
//                     background-color: rgba(255, 255, 255, 0.4);
//                 }

//                 .swiper-nav-button::after {
//                     font-family: 'swiper-icons';
//                     font-size: 16px;
//                     color: #fff;
//                     text-transform: none !important;
//                     letter-spacing: 0;
//                     font-variant: initial;
//                     line-height: 1;
//                 }

//                 .swiper-button-prev-custom {
//                     left: 10px;
//                 }

//                 .swiper-button-prev-custom::after {
//                     content: 'prev';
//                 }

//                 .swiper-button-next-custom {
//                     right: 10px;
//                 }

//                 .swiper-button-next-custom::after {
//                     content: 'next';
//                 }
//                     .az-image-content{
//                     height:80px;
//                     }
//             `}</style>
//         </>
//     )
// }

// export default OurExpertise;


import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AOS from "aos";
import "aos/dist/aos.css";

const OurExpertise = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out",
        });
    }, []);

    const expertiseItems = [
        {
            id: 1,
            title: "Digital Commerce",
            image: "/assets/img/icon/5.png",
            alt: "Digital Commerce Services - HC IT",
            description: "Our expertise in areas like B2B & B2C Commerce, and Omnichannel strategies ensures your customers have a seamless and engaging experience across all channels."
        },
        {
            id: 2,
            title: "ERP & CRM",
            image: "/assets/img/icon/6.png",
            alt: "Dynamics 365 ERP and CRM Services",
            description: "As industry leaders in implementing top-tier ERP and CRM systems such as Dynamics 365 and Salesforce, we ensure your operations—from financial management and manufacturing to procurement, marketing, and sales automation—are streamlined and efficient."
        },
        {
            id: 3,
            title: "Cloud Services",
            image: "/assets/img/icon/7.png",
            alt: "Cloud Services and Solutions - HC IT",
            description: "Partnered with top hyperscalers (such as AWS, Microsoft, and GCP), our cloud services—including consulting, storage, migration, security, and managed services—transform your enterprise into an intelligent, cloud-native organization."
        },
        {
            id: 4,
            title: "Data Analytics",
            image: "/assets/img/icon/6.png",
            alt: "HC IT's Data Analytics Services",
            description: "We transform business data into valuable, actionable insights. With our expertise in AI/ML, BI Analytics Products, and Gen AI, we help you leverage data to drive smarter decisions and stay ahead of market trends."
        },
        {
            id: 5,
            title: "Quality Assurance",
            image: "/assets/img/icon/7.png",
            alt: "HC IT's Quality Assurance Services",
            description: "Our rigorous quality assurance processes ensure perfection in every aspect of your technology stack. From software development to infrastructure, we guarantee that your systems meet the highest standards of performance and security."
        },
        {
            id: 6,
            title: "Integration Frameworks",
            image: "/assets/img/icon/5.png",
            alt: "Integration Frameworks - HC IT",
            description: "We build robust information architectures that provide real-time insights and seamless integration across your entire operation. Our focus on interconnected systems and apps ensures your data integration is always optimized."
        },
    ];

    return (
        <>
            <div className="pricing-style-two-area pt-5 bg-dark text-light blurry-shape">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div
                                className="site-heading text-center"
                                data-aos="fade-up"
                            >
                                <h4 className="sub-title">Our Expertise</h4>
                                <h2 className="title">Our expertise</h2>
                                <p>
                                    Our expertise spans the entire technological landscape of retail IT services and consumer goods, covering foundational systems, core operations, and customer-facing experiences. Our specialized expertise optimizes every aspect of your business, ensuring seamless integration across your value chain and positioning you for growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="expertise-swiper-container position-relative">
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{
                                el: '.custom-swiper-pagination',
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet custom-swiper-pagination-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active custom-swiper-pagination-bullet-active',
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="expertise-swiper"
                        >
                            {expertiseItems.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <div
                                        className="az-element az-card card dxpr-shadow-1 expertise-card"
                                        data-aos="zoom-in-up"
                                        data-aos-delay={index * 150}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="card-overlay"></div>

                                        <div className="card-body">
                                            <div className="az-ctnr" data-azcnt="true">
                                                <div className="az-element az-image text-center">
                                                    <img
                                                        className="az-image-content"
                                                        src={item.image}
                                                        alt={item.alt}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="az-element az-text">
                                                    <h3 className="vsi-subtitle-bgd-h3">{item.title}</h3>
                                                    <p className="vsi-desc-bgd-mp">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div
                            className="swiper-button-prev-custom swiper-nav-button"
                            data-aos="fade-right"
                        ></div>

                        <div
                            className="swiper-button-next-custom swiper-nav-button"
                            data-aos="fade-left"
                        ></div>

                        {/* Pagination Dots */}
                        <div
                            className="custom-swiper-pagination d-flex justify-content-center mt-4"
                            data-aos="fade-up"
                        ></div>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .expertise-swiper-container { padding-bottom: 40px; }
                .expertise-card {
                    padding: 15px;
                    border: 1px solid #2c3b61;
                    background-color: transparent;
                    margin: 30px 0;
                    height: 100%;
                    min-height: 400px;
                    max-height: 400px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    background-image: url('/assets/img/shape/banner-7.jpg');
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    display: flex;
                    flex-direction: column;
                }
                .expertise-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
                }
                .card-overlay {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    border-radius: 8px;
                    z-index: 1;
                }
                .expertise-card .card-body {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                }
                .expertise-card .az-ctnr {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .expertise-card .az-element.az-text {
                    padding-top: 30px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .vsi-subtitle-bgd-h3 {
                    color: #fff;
                    margin-bottom: 15px;
                    font-size: 1.5rem;
                }
                .vsi-desc-bgd-mp {
                    color: #e0e0e0;
                    line-height: 1.6;
                    flex: 1;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                }
                .custom-swiper-pagination { position: relative; z-index: 10; }
                .custom-swiper-pagination-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    background-color: #555 !important;
                    opacity: 1 !important;
                    margin: 0 5px !important;
                    transition: all 0.3s ease !important;
                }
                .custom-swiper-pagination-bullet-active {
                    background-color: #fff !important;
                    transform: scale(1.2);
                }
                .swiper-nav-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .swiper-nav-button:hover {
                    background-color: rgba(255, 255, 255, 0.4);
                }
                .swiper-button-prev-custom { left: 10px; }
                .swiper-button-next-custom { right: 10px; }
                .az-image-content { height: 80px; }
            `}</style>
        </>
    );
};

export default OurExpertise;
