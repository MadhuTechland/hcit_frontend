import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import serviceService from '../../services/serviceService';
import HomeContact from '../Home/HomeContact';
import DynamicSection from '../Industry/DynamicSection';

const ServiceDetail = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });

        // Fetch service details by slug
        const fetchService = async () => {
            try {
                setLoading(true);
                const response = await serviceService.getBySlug(slug);
                setService(response.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching service:', error);
                setError('Service not found');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchService();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !service) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <h2>Service Not Found</h2>
                    <p>The service you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        );
    }

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
                        <li className='disable'> / Services /</li>
                        <li>&nbsp; {service.breadcrumb_title || service.title}</li>
                    </ul>
                </div>
            </div>

            {/* Hero Section with Image and Content */}
            <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">

                {/* Left Image */}
                {service.detail_image && (
                    <div
                        className="newsletter-thumb"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <img
                            src={`${IMAGE_BASE_URL}/${service.detail_image}`}
                            alt={service.title}
                        />
                    </div>
                )}

                {/* Right Content - Full width when no image */}
                <div className="container">
                    <div className="row">
                        <div
                            className={service.detail_image ? "col-lg-6 offset-lg-6" : "col-lg-8 offset-lg-2"}
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="newsletter-style-two">
                                {service.subtitle && (
                                    <h4 className="sub-title" data-aos="zoom-in">
                                        {service.subtitle}
                                    </h4>
                                )}

                                {service.detail_title && (
                                    <h3
                                        className="split-text-right split-text-in-right"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        {service.detail_title}
                                    </h3>
                                )}

                                {service.detail_description && (
                                    <p
                                        className="fade-up-anim"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        {service.detail_description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Dynamic Sections from Admin Panel */}
            {service.sections && service.sections.length > 0 && (
                <>
                    {service.sections.map((section, index) => (
                        <DynamicSection key={section.id} section={section} />
                    ))}
                </>
            )}

            {/* Contact Section */}
            <HomeContact />

        </div>
    );
};

export default ServiceDetail;
