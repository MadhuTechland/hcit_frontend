

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Lucide Icons
import { Lightbulb, Image as ImageIcon, Video } from "lucide-react";

const CPGSolutions = () => {

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-out",
        });
    }, []);

    return (
        <div>
            <div className="services-style-two-area pt-50 bg-dark blurry-shape-right-bottom">

                <div className="container">
                    <div className="faq-style-one-area default-padding" style={{ backgroundImage: "url(/assets/img/shape/7.png)" }}>
                        <div className="container">
                            <div className="row">

                                {/* LEFT SIDE TEXT */}
                                <div className="col-xl-5 col-lg-6">
                                    <div className="faq-style-one-info">
                                        <h4 className="sub-title" data-aos="fade-down">
                                            Question & Answer
                                        </h4>

                                        <h2 className="title split-text-right split-text-in-right"
                                            data-aos="fade-up"
                                            data-aos-delay="150"
                                        >
                                            Our strategic retail and CPG solutions
                                        </h2>
                                    </div>
                                </div>

                                {/* RIGHT SIDE ACCORDION */}
                                <div className="col-xl-6 offset-xl-1 col-lg-6">
                                    <div
                                        className="accordion-style-one-items fade-up-anim"
                                        data-aos="zoom-in-up"
                                        data-aos-delay="200"
                                    >
                                        <div className="accordion" id="faqAccordion">

                                            {/* Accordion Item 1 */}
                                            <div className="accordion-style-one-item" data-aos="fade-up" data-aos-delay="100">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button
                                                        className="accordion-button d-flex align-items-center gap-2"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne"
                                                    >
                                                        <Lightbulb size={20} />
                                                        What is Artificial Intelligence?
                                                    </button>
                                                </h2>

                                                <div
                                                    id="collapseOne"
                                                    className="accordion-collapse collapse show"
                                                    aria-labelledby="headingOne"
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Accordion Item 2 */}
                                            <div className="accordion-style-one-item" data-aos="fade-up" data-aos-delay="200">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button
                                                        className="accordion-button collapsed d-flex align-items-center gap-2"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo"
                                                    >
                                                        <ImageIcon size={20} />
                                                        What It Takes to Create an Image?
                                                    </button>
                                                </h2>

                                                <div
                                                    id="collapseTwo"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo"
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Accordion Item 3 */}
                                            <div className="accordion-style-one-item" data-aos="fade-up" data-aos-delay="300">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button
                                                        className="accordion-button collapsed d-flex align-items-center gap-2"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree"
                                                    >
                                                        <Video size={20} />
                                                        How does AI Convert text to video?
                                                    </button>
                                                </h2>

                                                <div
                                                    id="collapseThree"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree"
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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

export default CPGSolutions;
