import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import newsService from '../../services/newsService';

const HomeLatestNews = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 450,
            easing: "ease-out-cubic",
            once: false,
        });

        const fetchNews = async () => {
            try {
                const response = await newsService.getAll();
                const newsData = response.data || [];
                const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'https://floralwhite-kudu-744792.hostingersite.com//storage';

                const transformedNews = newsData.slice(0, 3).map(item => ({
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

                setNewsItems(transformedNews);
            } catch (error) {
                console.error('Error fetching news:', error);
                setNewsItems([
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

        fetchNews();
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

    return (
        <div className="py-3 bg-dark text-light blurry-shape">

            <style>{`
                .news-card-modern {
                    position: relative;
                    border-radius: 14px;
                    overflow: hidden;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(10px);
                    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
                }
                .news-card-modern:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 16px 48px rgba(0,0,0,0.3);
                    border-color: rgba(102,126,234,0.3);
                }
                .news-card-img {
                    position: relative;
                    height: 200px;
                    overflow: hidden;
                }
                .news-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .news-card-modern:hover .news-card-img img {
                    transform: scale(1.08);
                }
                .news-card-img::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 60%;
                    background: linear-gradient(transparent, rgba(0,0,0,0.6));
                    pointer-events: none;
                }
                .news-card-category {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    z-index: 2;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #fff;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                }
                .news-card-body {
                    padding: 18px;
                }
                .news-card-date {
                    font-size: 12px;
                    color: rgba(255,255,255,0.5);
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .news-card-title {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.4;
                    color: #fff;
                    margin-bottom: 14px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .news-card-link {
                    font-size: 13px;
                    font-weight: 600;
                    color: #667eea;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: gap 0.3s ease, color 0.3s ease;
                }
                .news-card-modern:hover .news-card-link {
                    gap: 10px;
                    color: #a78bfa;
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4
                                className="sub-title"
                                data-aos="fade-up"
                                data-aos-duration="400"
                            >
                                News
                            </h4>
                            <h2
                                className="title split-text-right split-text-in-right"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                            >
                                Latest news from the world of HC IT
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {newsItems.map((news, index) => (
                        <div
                            key={news.id}
                            className="col-xl-4 col-lg-6 col-md-6 mb-3"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay={index * 100}
                        >
                            <div
                                className="news-card-modern"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="news-card-img">
                                    <span className="news-card-category">{news.category}</span>
                                    <img src={news.image} alt={news.title} />
                                </div>

                                <div className="news-card-body">
                                    <div className="news-card-date">
                                        <i className="far fa-calendar-alt"></i>
                                        {news.date}
                                    </div>
                                    <h4 className="news-card-title">{news.title}</h4>
                                    <Link to="/news/transformation" className="news-card-link">
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HomeLatestNews;
