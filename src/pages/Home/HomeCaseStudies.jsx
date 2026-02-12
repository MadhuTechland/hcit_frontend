
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import caseStudyService from '../../services/caseStudyService';

const HomeCaseStudies = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 450,
            easing: "ease-out-cubic",
            once: false,
        });

        const fetchCaseStudies = async () => {
            try {
                const response = await caseStudyService.getAll();
                const caseStudyData = response.data || [];

                const transformedCaseStudies = caseStudyData.slice(0, 3).map(item => ({
                    id: item.id,
                    image: item.image ? `${IMAGE_BASE_URL}/${item.image}` : "assets/img/blog/1.jpg",
                    category: item.category || "Technology",
                    date: new Date(item.published_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }),
                    title: item.title
                }));

                setCaseStudies(transformedCaseStudies);
            } catch (error) {
                console.error('Error fetching case studies:', error);
                setCaseStudies([
                    {
                        id: 1,
                        image: "assets/img/blog/1.jpg",
                        category: "Technology",
                        date: "06 December, 2025",
                        title: "Discovery incommode earnestly commanded if."
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchCaseStudies();
    }, []);

    if (loading) {
        return (
            <div className="py-3 bg-gray">
                <div className="container">
                    <div className="text-center py-3">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-3" style={{ background: 'linear-gradient(135deg, #f8f9fc 0%, #eef1f6 100%)' }}>

            <style>{`
                .cs-card {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #fff;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                }
                .cs-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
                }
                .cs-card-img {
                    position: relative;
                    height: 220px;
                    overflow: hidden;
                }
                .cs-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .cs-card:hover .cs-card-img img {
                    transform: scale(1.08);
                }
                .cs-card-img::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 50%;
                    background: linear-gradient(transparent, rgba(0,0,0,0.4));
                    pointer-events: none;
                }
                .cs-card-badge {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    z-index: 2;
                    padding: 4px 14px;
                    border-radius: 20px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #fff;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    backdrop-filter: blur(4px);
                }
                .cs-card-body {
                    padding: 20px;
                }
                .cs-card-date {
                    font-size: 12px;
                    color: #8b95a5;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .cs-card-title {
                    font-size: 17px;
                    font-weight: 700;
                    line-height: 1.4;
                    color: #1a1a2e;
                    margin-bottom: 14px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .cs-card-link {
                    font-size: 13px;
                    font-weight: 600;
                    color: #667eea;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: gap 0.3s ease;
                }
                .cs-card:hover .cs-card-link {
                    gap: 10px;
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h2
                                className="title split-text-right split-text-in-right"
                                data-aos="fade-up"
                                data-aos-duration="500"
                            >
                                Case Studies
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.id}
                            className="col-xl-4 col-lg-6 col-md-6 mb-4"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay={index * 100}
                        >
                            <div
                                className="cs-card"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="cs-card-img">
                                    <span className="cs-card-badge">{study.category}</span>
                                    <img src={study.image} alt={study.title} />
                                </div>

                                <div className="cs-card-body">
                                    <div className="cs-card-date">
                                        <i className="far fa-calendar-alt"></i>
                                        {study.date}
                                    </div>
                                    <h4 className="cs-card-title">{study.title}</h4>
                                    <Link to="/insights/blogs" className="cs-card-link">
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default HomeCaseStudies;
