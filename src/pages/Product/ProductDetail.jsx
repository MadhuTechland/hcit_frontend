import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productService from '../../services/productService';
import HomeContact from '../Home/HomeContact';
import DynamicSection from '../Industry/DynamicSection';

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });

        // Fetch product details by slug
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await productService.getBySlug(slug);
                setProduct(response.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Product not found');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchProduct();
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

    if (error || !product) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <h2>Product Not Found</h2>
                    <p>The product you're looking for doesn't exist.</p>
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
                        <li className='disable'> / Products /</li>
                        <li>&nbsp; {product.breadcrumb_title || product.title}</li>
                    </ul>
                </div>
            </div>

            {/* Hero Section with Image and Content */}
            <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">

                {/* Left Image */}
                {product.detail_image && (
                    <div
                        className="newsletter-thumb"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <img
                            src={`${IMAGE_BASE_URL}/${product.detail_image}`}
                            alt={product.title}
                        />
                    </div>
                )}

                {/* Right Content */}
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 offset-lg-6"
                            data-aos="fade-left"
                            data-aos-delay="300"
                        >
                            <div className="newsletter-style-two">
                                {product.subtitle && (
                                    <h4 className="sub-title" data-aos="zoom-in">
                                        {product.subtitle}
                                    </h4>
                                )}

                                {product.detail_title && (
                                    <h3
                                        className="split-text-right split-text-in-right"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        {product.detail_title}
                                    </h3>
                                )}

                                {product.detail_description && (
                                    <p
                                        className="fade-up-anim"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        {product.detail_description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Dynamic Sections from Admin Panel */}
            {product.sections && product.sections.length > 0 && (
                <>
                    {product.sections.map((section, index) => (
                        <DynamicSection key={section.id} section={section} />
                    ))}
                </>
            )}

            {/* Contact Section */}
            <HomeContact />

        </div>
    );
};

export default ProductDetail;
