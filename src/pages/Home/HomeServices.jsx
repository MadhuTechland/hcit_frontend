

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serviceService } from '../../services';

const HomeServices = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'https://floralwhite-kudu-744792.hostingersite.com/uploads';
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const response = await serviceService.getAll();
                setServices(response.data || []);
                setError(null);
            } catch (err) {
                console.error('Error fetching services:', err);
                setError(err.message || 'Failed to load services');
                // Fallback to default services if API fails
                setServices([
                    {
                        id: 1,
                        icon: "assets/img/icon/5.png",
                        title: "Data",
                        short_description: "Revitalize your enterprise and spur sustainable growth with advanced data modernization techniques.",
                        slug: "data-services",
                    },
                    {
                        id: 2,
                        icon: "assets/img/icon/7.png",
                        title: "Digital",
                        short_description: "Empower your business with modern, scalable, and adaptive digital capabilities that are also financially predictable.",
                        slug: "digital-services",
                    },
                    {
                        id: 3,
                        icon: "assets/img/icon/6.png",
                        title: "Cloud",
                        short_description: "Merging the power of top global hyper scalers with unmatched expertise, we deliver tailor-made Cloud strategies.",
                        slug: "cloud-services",
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="services-style-two-area py-3 bg-dark blurry-shape-right-bottom">

            {/* Heading Section */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <div className="site-heading text-center">
                            <h4
                                className="sub-title"
                                data-aos="fade-up"
                                data-aos-duration="400"
                            >
                                What we do
                            </h4>

                            <h2
                                className="title split-text-right split-text-in-right"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                            >
                                Our Services
                            </h2>
                        </div>

                    </div>
                </div>
            </div>

            {/* Services Cards */}
            <div className="container">
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="alert alert-warning text-center" role="alert">
                        {error}
                    </div>
                ) : (
                    <div className="row">
                        {services.slice(0, 6).map((service, index) => (
                            <div key={service.id} className="col-lg-4 col-md-6 mb-3">

                                <div
                                    className="services-style-two-item service-card h-100"
                                    style={{
                                        backgroundImage: service.image
                                            ? `url(${IMAGE_BASE_URL}/${service.image})`
                                            : "url('/assets/img/shape/banner-6.jpg')"
                                    }}

                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration={600}
                                    data-aos-delay={index * 100}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="splash-overlay"></div>

                                    <div className="content-wrapper d-flex flex-column h-100">
                                        <div className="top-info flex-grow-1">
                                            {service.icon && (
                                                <img
                                                    src={service.icon.startsWith('http') ? service.icon : `assets/img/icon/${service.icon}.png`}
                                                    alt={`${service.title} Icon`}
                                                />
                                            )}

                                            <h3 className="text-white">{service.title}</h3>
                                            <p className="text-white">{service.short_description || service.description}</p>
                                        </div>

                                        <Link
                                            to={`/services/${service.slug}`}
                                            className="text-white mt-auto"
                                        >
                                            Explore More <i className="fas fa-long-arrow-right"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeServices;
