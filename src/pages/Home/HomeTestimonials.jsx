import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import testimonialService from '../../services/testimonialService';

const HomeTestimonials = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'https://floralwhite-kudu-744792.hostingersite.com/uploads';
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 250,
            easing: "ease-out-cubic",
            once: false,
        });

        const fetchTestimonials = async () => {
            try {
                const response = await testimonialService.getAll();
                const testimonialData = response.data || [];

                const transformedTestimonials = testimonialData.map(item => ({
                    id: item.id,
                    clientName: item.client_name,
                    clientTitle: item.client_position,
                    clientImage: item.client_image ? `${IMAGE_BASE_URL}/${item.client_image}` : "assets/img/team/11.jpg",
                    content: item.content
                }));

                setTestimonials(transformedTestimonials);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                setTestimonials([
                    {
                        id: 1,
                        clientName: "Aleesha Brown",
                        clientTitle: "Tech Engineer",
                        clientImage: "assets/img/team/11.jpg",
                        content: "Consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts."
                    },
                    {
                        id: 2,
                        clientName: "Kevin Martin",
                        clientTitle: "Product Manager",
                        clientImage: "assets/img/team/12.jpg",
                        content: "Regulations discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week."
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
            <div className="py-3 bg-dark text-light blurry-shape">
                <div className="container">
                    <div className="text-center py-3">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Duplicate items to fill the marquee seamlessly
    const marqueeItems = testimonials.length < 4
        ? [...testimonials, ...testimonials, ...testimonials, ...testimonials]
        : [...testimonials, ...testimonials];

    return (
        <div className="py-3 bg-dark text-light blurry-shape overflow-hidden">

            <style>{`
                /* Marquee container */
                .tst-marquee {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                }
                .tst-marquee-track {
                    display: flex;
                    gap: 24px;
                    width: max-content;
                    animation: tst-scroll 35s linear infinite;
                }
                .tst-marquee:hover .tst-marquee-track {
                    animation-play-state: paused;
                }
                @keyframes tst-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                /* Card */
                .tst-card {
                    width: 380px;
                    flex-shrink: 0;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 18px;
                    padding: 28px 26px 24px;
                    backdrop-filter: blur(12px);
                    transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
                    cursor: default;
                }
                .tst-card:hover {
                    border-color: rgba(102,126,234,0.3);
                    box-shadow: 0 12px 40px rgba(102,126,234,0.12);
                    transform: translateY(-4px);
                }

                /* Top row: quote + stars */
                .tst-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 16px;
                }
                .tst-quote-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .tst-quote-icon i {
                    font-size: 17px;
                    color: #fff;
                }
                .tst-stars {
                    display: flex;
                    gap: 2px;
                }
                .tst-stars i {
                    font-size: 13px;
                    color: #f59e0b;
                }

                /* Content */
                .tst-content {
                    font-size: 14px;
                    line-height: 1.65;
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 20px;
                    font-style: italic;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    min-height: 92px;
                }

                /* Divider */
                .tst-divider {
                    width: 36px;
                    height: 2px;
                    border-radius: 2px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    margin-bottom: 16px;
                }

                /* Author */
                .tst-author {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .tst-avatar {
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid rgba(102,126,234,0.35);
                    flex-shrink: 0;
                }
                .tst-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .tst-author-name {
                    font-size: 15px;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 1px;
                    line-height: 1.2;
                }
                .tst-author-title {
                    font-size: 12px;
                    color: rgba(255,255,255,0.4);
                    font-weight: 500;
                }

                /* Responsive */
                @media (max-width: 767px) {
                    .tst-card {
                        width: 300px;
                        padding: 22px 20px 20px;
                    }
                    .tst-content {
                        font-size: 13px;
                        min-height: 80px;
                    }
                    .tst-marquee-track {
                        animation-duration: 25s;
                    }
                }
            `}</style>

            {/* Heading */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4
                                className="sub-title"
                                data-aos="fade-up"
                                data-aos-duration="250"
                            >
                                Testimonials
                            </h4>
                            <h2
                                className="title split-text-right split-text-in-right"
                                data-aos="fade-up"
                                data-aos-duration="300"
                                data-aos-delay="80"
                            >
                                Client testimonials
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continuous Scrolling Marquee */}
            <div data-aos="fade-up" data-aos-duration="150" data-aos-delay="100">
                <div className="tst-marquee">
                    <div className="tst-marquee-track">
                        {marqueeItems.map((testimonial, index) => (
                            <div className="tst-card" key={`${testimonial.id}-${index}`}>
                                <div className="tst-card-top">
                                    <div className="tst-quote-icon">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                    <div className="tst-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <p className="tst-content">
                                    "{testimonial.content}"
                                </p>
                                <div className="tst-divider"></div>
                                <div className="tst-author">
                                    <div className="tst-avatar">
                                        <img src={testimonial.clientImage} alt={testimonial.clientName} />
                                    </div>
                                    <div>
                                        <div className="tst-author-name">{testimonial.clientName}</div>
                                        <div className="tst-author-title">{testimonial.clientTitle}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeTestimonials;
