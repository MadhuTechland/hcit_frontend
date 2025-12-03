import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import industryService from '../../services/industryService';
import IndustryCaseStudy from './IndustryCaseStudy';
import HomeContact from '../Home/HomeContact';
import DynamicSection from './DynamicSection';

const IndustryDetail = () => {
    const { slug } = useParams();
    const [industry, setIndustry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });

        // Fetch industry details by slug
        const fetchIndustry = async () => {
            try {
                setLoading(true);
                const response = await industryService.getBySlug(slug);
                setIndustry(response.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching industry:', error);
                setError('Industry not found');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchIndustry();
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

    if (error || !industry) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <h2>Industry Not Found</h2>
                    <p>The industry you're looking for doesn't exist.</p>
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
                        <li className='disable'> / Industries /</li>
                        <li>&nbsp; {industry.breadcrumb_title || industry.title}</li>
                    </ul>
                </div>
            </div>

            {/* Hero Section with Image and Content */}
            <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">

                {/* Left Image */}
                {industry.detail_image && (
                    <div
                        className="newsletter-thumb"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <img
                            src={`http://localhost:8000/storage/${industry.detail_image}`}
                            alt={industry.title}
                        />
                    </div>
                )}

                {/* Right Content */}
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 offset-lg-6"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="newsletter-style-two">
                                {industry.subtitle && (
                                    <h4 className="sub-title" data-aos="zoom-in">
                                        {industry.subtitle}
                                    </h4>
                                )}

                                {industry.detail_title && (
                                    <h3
                                        className="split-text-right split-text-in-right"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        {industry.detail_title}
                                    </h3>
                                )}

                                {industry.detail_description && (
                                    <p
                                        className="fade-up-anim"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        {industry.detail_description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Dynamic Sections from Admin Panel */}
            {industry.sections && industry.sections.length > 0 && (
                <>
                    {industry.sections.map((section, index) => (
                        <DynamicSection key={section.id} section={section} />
                    ))}
                </>
            )}

            {/* Case Studies Section */}
            <IndustryCaseStudy />

            {/* Contact Section */}
            <HomeContact />

        </div>
    );
};

export default IndustryDetail;
