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
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });

        // Fetch news from API
        const fetchNews = async () => {
            try {
                const response = await newsService.getAll();
                const newsData = response.data || [];
                const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || 'https://floralwhite-kudu-744792.hostingersite.com//storage';
                // Transform API data to match component structure
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
                // Fallback to default data if API fails
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
            <div className="pricing-style-two-area py-5 bg-dark text-light blurry-shape">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pricing-style-two-area py-5 bg-dark text-light blurry-shape">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4
                                className="sub-title"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                News
                            </h4>

                            <h2
                                className="title split-text-right split-text-in-right"
                                data-aos="fade-up"
                                data-aos-duration="900"
                                data-aos-delay="200"
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
                            className="col-xl-4 col-lg-6 col-md-6 mb-50"
                            data-aos="fade-up"
                            data-aos-duration="900"
                            data-aos-delay={index * 200}
                        >
                            <div
                                className="blog-style-two fade-up-anim news-card"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="thumb mb-0">
                                    <a href="#">
                                        <div className="relative w-full h-[260px] overflow-hidden rounded-xl">
                                            <img
                                            src={news.image}
                                            alt="Thumb"
                                            className="w-full h-[250px] object-cover object-center transition-transform duration-500 hover:scale-105"
                                            />

                                            {/* Splash overlay */}
                                            <div
                                            className={`absolute inset-0 bg-black/20 transition-opacity duration-300 
                                            ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                            />
                                        </div>
                                    </a>
                                </div>

                                <div className="info">
                                    <div className="blog-one-meta">
                                        <ul>
                                            <li>
                                                <a href="#" style={{ color: "#fff" }}>{news.category}</a>
                                            </li>
                                            <li>{news.date}</li>
                                        </ul>
                                    </div>

                                    <h4 className="blog-title">
                                        <a href="#">{news.title}</a>
                                    </h4>

                                    <Link to="/news/transformation" className="text-white text-xs">
                                        Read More <i className="fas fa-long-arrow-right"></i>
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
