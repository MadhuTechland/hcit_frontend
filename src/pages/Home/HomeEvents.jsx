import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import eventService from '../../services/eventService';

const HomeEvents = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 450,
            easing: "ease-out-cubic",
            once: false,
        });

        const fetchEvents = async () => {
            try {
                const response = await eventService.getAll();
                const eventData = response.data || [];

                const transformedEvents = eventData.slice(0, 3).map(item => ({
                    id: item.id,
                    imageUrl: item.image ? `${IMAGE_BASE_URL}/${item.image}` : "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
                    title: item.title,
                    date: new Date(item.event_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }),
                    author: item.author || "Admin",
                    description: item.description,
                    link: "#"
                }));

                setEvents(transformedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents([
                    {
                        id: 1,
                        imageUrl: "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
                        title: "Announcing if attachment resolution sentiments to constructions.",
                        date: "12 August, 2025",
                        author: "Admin",
                        description: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite.",
                        link: "#"
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className="py-3" style={{ background: 'linear-gradient(135deg, #f8f9fc 0%, #eef1f6 100%)' }}>
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

    // Featured event (first one) and side events
    const featuredEvent = events[0];
    const sideEvents = events.slice(1);

    return (
        <div className="py-3" style={{ background: 'linear-gradient(135deg, #f8f9fc 0%, #eef1f6 100%)' }}>

            <style>{`
                .evt-featured {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    height: 100%;
                    min-height: 420px;
                    cursor: pointer;
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                }
                .evt-featured:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 48px rgba(0,0,0,0.15);
                }
                .evt-featured img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: transform 0.6s ease;
                }
                .evt-featured:hover img {
                    transform: scale(1.05);
                }
                .evt-featured-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%);
                    z-index: 1;
                }
                .evt-featured-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 28px;
                    z-index: 2;
                    color: #fff;
                }
                .evt-featured-badge {
                    display: inline-block;
                    padding: 4px 14px;
                    border-radius: 20px;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: #fff;
                    margin-bottom: 12px;
                }
                .evt-featured-title {
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 1.3;
                    margin-bottom: 10px;
                    color: #fff;
                }
                .evt-featured-meta {
                    font-size: 13px;
                    color: rgba(255,255,255,0.7);
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 14px;
                }
                .evt-featured-meta i {
                    margin-right: 4px;
                }
                .evt-featured-desc {
                    font-size: 14px;
                    line-height: 1.5;
                    color: rgba(255,255,255,0.8);
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 16px;
                }
                .evt-featured-link {
                    font-size: 13px;
                    font-weight: 600;
                    color: #a78bfa;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: gap 0.3s ease;
                }
                .evt-featured:hover .evt-featured-link {
                    gap: 10px;
                }

                .evt-side-card {
                    position: relative;
                    border-radius: 14px;
                    overflow: hidden;
                    background: #fff;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                    display: flex;
                    flex-direction: row;
                    height: calc(50% - 8px);
                    min-height: 196px;
                }
                .evt-side-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 36px rgba(0,0,0,0.12);
                }
                .evt-side-img {
                    width: 40%;
                    min-width: 160px;
                    position: relative;
                    overflow: hidden;
                }
                .evt-side-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .evt-side-card:hover .evt-side-img img {
                    transform: scale(1.08);
                }
                .evt-side-body {
                    flex: 1;
                    padding: 18px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .evt-side-date {
                    font-size: 11px;
                    color: #8b95a5;
                    margin-bottom: 6px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .evt-side-title {
                    font-size: 15px;
                    font-weight: 700;
                    line-height: 1.4;
                    color: #1a1a2e;
                    margin-bottom: 8px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .evt-side-desc {
                    font-size: 12px;
                    line-height: 1.4;
                    color: #6b7280;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
                .evt-side-link {
                    font-size: 12px;
                    font-weight: 600;
                    color: #667eea;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    transition: gap 0.3s ease;
                }
                .evt-side-card:hover .evt-side-link {
                    gap: 9px;
                }

                @media (max-width: 991px) {
                    .evt-featured {
                        min-height: 320px;
                        margin-bottom: 16px;
                    }
                    .evt-side-card {
                        height: auto;
                        min-height: auto;
                    }
                }
                @media (max-width: 575px) {
                    .evt-side-card {
                        flex-direction: column;
                    }
                    .evt-side-img {
                        width: 100%;
                        min-width: auto;
                        height: 160px;
                    }
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
                                Join HC IT at events across the globe
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    {/* Featured Event (Left) */}
                    {featuredEvent && (
                        <div
                            className="col-lg-6 mb-3"
                            data-aos="fade-right"
                            data-aos-duration="500"
                        >
                            <div
                                className="evt-featured"
                                onMouseEnter={() => setHoveredIndex(0)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img src={featuredEvent.imageUrl} alt={featuredEvent.title} />
                                <div className="evt-featured-overlay"></div>
                                <div className="evt-featured-content">
                                    <span className="evt-featured-badge">Featured Event</span>
                                    <h3 className="evt-featured-title">{featuredEvent.title}</h3>
                                    <div className="evt-featured-meta">
                                        <span><i className="far fa-calendar-alt"></i> {featuredEvent.date}</span>
                                        <span><i className="far fa-user-circle"></i> {featuredEvent.author}</span>
                                    </div>
                                    <p className="evt-featured-desc">{featuredEvent.description}</p>
                                    <a href={featuredEvent.link} className="evt-featured-link">
                                        Learn More <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Side Events (Right) */}
                    <div className="col-lg-6 mb-3">
                        <div className="d-flex flex-column gap-3 h-200">
                            {sideEvents.map((event, index) => (
                                <div
                                    key={event.id}
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-delay={(index + 1) * 100}
                                    style={{ flex: 1 }}
                                >
                                    <div
                                        className="evt-side-card"
                                        onMouseEnter={() => setHoveredIndex(index + 1)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="evt-side-img">
                                            <img src={event.imageUrl} alt={event.title} />
                                        </div>
                                        <div className="evt-side-body">
                                            <div className="evt-side-date">
                                                <i className="far fa-calendar-alt"></i>
                                                {event.date}
                                            </div>
                                            <h4 className="evt-side-title">{event.title}</h4>
                                            <p className="evt-side-desc">{event.description}</p>
                                            <a href={event.link} className="evt-side-link">
                                                Explore More <i className="fas fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HomeEvents;
