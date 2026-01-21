import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutService from '../../services/aboutService';
import HomeContact from '../Home/HomeContact';

const AboutDetail = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const { slug } = useParams();
    const [aboutPage, setAboutPage] = useState(null);
    const [leadershipMembers, setLeadershipMembers] = useState([]);
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });

        // Fetch about page details by slug
        const fetchAboutPage = async () => {
            try {
                setLoading(true);
                const response = await aboutService.getPageBySlug(slug);
                setAboutPage(response);
                setError(null);

                // Fetch leadership members if it's the leadership page
                if (slug === 'our-leadership') {
                    const membersResponse = await aboutService.getAllLeadershipMembers();
                    setLeadershipMembers(membersResponse);
                }

                // Fetch partners if it's the partners page
                if (slug === 'partners') {
                    const partnersResponse = await aboutService.getAllPartners();
                    setPartners(partnersResponse);
                }
            } catch (error) {
                console.error('Error fetching about page:', error);
                setError('Page not found');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchAboutPage();
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

    if (error || !aboutPage) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <h2>Page Not Found</h2>
                    <p>The page you're looking for doesn't exist.</p>
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
                        <li className='disable'> / About HC IT /</li>
                        <li>&nbsp; {aboutPage.title}</li>
                    </ul>
                </div>
            </div>

            {/* Page Header */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <h1 className="mb-4">{aboutPage.title}</h1>
                        {aboutPage.description && (
                            <p className="lead mb-4">{aboutPage.description}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            {aboutPage.content && (
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up">
                            <div dangerouslySetInnerHTML={{ __html: aboutPage.content }} />
                        </div>
                    </div>
                </div>
            )}

            {/* Mission, Vision, Values (if available in meta_data) */}
            {aboutPage.meta_data && aboutPage.meta_data.mission && (
                <div className="container pb-5">
                    <div className="row">
                        {aboutPage.meta_data.mission && (
                            <div className="col-lg-4 mb-4" data-aos="fade-up">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title">Our Mission</h3>
                                        <p className="card-text">{aboutPage.meta_data.mission}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {aboutPage.meta_data.vision && (
                            <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title">Our Vision</h3>
                                        <p className="card-text">{aboutPage.meta_data.vision}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {aboutPage.meta_data.values && (
                            <div className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h3 className="card-title">Our Values</h3>
                                        {typeof aboutPage.meta_data.values === 'object' && (
                                            <ul className="list-unstyled">
                                                {Object.entries(aboutPage.meta_data.values).map(([key, value], index) => (
                                                    <li key={index} className="mb-2">
                                                        <strong>{key}:</strong> {value}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Leadership Members Section */}
            {slug === 'our-leadership' && leadershipMembers.length > 0 && (
                <div className="container pb-5">
                    <h2 className="text-center mb-5" data-aos="fade-up">Our Leadership Team</h2>
                    <div className="row">
                        {leadershipMembers.map((member, index) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={member.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="card h-100">
                                    {member.image && (
                                        <img
                                            src={`${IMAGE_BASE_URL}/${member.image}`}
                                            className="card-img-top"
                                            alt={member.name}
                                        />
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{member.name}</h5>
                                        <p className="card-text text-muted">{member.title}</p>
                                        {member.department && (
                                            <p className="card-text"><small>{member.department}</small></p>
                                        )}
                                        {member.bio && (
                                            <p className="card-text">{member.bio}</p>
                                        )}
                                        <div className="social-links mt-3">
                                            {member.linkedin_url && (
                                                <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="me-2">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            )}
                                            {member.twitter_url && (
                                                <a href={member.twitter_url} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Partners Section */}
            {slug === 'partners' && partners.length > 0 && (
                <div className="container pb-5">
                    <h2 className="text-center mb-5" data-aos="fade-up">Our Partners</h2>
                    <div className="row">
                        {partners.map((partner, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={partner.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="card h-100">
                                    {partner.logo && (
                                        <div className="card-img-top p-4 text-center">
                                            <img
                                                src={`${IMAGE_BASE_URL}/${partner.logo}`}
                                                alt={partner.name}
                                                style={{ maxHeight: '100px', objectFit: 'contain' }}
                                            />
                                        </div>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{partner.name}</h5>
                                        {partner.partner_type && (
                                            <span className="badge bg-primary mb-2">{partner.partner_type}</span>
                                        )}
                                        {partner.description && (
                                            <p className="card-text">{partner.description}</p>
                                        )}
                                        {partner.website_url && (
                                            <a href={partner.website_url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                                                Visit Website
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Timeline for History page */}
            {slug === 'our-history' && aboutPage.meta_data && aboutPage.meta_data.milestones && (
                <div className="container pb-5">
                    <h2 className="text-center mb-5" data-aos="fade-up">Our Journey</h2>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="timeline">
                                {Object.entries(aboutPage.meta_data.milestones).map(([year, milestone], index) => (
                                    <div className="timeline-item mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h4 className="text-primary">{year}</h4>
                                            </div>
                                            <div className="col-md-9">
                                                <p>{milestone}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Benefits for Careers page */}
            {slug === 'careers' && aboutPage.meta_data && aboutPage.meta_data.benefits && (
                <div className="container pb-5">
                    <h2 className="text-center mb-5" data-aos="fade-up">Why Join Us?</h2>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <ul className="list-group">
                                {aboutPage.meta_data.benefits.map((benefit, index) => (
                                    <li className="list-group-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <HomeContact />
        </div>
    );
};

export default AboutDetail;
