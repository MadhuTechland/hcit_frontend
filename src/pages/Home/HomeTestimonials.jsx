// import React, { useState } from 'react';

// const HomeTestimonials = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     // Testimonials data
//     const testimonials = [
//         {
//             id: 1,
//             clientName: "Aleesha Brown",
//             clientTitle: "Tech Engineer",
//             clientImage: "assets/img/team/11.jpg",
//             content: "Consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering the performance."
//         },
//         {
//             id: 2,
//             clientName: "Kevin Martin",
//             clientTitle: "Product Manager",
//             clientImage: "assets/img/team/12.jpg",
//             content: "Regulations discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering the performance."
//         },
//           {
//             id: 3,
//             clientName: "Kevin Martin",
//             clientTitle: "Product Manager",
//             clientImage: "assets/img/team/12.jpg",
//             content: "Regulations discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering the performance."
//         },
//         {
//             id: 4,
//             clientName: "Kevin Martin",
//             clientTitle: "Product Manager",
//             clientImage: "assets/img/team/12.jpg",
//             content: "Regulations discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering the performance."
//         }
//     ];

//     return (
//         <div>
//             <div className="pricing-style-two-area default-padding bottom-less bg-dark text-light blurry-shape">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 <h4 className="sub-title">testimonials</h4>
//                                 <h2 className="title split-text-right split-text-in-right">Client testimonials</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="testimonial-style-three-area">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12">
//                                     <div className="testimonial-style-three-items bg-gray blurry-shape-right-bottom" style={{backgroundImage: "url(/assets/img/shape/3.png)"}}>
//                                         <div className="testimonial-style-three-carousel swiper">
//                                             <div className="swiper-wrapper">
//                                                 {testimonials.map((testimonial, index) => (
//                                                     <div className="swiper-slide" key={testimonial.id}>
//                                                         <div className="testimonial-style-three">
//                                                             <div className="left">
//                                                                 <img src="assets/img/shape/12.png" alt="Image Not Found" />
//                                                                 <img src="/assets/img/icon/quote-two.png" alt="Image Not Found" />
//                                                             </div>
//                                                             <div className="right">
//                                                                 <div className="top">
//                                                                     <img src="/assets/img/icon/21.png" alt="Image Not Found" />
//                                                                     <div className="rating">
//                                                                         <i className="fas fa-star"></i>
//                                                                         <i className="fas fa-star"></i>
//                                                                         <i className="fas fa-star"></i>
//                                                                         <i className="fas fa-star"></i>
//                                                                         <i className="fas fa-star"></i>
//                                                                     </div>
//                                                                 </div>
//                                                                 <p>
//                                                                     {testimonial.content}
//                                                                 </p>
//                                                                 <div className="provider">
//                                                                     <div className="icon">
//                                                                         <img src={testimonial.clientImage} alt="Client" />
//                                                                     </div>
//                                                                     <div className="">
//                                                                         <h4>{testimonial.clientName}</h4>
//                                                                         <span>{testimonial.clientTitle}</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <div className="project-swiper-nav">
//                                                 <div className="testimonial-three-prev"><i className="fas fa-angle-left"></i></div>
//                                                 <div className="testimonial-three-next"><i className="fas fa-angle-right"></i></div>
//                                             </div>
//                                         </div>
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

// export default HomeTestimonials;

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import testimonialService from '../../services/testimonialService';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HomeTestimonials = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch testimonials from API
        const fetchTestimonials = async () => {
            try {
                const response = await testimonialService.getAll();
                const testimonialData = response.data || [];

                // Transform API data to match component structure
                const transformedTestimonials = testimonialData.map(item => ({
                    id: item.id,
                    clientName: item.client_name,
                    clientTitle: item.client_position,
                    clientImage: item.client_image ? `http://localhost:8000/storage/${item.client_image}` : "assets/img/team/11.jpg",
                    content: item.content
                }));

                setTestimonials(transformedTestimonials);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                // Fallback to default data if API fails
                setTestimonials([
                    {
                        id: 1,
                        clientName: "Aleesha Brown",
                        clientTitle: "Tech Engineer",
                        clientImage: "assets/img/team/11.jpg",
                        content: "Consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering the performance."
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return (
            <div className="pricing-style-two-area default-padding bottom-less bg-dark text-light blurry-shape">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="pricing-style-two-area default-padding bottom-less bg-dark text-light blurry-shape">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">testimonials</h4>
                                <h2 className="title split-text-right split-text-in-right">Client testimonials</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="testimonial-style-three-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="testimonial-style-three-items bg-gray blurry-shape-right-bottom" style={{backgroundImage: "url(/assets/img/shape/3.png)"}}>
                                        {/* 4. Replace the static divs with the Swiper React component */}
                                        <Swiper
                                            // Install and configure modules
                                            modules={[Navigation]}
                                            // Swiper configuration options
                                            spaceBetween={30} // Space between slides in px
                                            slidesPerView={1} // Number of slides to show at once
                                            loop={true} // Enables continuous loop mode
                                            // Navigation configuration
                                            navigation={{
                                                // The class names must match the buttons in your HTML
                                                nextEl: '.testimonial-three-next',
                                                prevEl: '.testimonial-three-prev',
                                            }}
                                            // Optional: Add breakpoints for responsiveness
                                            breakpoints={{
                                                // when window width is >= 768px
                                                768: {
                                                    slidesPerView: 1,
                                                },
                                            }}
                                            className="testimonial-style-three-carousel"
                                        >
                                            {/* 5. Map your data to SwiperSlide components */}
                                            {testimonials.map((testimonial) => (
                                                <SwiperSlide key={testimonial.id}>
                                                    <div className="testimonial-style-three">
                                                        <div className="left">
                                                            <img src="assets/img/shape/12.png" alt="Shape" />
                                                            <img src="/assets/img/icon/quote-two.png" alt="Quote" />
                                                        </div>
                                                        <div className="right">
                                                            <div className="top">
                                                                <img src="/assets/img/icon/21.png" alt="Icon" />
                                                                <div className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                {testimonial.content}
                                                            </p>
                                                            <div className="provider">
                                                                <div className="icon">
                                                                    <img src={testimonial.clientImage} alt={testimonial.clientName} />
                                                                </div>
                                                                <div className="">
                                                                    <h4>{testimonial.clientName}</h4>
                                                                    <span>{testimonial.clientTitle}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        
                                        {/* The navigation buttons remain outside the Swiper component but are referenced by it */}
                                        <div className="project-swiper-nav">
                                            <div className="testimonial-three-prev"><i className="fas fa-angle-left"></i></div>
                                            <div className="testimonial-three-next"><i className="fas fa-angle-right"></i></div>
                                        </div>
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

export default HomeTestimonials;
