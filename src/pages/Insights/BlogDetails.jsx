
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { blogService } from '../../services';

const BlogDetails = () => {
    const IMAGE_BASE_URL = "https://floralwhite-kudu-744792.hostingersite.com";
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out",
            once: true,
        });
    }, []);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                setLoading(true);

                // Fetch blog details and recent blogs in parallel
                const [blogResponse, recentResponse] = await Promise.all([
                    blogService.getBySlug(slug),
                    blogService.getAll({ per_page: 3 }),
                ]);

                setBlog(blogResponse.data);
                setRecentBlogs(recentResponse.data || []);
                setError(null);
            } catch (err) {
                console.error('Error fetching blog details:', err);
                setError(err.message || 'Failed to load blog details');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlogDetails();
        }
    }, [slug]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
    };

    return (
        <div>

            {/* Banner */}
            <div
                className="brand-style-two-area default-padding bg-theme text-light bg-cover"
                style={{
                    backgroundImage: blog?.featured_image
                        ? `url(${blog.featured_image})`
                        : "url(/assets/img/shape/banner-15.jpg)"
                }}
                data-aos="fade-zoom-in"
                data-aos-offset="0"
                data-aos-delay="100"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">

                            <div
                                className="site-heading text-center mb-0"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
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
                                ) : blog ? (
                                    <>
                                        <h3 className="split-text-right split-text-in-right pt-5">
                                            {blog.title}
                                        </h3>

                                        {blog.excerpt && (
                                            <p data-aos="fade-up" data-aos-delay="300">
                                                {blog.excerpt}
                                            </p>
                                        )}

                                        <div className="blog-meta mt-3" data-aos="fade-up" data-aos-delay="350">
                                            <span className="me-3">
                                                <i className="far fa-calendar-alt me-2"></i>
                                                {formatDate(blog.published_at)}
                                            </span>
                                            {blog.author_name && (
                                                <span className="me-3">
                                                    <i className="far fa-user-circle me-2"></i>
                                                    {blog.author_name}
                                                </span>
                                            )}
                                            {blog.category && (
                                                <span>
                                                    <i className="far fa-folder me-2"></i>
                                                    {blog.category.name}
                                                </span>
                                            )}
                                        </div>
                                    </>
                                ) : null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Area */}
            <div className="blog-area full-blog py-5">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">

                            {/* Blog Section */}
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">

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
                                    ) : blog ? (
                                        <div
                                            className="item blogs"
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                        >
                                            {blog.featured_image && (
                                                <div className="thumb mb-4">
                                                    <img src={`${IMAGE_BASE_URL}${blog.featured_image}`} alt={blog.title} />
                                                </div>
                                            )}
                                            <div className="info">
                                                <div className="meta mb-3">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="far fa-calendar-alt"></i> {formatDate(blog.published_at)}
                                                            </a>
                                                        </li>
                                                        {blog.author_name && (
                                                            <li>
                                                                <a href="#">
                                                                    <i className="far fa-user-circle"></i> {blog.author_name}
                                                                </a>
                                                            </li>
                                                        )}
                                                        {blog.category && (
                                                            <li>
                                                                <a href="#">
                                                                    <i className="far fa-folder"></i> {blog.category.name}
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>

                                                <h2 className="mb-4">
                                                    {blog.title}
                                                </h2>

                                                <div
                                                    className="blog-content-html"
                                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                                />

                                                {blog.tags && blog.tags.length > 0 && (
                                                    <div className="tags mt-4">
                                                        <h5>Tags:</h5>
                                                        <div className="d-flex flex-wrap gap-2">
                                                            {blog.tags.map((tag) => (
                                                                <span key={tag.id} className="badge bg-secondary">
                                                                    {tag.name}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="alert alert-info" role="alert">
                                            Blog post not found.
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* Sidebar */}
                            <div
                                className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <aside>

                                    {/* Search */}
                                    <div className="sidebar-item search mb-2" data-aos="fade-left" data-aos-delay="350">
                                        <div className="sidebar-info">
                                            <form>
                                                <input type="text" placeholder="Enter Keyword" name="text" className="form-control" />
                                                <button type="submit"><i className="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Recent Posts */}
                                    <div className="sidebar-item recent-post mb-2" data-aos="fade-left" data-aos-delay="400">
                                        <h4>Recent Posts</h4>
                                        {recentBlogs.length > 0 ? (
                                            <ul>
                                                {recentBlogs.map((recentBlog) => (
                                                    <li key={recentBlog.id} className='blogs'>
                                                        <div className="thumb">
                                                            <Link to={`/insights/blogs/${recentBlog.slug}`}>
                                                                <img
                                                                    src={`${IMAGE_BASE_URL}${blog.featured_image||  "/assets/img/blog/default.jpg"}`}
                                                                    alt={recentBlog.title}
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="info">
                                                            <span className="post-date">{formatDate(recentBlog.published_at)}</span>
                                                            <Link to={`/insights/blogs/${recentBlog.slug}`} className='text-sm'>
                                                                {recentBlog.title}
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-muted">No recent posts available.</p>
                                        )}
                                    </div>

                                    {/* Category */}
                                    <div className="sidebar-item category mb-2" data-aos="fade-left" data-aos-delay="450">
                                        <h4 className="title">Category List</h4>
                                        <ul>
                                            <li><a href="#">national <span>69</span></a></li>
                                            <li><a href="#">national <span>25</span></a></li>
                                            <li><a href="#">sports <span>18</span></a></li>
                                            <li><a href="#">megazine <span>37</span></a></li>
                                            <li><a href="#">health <span>12</span></a></li>
                                        </ul>
                                    </div>

                                    {/* Archives */}
                                    <div className="sidebar-item archives mb-2" data-aos="fade-left" data-aos-delay="500">
                                        <h4 className="title">Archives</h4>
                                        <ul>
                                            <li><a href="#">Aug 2025</a></li>
                                            <li><a href="#">Sept 2025</a></li>
                                            <li><a href="#">Nov 2025</a></li>
                                            <li><a href="#">Dec 2025</a></li>
                                        </ul>
                                    </div>

                                    {/* Social */}
                                    <div className="sidebar-item social-sidebar mb-2" data-aos="fade-left" data-aos-delay="550">
                                        <h4 className="title">Follow Us</h4>
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>

                                    {/* Tags */}
                                    <div className="sidebar-item tags" data-aos="fade-left" data-aos-delay="600">
                                        <h4 className="title">Tags</h4>
                                        <ul>
                                            <li><a href="#">Fashion</a></li>
                                            <li><a href="#">Education</a></li>
                                            <li><a href="#">Nation</a></li>
                                            <li><a href="#">Study</a></li>
                                            <li><a href="#">Health</a></li>
                                            <li><a href="#">Travel</a></li>
                                        </ul>
                                    </div>

                                </aside>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;
