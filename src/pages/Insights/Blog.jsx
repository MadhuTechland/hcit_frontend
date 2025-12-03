import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className="brand-style-two-area default-padding bg-theme text-light bg-cover" style={{ backgroundImage: "url(/assets/img/shape/banner-15.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center mb-0">
                                <h3 className=" split-text-right split-text-in-right pt-5">
                                    Smarter finance operations in 2025: A CFO’s guide to compliance and automation

                                </h3>
                                <p>Discover how Visionet empowers CFOs with automated, audit-ready finance operations ensuring accuracy, compliance, and control across accounts payable and reporting cycles.</p>
                                <a class="btn mt-10 btn-style-one text-center" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;