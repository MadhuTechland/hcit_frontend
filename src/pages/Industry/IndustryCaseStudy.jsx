import React, { useState, useEffect } from 'react';
import caseStudyService from '../../services/caseStudyService';

// Industry case studies component - fetches from API
const IndustryCaseStudy = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch case studies from API
        const fetchCaseStudies = async () => {
            try {
                const response = await caseStudyService.getAll();
                const caseStudyData = response.data || [];

                // Transform API data to match component structure
                const transformedCaseStudies = caseStudyData.slice(0, 5).map(item => ({
                    id: item.id,
                    imageUrl: item.image ? `${IMAGE_BASE_URL}/${item.image}` : "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
                    title: item.title,
                    date: new Date(item.published_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }),
                    author: item.author || "Admin",
                    description: item.description || item.excerpt || "",
                    link: "#"
                }));

                setCaseStudies(transformedCaseStudies);
            } catch (error) {
                console.error('Error fetching case studies:', error);
                // Fallback to empty array if API fails
                setCaseStudies([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCaseStudies();
    }, []);

    if (loading) {
        return (
            <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading case studies...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (caseStudies.length === 0) {
        return null; // Don't show section if no case studies
    }

    return (
        <div>
            <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="title split-text-right split-text-in-right">See how we are transforming global retail and consumer goods brands</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="case-studies">
                        <div className=" blog-grid">
                            <div className=" full-blog ">
                                <style jsx>{`
                                    .event-container {
                                        position: relative;
                                        overflow: hidden;
                                    }
                                    .event-overlay {
                                        position: absolute;
                                        bottom: 0;
                                        left: 0;
                                        right: 0;
                                        background: transparent;
                                        color: white;
                                        padding: 15px;
                                        transform: translateY(100%);
                                        transition: transform 0.5s ease;
                                    }
                                    .event-container:hover .event-overlay {
                                        transform: translateY(0);
                                    }
                                    .event-image {
                                        width: 100%;
                                        height: auto;
                                        display: block;
                                    }
                                    .first-event .info {
                                        padding: 20px;
                                        background: #f8f9fa;
                                    }
                                    .event-title {
                                        position: absolute;
                                        bottom: 20px;
                                        left: 15px;
                                        right: 15px;
                                        color: white;
                                        z-index: 1;
                                        transition: opacity 0.3s ease;
                                    }
                                    .event-container:hover .event-title {
                                        opacity: 0;
                                    }
                                    .event-overlay h2,
                                    .event-overlay p,
                                    .event-overlay ul li a {
                                        color: white;
                                    }
                                    .event-overlay .btn {
                                        background: transparent;
                                        border: 1px solid white;
                                        color: white;
                                    }
                                    .event-overlay .btn:hover {
                                        background: white;
                                        color: white;
                                    }
                                `}</style>

                                <div className="container">
                                    <div className="blog-items">
                                        <div className="row ">
                                            {/* First event - always visible */}
                                            {caseStudies[0] && (
                                                <div className="col-lg-4 p-3">
                                                    <div className=" first-event">
                                                        <div className="item">
                                                            <div className="thumb">
                                                                <a href={caseStudies[0].link}>
                                                                    <img
                                                                        src={caseStudies[0].imageUrl}
                                                                        alt="Event 1"
                                                                        className="event-image rounded-sm"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="info ">
                                                                <div className="meta pb-3">
                                                                    <ul className='d-flex align-items-center '>
                                                                        <li>
                                                                            <a href="#"><i className="far fa-calendar-alt"></i> {caseStudies[0].date}</a>
                                                                        </li>
                                                                        <li className='ms-3'>
                                                                            <a href="#"><i className="far fa-user-circle"></i> {caseStudies[0].author}</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <h5>{caseStudies[0].title}</h5>
                                                                <p>{caseStudies[0].description}</p>
                                                                <a className="btn mt-10 btn-style-one" href={caseStudies[0].link}>Learn More </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Second, third, fourth and fifth events - hover effect */}
                                            <div className='col-lg-8 p-3'>
                                                <div className='row'>
                                                    {/* Second event */}
                                                    {caseStudies[1] && (
                                                        <div className='col-lg-6 mb-3'>
                                                            <div className="item">
                                                                <div className="thumb event-container">
                                                                    <a href={caseStudies[1].link}>
                                                                        <img
                                                                            src={caseStudies[1].imageUrl}
                                                                            alt="Event 2"
                                                                            className="event-image"
                                                                        />
                                                                    </a>
                                                                    <div className="event-title">
                                                                        <h5><a href={caseStudies[1].link} style={{ color: 'white' }}>{caseStudies[1].title}</a></h5>
                                                                    </div>
                                                                    <div className="event-overlay">
                                                                        <div className=" meta pb-3">
                                                                            <ul className='d-flex align-items-center '>
                                                                                <li>
                                                                                    <a href="#"><i className="far fa-calendar-alt"></i> {caseStudies[1].date}</a>
                                                                                </li>
                                                                                <li className='ms-3'>
                                                                                    <a href="#"><i className="far fa-user-circle"></i> {caseStudies[1].author}</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className='mt-3'>
                                                                            <h5 style={{ color: "#fff" }}>{caseStudies[1].title}</h5>
                                                                            <p>{caseStudies[1].description}</p>
                                                                            <a className="text-white" href={caseStudies[1].link}>Explore More <i className="fas fa-arrow-right"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Third event */}
                                                    {caseStudies[2] && (
                                                        <div className='col-lg-6 mb-3'>
                                                            <div className="item">
                                                                <div className="thumb event-container">
                                                                    <a href={caseStudies[2].link}>
                                                                        <img
                                                                            src={caseStudies[2].imageUrl}
                                                                            alt="Event 3"
                                                                            className="event-image"
                                                                        />
                                                                    </a>
                                                                    <div className="event-title">
                                                                        <h5><a href={caseStudies[2].link} style={{ color: 'white' }}>{caseStudies[2].title}</a></h5>
                                                                    </div>
                                                                    <div className="event-overlay">
                                                                        <div className=" meta pb-3">
                                                                            <ul className='d-flex align-items-center '>
                                                                                <li>
                                                                                    <a href="#"><i className="far fa-calendar-alt"></i> {caseStudies[2].date}</a>
                                                                                </li>
                                                                                <li className='ms-3'>
                                                                                    <a href="#"><i className="far fa-user-circle"></i> {caseStudies[2].author}</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <h5 style={{ color: "#fff" }}>{caseStudies[2].title}</h5>
                                                                        <p>{caseStudies[2].description}</p>
                                                                        <a className="text-white" href={caseStudies[2].link}>Explore More <i className="fas fa-arrow-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Fourth event */}
                                                    {caseStudies[3] && (
                                                        <div className='col-lg-6 mb-3'>
                                                            <div className="item">
                                                                <div className="thumb event-container">
                                                                    <a href={caseStudies[3].link}>
                                                                        <img
                                                                            src={caseStudies[3].imageUrl}
                                                                            alt="Event 4"
                                                                            className="event-image"
                                                                        />
                                                                    </a>
                                                                    <div className="event-title">
                                                                        <h5><a href={caseStudies[3].link} style={{ color: 'white' }}>{caseStudies[3].title}</a></h5>
                                                                    </div>
                                                                    <div className="event-overlay">
                                                                        <div className=" meta pb-3">
                                                                            <ul className='d-flex align-items-center '>
                                                                                <li>
                                                                                    <a href="#"><i className="far fa-calendar-alt"></i> {caseStudies[3].date}</a>
                                                                                </li>
                                                                                <li className='ms-3'>
                                                                                    <a href="#"><i className="far fa-user-circle"></i> {caseStudies[3].author}</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <h5 style={{ color: "#fff" }}>{caseStudies[3].title}</h5>
                                                                        <p>{caseStudies[3].description}</p>
                                                                        <a className="text-white" href={caseStudies[3].link}>Explore More <i className="fas fa-arrow-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Fifth event */}
                                                    {caseStudies[4] && (
                                                        <div className='col-lg-6 mb-3'>
                                                            <div className="item">
                                                                <div className="thumb event-container">
                                                                    <a href={caseStudies[4].link}>
                                                                        <img
                                                                            src={caseStudies[4].imageUrl}
                                                                            alt="Event 5"
                                                                            className="event-image"
                                                                        />
                                                                    </a>
                                                                    <div className="event-title">
                                                                        <h5><a href={caseStudies[4].link} style={{ color: 'white' }}>{caseStudies[4].title}</a></h5>
                                                                    </div>
                                                                    <div className="event-overlay">
                                                                        <div className=" meta pb-3">
                                                                            <ul className='d-flex align-items-center '>
                                                                                <li>
                                                                                    <a href="#"><i className="far fa-calendar-alt"></i> {caseStudies[4].date}</a>
                                                                                </li>
                                                                                <li className='ms-3'>
                                                                                    <a href="#"><i className="far fa-user-circle"></i> {caseStudies[4].author}</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <h5 style={{ color: "#fff" }}>{caseStudies[4].title}</h5>
                                                                        <p>{caseStudies[4].description}</p>
                                                                        <a className="text-white" href={caseStudies[4].link}>Explore More <i className="fas fa-arrow-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
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
    )
}

export default IndustryCaseStudy