import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const DigitalCommerceProducts = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out",
        });
    }, []);

    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600&auto=format&fit=crop&q=60",
            title: "Transform your direct-to-consumer (D2C) business with Catapult",
            description: "A comprehensive multi-tier commerce implementation plan that enables rapid commerce adoption. It leverages Microsoft or Salesforce technologies and Visionet's accelerators to create an intelligent data-driven consumer journey.",
            link: "#"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1634638026221-4c1c4cf9f881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwcGx5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D",
            title: "Build a resilient supply chain with PartnerLinQ",
            description: "Leverage Headless Commerce on the precipice of increasing customer interactions using PartnerLinQ. This robust EDI platform enables order requisitions, shipment tenders, payment fulfillment, inventory, and stock management.",
            link: "#"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
            title: "Gain control of all aspects of your fashion brand",
            description: "A robust ERP system that streamlines eCommerce adoption with over 100+ preconfigured industry processes. It fosters collaboration within factories, suppliers, and designers to ensure faster time-to-market.",
            link: "#"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZ2l0YWwlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
            title: "Enable seamless digital commerce modernization",
            description: "Seamlessly adopt a modernized digital commerce approach by migrating from Dynamics AX 2012 to Dynamics 365 in less than 90 days, all without disrupting your existing ERP workloads.",
            link: "#"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
            title: "Unlock real-time interactive shopping",
            description: "Retain your brand experience fully through personalized shopping in the D2C domain. Live Commerce enables seamless impulse buying that can increase conversion rates through high-speed checkout.",
            link: "#"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600&auto=format&fit=crop&q=60",
            title: "Digital commerce services & Dynamics 365",
            description: "An intelligent, infinitely adaptable solution that empowers centralized management and heightens visibility, cultivating enhanced loyalty and elevated customer services.",
            link: "#"
        }
    ];

    return (
        <div>
            <div className="pricing-style-two-area py-5 bg-dark text-light blurry-shape">
                <div className="container">

                    {/* Heading */}
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div
                                className="site-heading text-center"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <h4 className="sub-title">B2B and B2C Commerce</h4>
                                <h2 className="title split-text-right split-text-in-right">
                                    Modernize your B2B and B2C commerce ecosystem
                                </h2>
                                <p data-aos="fade-up" data-aos-delay="200">
                                    Reimagine commerce with a transformational approach that leverages
                                    advanced eCommerce technologies, modernizing and re-platforming your
                                    sales channels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="container mt-4">
                    <div className="pricing-style-four-items">
                        <div className="blog-area blog-grid">
                            <div className="container">
                                <div className="blog-item-box">
                                    <div className="row">

                                        {products.map((product, index) => (
                                            <div
                                                key={product.id}
                                                className="col-xl-4 col-lg-6 col-md-6 mb-50"
                                                data-aos="fade-up"
                                                data-aos-delay={150 + index * 100}
                                            >
                                                <div
                                                    className="blog-style-two fade-up-anim news-card"
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    style={{ backgroundColor: '#f7f7fa', border: 'none' }}
                                                >
                                                    <div className="thumb mb-0">
                                                        <a href={product.link}>
                                                            <div className="image-container">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.title}
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '200px',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                                <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div
                                                        className="info"
                                                        style={{ padding: '20px', backgroundColor: '#FFFFFF' }}
                                                    >
                                                        <h4
                                                            className="blog-title"
                                                            style={{
                                                                color: 'rgb(226, 104, 86)',
                                                                fontSize: '17px',
                                                                marginBottom: '10px'
                                                            }}
                                                        >
                                                            <a href={product.link}>{product.title}</a>
                                                        </h4>

                                                        <p
                                                            className="vsi-desc-bgw-mp"
                                                            style={{ fontSize: '15px', marginBottom: '15px' }}
                                                        >
                                                            {product.description}
                                                        </p>

                                                        <a
                                                            href={product.link}
                                                            style={{
                                                                color: 'rgb(255, 41, 128)',
                                                                fontSize: '15px'
                                                            }}
                                                        >
                                                            Read more <i className="fas fa-long-arrow-right"></i>
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
                </div>

            </div>
        </div>
    );
};

export default DigitalCommerceProducts;
