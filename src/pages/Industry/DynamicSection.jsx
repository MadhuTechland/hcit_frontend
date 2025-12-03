import React from 'react';
import AOS from 'aos';

// Dynamic section component that renders based on section_type
const DynamicSection = ({ section }) => {
    const { section_type, title, subtitle, description, content, image, background_image, additional_data } = section;

    // Base URL for images
    const getImageUrl = (imagePath) => {
        return imagePath ? `http://localhost:8000/storage/${imagePath}` : null;
    };

    // Render based on section type
    const renderSection = () => {
        switch (section_type) {
            case 'overview':
                return (
                    <div className="about-area default-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                {image && (
                                    <div className="col-lg-6" data-aos="fade-right">
                                        <div className="thumb">
                                            <img src={getImageUrl(image)} alt={title} />
                                        </div>
                                    </div>
                                )}
                                <div className={image ? "col-lg-6" : "col-lg-12"} data-aos="fade-left">
                                    {subtitle && <h4 className="sub-title">{subtitle}</h4>}
                                    {title && <h2>{title}</h2>}
                                    {description && <p>{description}</p>}
                                    {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'podcast':
            case 'fashion_retail':
            case 'sub_industries':
            case 'expertise':
            case 'solutions':
            case 'core_offering':
            case 'leadership_pulse':
                return (
                    <div className="services-area default-padding bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center" data-aos="fade-up">
                                    {subtitle && <h4 className="sub-title">{subtitle}</h4>}
                                    {title && <h2>{title}</h2>}
                                    {description && <p>{description}</p>}
                                </div>
                            </div>

                            {image && (
                                <div className="row mt-4">
                                    <div className="col-lg-12" data-aos="zoom-in">
                                        <img src={getImageUrl(image)} alt={title} className="img-fluid rounded" />
                                    </div>
                                </div>
                            )}

                            {content && (
                                <div className="row mt-4">
                                    <div className="col-lg-12" data-aos="fade-up">
                                        <div dangerouslySetInnerHTML={{ __html: content }} />
                                    </div>
                                </div>
                            )}

                            {/* Render additional data if available */}
                            {additional_data && renderAdditionalData(additional_data)}
                        </div>
                    </div>
                );

            default:
                // Default generic section
                return (
                    <div className="default-section-area default-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {subtitle && <h4 className="sub-title">{subtitle}</h4>}
                                    {title && <h2>{title}</h2>}
                                    {description && <p>{description}</p>}
                                    {image && (
                                        <img src={getImageUrl(image)} alt={title} className="img-fluid rounded my-3" />
                                    )}
                                    {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    // Render additional data (can be customized based on your needs)
    const renderAdditionalData = (data) => {
        if (!data || typeof data !== 'object') return null;

        // Example: If additional_data contains items array
        if (data.items && Array.isArray(data.items)) {
            return (
                <div className="row mt-4">
                    {data.items.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="card h-100">
                                {item.image && (
                                    <img src={getImageUrl(item.image)} className="card-img-top" alt={item.title} />
                                )}
                                <div className="card-body">
                                    {item.title && <h5 className="card-title">{item.title}</h5>}
                                    {item.description && <p className="card-text">{item.description}</p>}
                                    {item.link && (
                                        <a href={item.link} className="btn btn-primary">Learn More</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        // Example: If additional_data contains stats
        if (data.stats && Array.isArray(data.stats)) {
            return (
                <div className="row mt-4">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="stat-card p-4">
                                <h2 className="text-primary">{stat.value}</h2>
                                <p>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return renderSection();
};

export default DynamicSection;
