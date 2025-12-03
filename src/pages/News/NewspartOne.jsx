import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

// Lucide Icons
import { Calendar, User, Search, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";

const NewspartOne = () => {

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out",
            once: true,
        });
    }, []);

    return (
        <div>
            {/* Banner */}
            <div className="brand-style-two-area default-padding bg-theme text-light bg-cover"
                style={{ backgroundImage: "url(/assets/img/shape/banner-15.jpg)" }}>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center mb-0">

                                <h3 className="split-text-right split-text-in-right pt-5"
                                    data-aos="fade-up"
                                >
                                    HC IT Recognized as a Major Contender in Everest Group’s
                                    Application Transformation Services for AI Enablement PEAK Matrix® 2025
                                </h3>

                                <p data-aos="fade-up" data-aos-delay="150">
                                    Discover how HC IT empowers CFOs with automated, audit-ready finance operations ensuring accuracy, compliance, and control across accounts payable and reporting cycles.
                                </p>

                                <a className="btn mt-10 btn-style-one text-center"
                                    href="#"
                                    data-aos="zoom-in"
                                    data-aos-delay="250"
                                >
                                    Learn More
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="blog-area full-blog py-5">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">

                            {/* Blog Content */}
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">

                                <div className="blog-item-box">

                                    {/* Blog 1 */}
                                    <div
                                        className="item blogs"
                                        data-aos="zoom-in-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="thumb">
                                            <a href="#"><img src="/assets/img/blog/v1.jpg" alt="Thumb" /></a>
                                        </div>

                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <Calendar size={16} /> 12 August, 2025
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <User size={16} /> Admin
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h2>
                                                <a href="#">
                                                    Announcing if attachment resolution sentiments to constructions.
                                                </a>
                                            </h2>

                                            <p>
                                                Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite.
                                            </p>

                                            <a className="btn mt-10 btn-style-one" href="#">
                                                Learn More <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Blog 2 */}
                                    <div
                                        className="item blogs"
                                        data-aos="zoom-in-up"
                                        data-aos-delay="200"
                                    >
                                        <div className="thumb">
                                            <a href="#"><img src="/assets/img/blog/v2.jpg" alt="Thumb" /></a>
                                        </div>

                                        <div className="info">

                                            <div className="meta">
                                                <ul>
                                                    <li>
                                                        <a href="#"><Calendar size={16} /> 12 July, 2025</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><User size={16} /> Admin</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h2>
                                                <a href="#">
                                                    Minuter him own clothes but observe country at the maintaining.
                                                </a>
                                            </h2>

                                            <p>
                                                Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite.
                                            </p>

                                            <a className="btn mt-10 btn-style-one" href="#">
                                                Learn More <ArrowRight size={16} />
                                            </a>

                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Sidebar */}
                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">

                                <aside>

                                    {/* Search */}
                                    <div
                                        className="sidebar-item search mb-2"
                                        data-aos="fade-left"
                                        data-aos-delay="100"
                                    >
                                        <div className="sidebar-info">
                                            <form>
                                                <input type="text" placeholder="Enter Keyword"
                                                    className="form-control" />
                                                <button type="submit">
                                                    <Search size={18} />
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Recent Post */}
                                    <div
                                        className="sidebar-item recent-post mb-2"
                                        data-aos="fade-left"
                                        data-aos-delay="150"
                                    >
                                        <h4 className="title">Recent Post</h4>
                                        <ul>

                                            <li className="blogs">
                                                <div className="thumb">
                                                    <a href="#"><img src="/assets/img/gallery/6.jpg" alt="Thumb" /></a>
                                                </div>
                                                <div className="info">
                                                    <div className="meta-title">
                                                        <span className="post-date">12 Feb, 2025</span>
                                                    </div>
                                                    <a href="#">Commanded household smallness delivered.</a>
                                                </div>
                                            </li>

                                            <li className="blogs">
                                                <div className="thumb">
                                                    <a href="#"><img src="/assets/img/gallery/7.jpg" alt="Thumb" /></a>
                                                </div>
                                                <div className="info">
                                                    <div className="meta-title">
                                                        <span className="post-date">12 Feb, 2025</span>
                                                    </div>
                                                    <a href="#">Commanded household smallness delivered.</a>
                                                </div>
                                            </li>

                                            <li className="blogs">
                                                <div className="thumb">
                                                    <a href="#"><img src="/assets/img/gallery/8.jpg" alt="Thumb" /></a>
                                                </div>
                                                <div className="info">
                                                    <div className="meta-title">
                                                        <span className="post-date">12 Feb, 2025</span>
                                                    </div>
                                                    <a href="#">Commanded household smallness delivered.</a>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>

                                    {/* Categories */}
                                    <div
                                        className="sidebar-item category mb-2"
                                        data-aos="fade-left"
                                        data-aos-delay="200"
                                    >
                                        <h4 className="title">Category List</h4>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li><a href="#">National <span>69</span></a></li>
                                                <li><a href="#">National <span>25</span></a></li>
                                                <li><a href="#">Sports <span>18</span></a></li>
                                                <li><a href="#">Magazine <span>37</span></a></li>
                                                <li><a href="#">Health <span>12</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Archives */}
                                    <div
                                        className="sidebar-item archives mb-2"
                                        data-aos="fade-left"
                                        data-aos-delay="250"
                                    >
                                        <h4 className="title">Archives</h4>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li><a href="#">Aug 2025</a></li>
                                                <li><a href="#">Sept 2025</a></li>
                                                <li><a href="#">Nov 2025</a></li>
                                                <li><a href="#">Dec 2025</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Social Icons */}
                                    <div
                                        className="sidebar-item social-sidebar mb-2"
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                    >
                                        <h4 className="title">Follow Us</h4>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li className="facebook"><a href="#"><Facebook size={18} /></a></li>
                                                <li className="twitter"><a href="#"><Twitter size={18} /></a></li>
                                                <li className="linkedin"><a href="#"><Linkedin size={18} /></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div
                                        className="sidebar-item tags"
                                        data-aos="fade-up"
                                        data-aos-delay="350"
                                    >
                                        <h4 className="title">Tags</h4>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li><a href="#">Fashion</a></li>
                                                <li><a href="#">Education</a></li>
                                                <li><a href="#">Nation</a></li>
                                                <li><a href="#">Study</a></li>
                                                <li><a href="#">Health</a></li>
                                                <li><a href="#">Travel</a></li>
                                            </ul>
                                        </div>
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

export default NewspartOne;
