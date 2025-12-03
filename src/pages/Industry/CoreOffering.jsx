// import React, { useEffect } from 'react';
// import Swiper from 'swiper/bundle'; // Import Swiper bundle
// import 'swiper/css/bundle'; // Import Swiper styles

// const CoreOffering = () => {
//     useEffect(() => {
//         // Initialize Swiper for the partner logos
//         const partnerSwiper = new Swiper('.brand-style-one-carousel', {
//             // Optional parameters
//             loop: true, // Enables infinite loop
//             slidesPerView: 'auto', // Allows slides to be their natural width
//             spaceBetween: 50, // Space between slides
//             speed: 3000, // Reduced speed for better visibility
//             allowTouchMove: true, // Enable touch for better user experience
//             autoplay: {
//                 delay: 0, // No delay between transitions
//                 disableOnInteraction: false, // Autoplay won't stop after user interaction
//             },
//             breakpoints: {
//                 // When window width is >= 640px
//                 640: {
//                     slidesPerView: 2,
//                 },
//                 // When window width is >= 768px
//                 768: {
//                     slidesPerView: 3,
//                 },
//                 // When window width is >= 1024px
//                 1024: {
//                     slidesPerView: 4,
//                 },
//             }
//         });

//         // Cleanup function to destroy Swiper instance when component unmounts
//         return () => {
//             if (partnerSwiper) {
//                 partnerSwiper.destroy(true, true);
//             }
//         };
//     }, []); // Empty dependency array ensures this runs only once on mount


//     return (
//         <div>
//             <div className="language-support-area blurry-shape py-5 bg-dark text-light">
//                 <div className="container">
//                     <div className="row flex d-lg-flex align-center">
//                         <div className="col-lg-5">
//                             <div className="language-support-country-flag text-center">
//                                 <img src="/assets/img/shape/14.png" alt="Decorative background shape" />
//                                 <img src="/assets/img/icon/flag-can.png" alt="Canadian Flag" />
//                                 <img src="/assets/img/icon/flag-china.png" alt="Chinese Flag" />
//                                 <img src="/assets/img/icon/flag-dub.png" alt="UAE Flag" />
//                                 <img src="/assets/img/icon/flat-am.png" alt="American Flag" />
//                                 <img src="/assets/img/icon/flag-uks.png" alt="United Kingdom Flag" />
//                                 <div className="round-move"></div>
//                                 <div className="round-move-two"></div>
//                                 <div className="fun-fact">
//                                     <div className="js-counter">165+</div>
//                                     <h4>Services</h4>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 offset-lg-1">
//                             <div className="language-support-info">
//                                 <h2 className="title split-text-right split-text-in-right ">Our Core Offers</h2>

//                                 <h5>Transform customer experience and business operations with AI-powered low code/no code platform</h5>
//                                 <a className="btn btn-style-one btn-border mt-35" href="#">Watch the demand</a>

//                             </div>

//                             <div className='pt-5 '>
//                                 <h2>Our Partners</h2>

//                                 {/* Swiper container for partner logos */}
//                                 <div className="brand-items">
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-lg-12"> {/* Changed to col-lg-12 to use full width */}
//                                                 <div className="brand-style-one-carousel swiper wow fadeInUp" data-wow-delay="400ms">
//                                                     <div className="swiper-wrapper h-10">
//                                                         <div className="swiper-slide">
//                                                             <div className="brand-item">
//                                                                 <img src="/assets/img/logo/1-light.png" style={{ width: "150px", height: "45px" }} alt="Partner Logo 1" />
//                                                             </div>
//                                                         </div>
//                                                         <div className="swiper-slide">
//                                                             <div className="brand-item">
//                                                                 <img src="/assets/img/logo/2-light.png" style={{ width: "150px", height: "45px" }} alt="Partner Logo 2" />
//                                                             </div>
//                                                         </div>
//                                                         <div className="swiper-slide">
//                                                             <div className="brand-item">
//                                                                 <img src="/assets/img/logo/3-light.png" style={{ width: "150px", height: "45px" }} alt="Partner Logo 3" />
//                                                             </div>
//                                                         </div>
//                                                         <div className="swiper-slide">
//                                                             <div className="brand-item">
//                                                                 <img src="/assets/img/logo/4-light.png" style={{ width: "150px", height: "45px" }} alt="Partner Logo 4" />
//                                                             </div>
//                                                         </div>
//                                                         <div className="swiper-slide">
//                                                             <div className="brand-item">
//                                                                 <img src="/assets/img/logo/5-light.png" style={{ width: "150px", height: "45px" }} alt="Partner Logo 5" />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
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
//     );
// };

// export default CoreOffering;




import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import AOS from "aos";
import "aos/dist/aos.css";

const CoreOffering = () => {

    useEffect(() => {
       

        const partnerSwiper = new Swiper('.brand-style-one-carousel', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 50,
            speed: 3000,
            allowTouchMove: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        });

        return () => partnerSwiper.destroy(true, true);
    }, []);

    return (
        <div>
            <div className="language-support-area blurry-shape py-5 bg-dark text-light">
                <div className="container">
                    <div className="row flex d-lg-flex align-center">

                        {/* LEFT FLAGS */}
                        <div className="col-lg-5" data-aos="fade-right">
                            <div className="language-support-country-flag text-center">
                                <img src="/assets/img/shape/14.png" alt="bg" />
                                <img src="/assets/img/icon/flag-can.png" alt="Canadian Flag" />
                                <img src="/assets/img/icon/flag-china.png" alt="Chinese Flag" />
                                <img src="/assets/img/icon/flag-dub.png" alt="UAE Flag" />
                                <img src="/assets/img/icon/flat-am.png" alt="American Flag" />
                                <img src="/assets/img/icon/flag-uks.png" alt="UK Flag" />

                                <div className="round-move"></div>
                                <div className="round-move-two"></div>

                                <div className="fun-fact">
                                    <div className="js-counter">165+</div>
                                    <h4>Services</h4>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE CONTENT */}
                        <div className="col-lg-6 offset-lg-1">
                            <div className="language-support-info">
                                <h2 
                                    className="title split-text-right split-text-in-right" 
                                    data-aos="fade-up"
                                >
                                    Our Core Offers
                                </h2>

                                <h5 data-aos="fade-up" data-aos-delay="200">
                                    Transform customer experience and business operations with AI-powered low code/no code platform
                                </h5>

                                <a 
                                    className="btn btn-style-one btn-border mt-35" 
                                    data-aos="zoom-in" 
                                    data-aos-delay="300"
                                    href="#"
                                >
                                    Watch the demand
                                </a>
                            </div>

                            {/* PARTNERS */}
                            <div className='pt-5'>
                                <h2 data-aos="fade-up" data-aos-delay="100">Our Partners</h2>

                                <div className="brand-items">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">

                                                {/* Swiper */}
                                                <div 
                                                    className="brand-style-one-carousel swiper" 
                                                    data-aos="fade-up" 
                                                    data-aos-delay="200"
                                                >
                                                    <div className="swiper-wrapper h-10">

                                                        {/* Logo 1 */}
                                                        <div className="swiper-slide" data-aos="fade-up" data-aos-delay="200">
                                                            <div className="brand-item">
                                                                <img src="/assets/img/logo/1-light.png" style={{ width: 150, height: 45 }} />
                                                            </div>
                                                        </div>

                                                        {/* Logo 2 */}
                                                        <div className="swiper-slide" data-aos="fade-up" data-aos-delay="250">
                                                            <div className="brand-item">
                                                                <img src="/assets/img/logo/2-light.png" style={{ width: 150, height: 45 }} />
                                                            </div>
                                                        </div>

                                                        {/* Logo 3 */}
                                                        <div className="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                                            <div className="brand-item">
                                                                <img src="/assets/img/logo/3-light.png" style={{ width: 150, height: 45 }} />
                                                            </div>
                                                        </div>

                                                        {/* Logo 4 */}
                                                        <div className="swiper-slide" data-aos="fade-up" data-aos-delay="350">
                                                            <div className="brand-item">
                                                                <img src="/assets/img/logo/4-light.png" style={{ width: 150, height: 45 }} />
                                                            </div>
                                                        </div>

                                                        {/* Logo 5 */}
                                                        <div className="swiper-slide" data-aos="fade-up" data-aos-delay="400">
                                                            <div className="brand-item">
                                                                <img src="/assets/img/logo/5-light.png" style={{ width: 150, height: 45 }} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
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

export default CoreOffering;
