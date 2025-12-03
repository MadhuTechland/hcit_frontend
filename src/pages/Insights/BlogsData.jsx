import React, { useState, useEffect } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { blogService } from '../../services';

const BlogsData = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-out",
        });
    }, []);

    useEffect(() => {
        const fetchBlogsData = async () => {
            try {
                setLoading(true);

                // Fetch blogs, categories, and tags in parallel
                const [blogsResponse, categoriesResponse, tagsResponse] = await Promise.all([
                    blogService.getAll({
                        search: searchTerm || undefined,
                        category: selectedIndustries[0] || undefined,
                        tag: selectedTopics[0] || undefined,
                        per_page: 12,
                    }),
                    blogService.getCategories(),
                    blogService.getTags(),
                ]);

                setBlogs(blogsResponse.data || []);
                setCategories(categoriesResponse.data || []);
                setTags(tagsResponse.data || []);
                setError(null);
            } catch (err) {
                console.error('Error fetching blog data:', err);
                setError(err.message || 'Failed to load blogs');
                // Fallback to default data
                setBlogs([
                    {
                        id: 1,
                        featured_image: "/assets/img/blog/1.jpg",
                        category: { name: "Technology" },
                        published_at: "2025-12-06T00:00:00.000Z",
                        title: "Discovery incommode earnestly commanded if.",
                        slug: "discovery-incommode-earnestly-commanded",
                    },
                    {
                        id: 2,
                        featured_image: "/assets/img/blog/2.jpg",
                        category: { name: "Artificial" },
                        published_at: "2025-08-14T00:00:00.000Z",
                        title: "Expression acceptance regular imprudences particular.",
                        slug: "expression-acceptance-regular-imprudences",
                    },
                    {
                        id: 3,
                        featured_image: "/assets/img/blog/3.jpg",
                        category: { name: "Integration" },
                        published_at: "2025-07-12T00:00:00.000Z",
                        title: "Considered imprudence of technical friendship.",
                        slug: "considered-imprudence-technical-friendship",
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogsData();
    }, [searchTerm, selectedIndustries, selectedTopics]);

    const handleBoxClick = (blogSlug) => {
        navigate(`/insights/blogs/${blogSlug}`);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    };

    const handleIndustryChange = (industry) => {
        if (selectedIndustries.includes(industry)) {
            setSelectedIndustries(selectedIndustries.filter(item => item !== industry));
        } else {
            setSelectedIndustries([...selectedIndustries, industry]);
        }
    };

    const handleTopicChange = (topic) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(selectedTopics.filter(item => item !== topic));
        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
    };

    return (
        <div>
            <div className="services-details-area py-5">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">

                            {/* 🔍 Search Bar */}
                            <div className="col-12 mb-4" data-aos="fade-down">
                                <div className="search-bar d-flex align-items-center">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search blogs..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button className="btn btn-primary ms-2 d-flex align-items-center justify-content-center">
                                        <Search size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* 📰 Blog Cards Section */}
                            <div className="col-xl-8 col-lg-8 order-lg-last pl-35 pl-md-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {loading ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : error ? (
                                        <div className="alert alert-warning" role="alert">
                                            {error}
                                        </div>
                                    ) : blogs.length === 0 ? (
                                        <div className="alert alert-info" role="alert">
                                            No blogs found. Try adjusting your filters or search term.
                                        </div>
                                    ) : (
                                        <div className="row">
                                            {blogs.map((blog, index) => (
                                                <div
                                                    key={blog.id}
                                                    className="col-xl-4 col-lg-6 col-md-6 gap-2 mb-3"
                                                    data-aos="zoom-in"
                                                    data-aos-delay={index * 150}
                                                >
                                                    <div
                                                        className="blog-style-two fade-up-anim news-card"
                                                        onMouseEnter={() => setHoveredIndex(index)}
                                                        onMouseLeave={() => setHoveredIndex(null)}
                                                        onClick={() => handleBoxClick(blog.slug)}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        <div className="thumb mb-0">
                                                            <div className="image-container">
                                                                <img
                                                                    src={blog.featured_image || "/assets/img/blog/default.jpg"}
                                                                    alt={blog.title}
                                                                />
                                                                <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
                                                            </div>
                                                        </div>

                                                        <div className="info mt-2">
                                                            <ul className='d-flex align-items-center justify-content-between mb-1'>
                                                                <li className='text-xs'>{formatDate(blog.published_at)}</li>
                                                                <li className='text-xs text-red ps-3'>
                                                                    {blog.category?.name || 'Blog'}
                                                                </li>
                                                            </ul>

                                                            <h6 className="blog-title">
                                                                <a href="#">{blog.title}</a>
                                                            </h6>

                                                            {blog.excerpt && (
                                                                <p className="text-xs text-muted mt-1">
                                                                    {blog.excerpt.substring(0, 80)}...
                                                                </p>
                                                            )}

                                                            <a href="#" className="text-white d-flex align-items-center gap-1 mt-1 text-xs">
                                                                Read More <ArrowRight size={14} />
                                                            </a>
                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 📌 Sidebar Filters */}
                            <div
                                className="col-xl-4 col-lg-4 mt-md-120 mt-xs-50 services-sidebar"
                                data-aos="fade-left"
                            >
                                <div className="service-sidebar-items">

                                    {/* Categories Filter */}
                                    <div className="single-widget services-list-widget mb-2" data-aos="fade-left" data-aos-delay="50">
                                        <h4>Categories</h4>
                                        <div className="content">
                                            {categories.length > 0 ? (
                                                categories.map((category, index) => (
                                                    <div key={category.id} className="form-check mb-2 filter">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id={`category-${category.id}`}
                                                            checked={selectedIndustries.includes(category.slug)}
                                                            onChange={() => handleIndustryChange(category.slug)}
                                                        />
                                                        <label className="form-check-label" htmlFor={`category-${category.id}`}>
                                                            {category.name} {category.blogs_count > 0 && `(${category.blogs_count})`}
                                                        </label>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-muted text-sm">No categories available</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tags Filter */}
                                    <div className="single-widget services-list-widget mb-2" data-aos="fade-left" data-aos-delay="100">
                                        <h4>Tags</h4>
                                        <div className="content">
                                            {tags.length > 0 ? (
                                                tags.map((tag, index) => (
                                                    <div key={tag.id} className="form-check filter ">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id={`tag-${tag.id}`}
                                                            checked={selectedTopics.includes(tag.slug)}
                                                            onChange={() => handleTopicChange(tag.slug)}
                                                        />
                                                        <label className="form-check-label" htmlFor={`tag-${tag.id}`}>
                                                            {tag.name} {tag.blogs_count > 0 && `(${tag.blogs_count})`}
                                                        </label>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-muted text-sm">No tags available</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Quick Contact */}
                                    <div
                                        className="single-widget bg-dark quick-contact-widget text-light"
                                        style={{ backgroundImage: 'url(/assets/img/shape/banner-3.jpg)' }}
                                        data-aos="zoom-in-up"
                                        data-aos-delay="150"
                                    >
                                        <div className="content">
                                            <h3>Need Help?</h3>
                                            <p>
                                                Speak with a human to filling out a form? Call our office and we will
                                                connect you with a team member who can help.
                                            </p>
                                            <h4><a href="mailto:info@digital.com">info@digital.com</a></h4>
                                            <a className="btn mt-10 btn btn-style-one" href="contact-us.html">
                                                Contact Us <ArrowRight size={14} />
                                            </a>
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

export default BlogsData;
