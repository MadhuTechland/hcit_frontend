import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { blogService } from '../../services';

const BlogsData = () => {
    const IMAGE_BASE_URL = "https://floralwhite-kudu-744792.hostingersite.com";
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
            <style>{`
                .blog-card-modern {
                    position: relative;
                    border-radius: 14px;
                    overflow: hidden;
                    background: #1a1a2e;
                    border: 1px solid rgba(255,255,255,0.08);
                    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
                    cursor: pointer;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .blog-card-modern:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 16px 48px rgba(0,0,0,0.35);
                    border-color: rgba(102,126,234,0.3);
                }
                .blog-card-img {
                    position: relative;
                    height: 210px;
                    overflow: hidden;
                }
                .blog-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .blog-card-modern:hover .blog-card-img img {
                    transform: scale(1.08);
                }
                .blog-card-img::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 50%;
                    background: linear-gradient(transparent, rgba(0,0,0,0.5));
                    pointer-events: none;
                }
                .blog-card-badge {
                    position: absolute;
                    top: 12px;
                    left: 12px;
                    z-index: 2;
                    padding: 4px 14px;
                    border-radius: 20px;
                    font-size: 10px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #fff;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                }
                .blog-card-body {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
                .blog-card-date {
                    font-size: 12px;
                    color: rgba(255,255,255,0.45);
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .blog-card-title {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.45;
                    color: #fff;
                    margin-bottom: 10px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transition: color 0.3s ease;
                }
                .blog-card-modern:hover .blog-card-title {
                    color: #a78bfa;
                }
                .blog-card-excerpt {
                    font-size: 13px;
                    line-height: 1.6;
                    color: rgba(255,255,255,0.4);
                    margin-bottom: 16px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    flex: 1;
                }
                .blog-card-link {
                    font-size: 13px;
                    font-weight: 600;
                    color: #667eea;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: gap 0.3s ease, color 0.3s ease;
                    margin-top: auto;
                }
                .blog-card-modern:hover .blog-card-link {
                    gap: 10px;
                    color: #a78bfa;
                }
                .blog-search-input {
                    background: #1a1a2e;
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 12px;
                    color: #fff;
                    padding: 12px 18px;
                    font-size: 14px;
                    transition: border-color 0.3s ease, background 0.3s ease;
                }
                .blog-search-input:focus {
                    background: #1f1f35;
                    border-color: rgba(102,126,234,0.5);
                    color: #fff;
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
                }
                .blog-search-input::placeholder {
                    color: rgba(255,255,255,0.4);
                }
                .blog-search-btn {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border: none;
                    border-radius: 12px;
                    padding: 12px 18px;
                    transition: opacity 0.3s ease, transform 0.2s ease;
                }
                .blog-search-btn:hover {
                    opacity: 0.9;
                    transform: scale(1.02);
                }
            `}</style>

            <div className="services-details-area py-5">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">

                            {/* Search Bar */}
                            <div className="col-12 mb-4" data-aos="fade-down">
                                <div className="d-flex align-items-center gap-2">
                                    <input
                                        type="text"
                                        className="form-control blog-search-input"
                                        placeholder="Search blogs..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button className="btn blog-search-btn d-flex align-items-center justify-content-center text-white">
                                        <Search size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Blog Cards Section */}
                            <div className="col-xl-8 col-lg-8 order-lg-last pl-35 pl-md-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {loading ? (
                                        <div className="text-center py-5">
                                            <div className="spinner-border text-light" role="status">
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
                                                    className="col-xl-6 col-lg-6 col-md-6 mb-4"
                                                    data-aos="fade-up"
                                                    data-aos-delay={index * 100}
                                                >
                                                    <div
                                                        className="blog-card-modern"
                                                        onClick={() => handleBoxClick(blog.slug)}
                                                    >
                                                        <div className="blog-card-img">
                                                            <span className="blog-card-badge">
                                                                {blog.category?.name || 'Blog'}
                                                            </span>
                                                            <img
                                                                src={`${IMAGE_BASE_URL}${blog.featured_image || "assets/img/blog/default.jpg"}`}
                                                                alt={blog.title}
                                                            />
                                                        </div>

                                                        <div className="blog-card-body">
                                                            <div className="blog-card-date">
                                                                <Calendar size={13} />
                                                                {formatDate(blog.published_at)}
                                                            </div>

                                                            <h4 className="blog-card-title">
                                                                {blog.title}
                                                            </h4>

                                                            {blog.excerpt && (
                                                                <p className="blog-card-excerpt">
                                                                    {blog.excerpt}
                                                                </p>
                                                            )}

                                                            <span className="blog-card-link">
                                                                Read More <ArrowRight size={14} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar Filters */}
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
