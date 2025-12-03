import React from "react";

const DCFAQ = () => {
    const faqData = [
        {
            id: 1,
            question: "What is digital commerce?",
            answer:
                "Digital commerce refers to buying and selling goods or services through digital platforms such as online stores, mobile apps, social media, and voice-activated shopping. It focuses on creating seamless, engaging, and personalized customer experiences.",
            link: "/blog/the-ultimate-guide-to-digital-commerce-services-everything-you-need-to-know"
        },
        {
            id: 2,
            question: "What are digital commerce services?",
            answer:
                "Digital commerce services help businesses enhance their online presence and improve customer interactions. Key services include web and mobile app development, headless commerce integration, omnichannel solutions, payment processing, and customer experience design.",
            link: "/blog/the-ultimate-guide-to-digital-commerce-services-everything-you-need-to-know"
        },
        {
            id: 3,
            question: "What are digital commerce solutions?",
            answer:
                "Digital commerce solutions are comprehensive platforms and strategies that tie various services together. These include personalization, analytics, integrated supply chains, and AI-powered customer support to deliver seamless customer experiences.",
            link: "/blog/the-ultimate-guide-to-digital-commerce-services-everything-you-need-to-know"
        },
        {
            id: 4,
            question: "What type of businesses can benefit from digital commerce services?",
            answer:
                "Digital commerce services benefit retailers (B2C), manufacturers (B2B), service providers, startups, and enterprises with multichannel operations. These services improve digital presence, expand reach, and boost customer engagement.",
            link: "/blog/the-ultimate-guide-to-digital-commerce-services-everything-you-need-to-know"
        },
        {
            id: 5,
            question: "How do digital commerce solutions enhance customer engagement?",
            answer:
                "Digital commerce solutions enhance engagement through personalization, seamless journeys, real-time interactions, omnichannel connectivity, and smooth transactions—strengthening customer loyalty and trust.",
            link: "/blog/the-ultimate-guide-to-digital-commerce-services-everything-you-need-to-know"
        }
    ];

    return (
        <div>
            <div className="services-style-two-area pt-50 bg-dark blurry-shape-right-bottom">
                <div className="container">
                    <div
                        className="faq-style-one-area default-padding"
                        style={{ backgroundImage: "url(/assets/img/shape/7.png)" }}
                    >
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="faq-style-one-info">
                                    <h4 className="sub-title">FAQ</h4>
                                    <h2 className="title split-text-right split-text-in-right">
                                        Our strategic retail and CPG solutions
                                    </h2>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="accordion" id="dcFaqAccordion">

                                    {faqData.map((faq, index) => (
                                        <div
                                            className="accordion-item mb-3"
                                            key={faq.id}
                                            style={{ border: "none" }}
                                        >
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#faq-${faq.id}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>

                                            <div
                                                id={`faq-${faq.id}`}
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#dcFaqAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p className="text-black">{faq.answer}</p>
                                                    <p className="lead">
                                                        <a href={faq.link} target="_blank">Read more</a>
                                                    </p>
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
    );
};

export default DCFAQ;
