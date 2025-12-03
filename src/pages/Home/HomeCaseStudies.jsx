
// import React, { useState } from 'react';

// const HomeCaseStudies = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const caseStudies = [
//         {
//             id: 1,
//             image: "assets/img/blog/1.jpg",
//             category: "Technology",
//             date: "06 December, 2025",
//             title: "Discovery incommode earnestly commanded if."
//         },
//         {
//             id: 2,
//             image: "assets/img/blog/2.jpg",
//             category: "Artificial",
//             date: "14 August, 2025",
//             title: "Expression acceptance regular imprudences particular."
//         },
//         {
//             id: 3,
//             image: "assets/img/blog/3.jpg",
//             category: "Integration",
//             date: "12 July, 2025",
//             title: "Considered imprudence of technical friendship."
//         }
//     ];

//     return (
//         <div>
//             <div className="services-style-two-area  pt-50 bg-gray blurry-shape-right-bottom">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 <h2 className="title split-text-right split-text-in-right">Case studies</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className=" case-studies">
//                         <div className="blog-area blog-grid">
//                             <div className="container">
//                                 <div className="blog-item-box">
//                                     <div className="row">
//                                         {caseStudies.map((study, index) => (
//                                             <div key={study.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
//                                                 <div
//                                                     className="blog-style-two fade-up-anim case-study-card"
//                                                     onMouseEnter={() => setHoveredIndex(index)}
//                                                     onMouseLeave={() => setHoveredIndex(null)}
//                                                 >
//                                                     <div className="thumb mb-0">
//                                                         <a href="#">
//                                                             <div className="image-container">
//                                                                 <img src={study.image} alt="Thumb" />
//                                                                 <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
//                                                             </div>
//                                                         </a>
//                                                     </div>
//                                                     <div className="info">
//                                                         <div className="blog-one-meta">
//                                                             <ul>
//                                                                 <li >
//                                                                     <a href="#" className='text-white'>{study.category}</a>
//                                                                 </li>
//                                                                 <li>
//                                                                     {study.date}
//                                                                 </li>
//                                                             </ul>
//                                                         </div>
//                                                         <h4 >
//                                                             <a href="#">{study.title}</a>
//                                                         </h4>
//                                                         <a href="#" className="text-black">
//                                                             Read More <i className="fas fa-long-arrow-right"></i>
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomeCaseStudies



import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import caseStudyService from '../../services/caseStudyService';

const HomeCaseStudies = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });

        // Fetch case studies from API
        const fetchCaseStudies = async () => {
            try {
                const response = await caseStudyService.getAll();
                const caseStudyData = response.data || [];

                // Transform API data to match component structure
                const transformedCaseStudies = caseStudyData.slice(0, 3).map(item => ({
                    id: item.id,
                    image: item.image ? `http://localhost:8000/storage/${item.image}` : "assets/img/blog/1.jpg",
                    category: item.category || "Technology",
                    date: new Date(item.published_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }),
                    title: item.title
                }));

                setCaseStudies(transformedCaseStudies);
            } catch (error) {
                console.error('Error fetching case studies:', error);
                // Fallback to default data if API fails
                setCaseStudies([
                    {
                        id: 1,
                        image: "assets/img/blog/1.jpg",
                        category: "Technology",
                        date: "06 December, 2025",
                        title: "Discovery incommode earnestly commanded if."
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchCaseStudies();
    }, []);

    if (loading) {
        return (
            <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        {/* Heading Fade-up Animation */}
                        <div className="site-heading text-center">
                            <h2
                                className="title split-text-right split-text-in-right"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                Case studies
                            </h2>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="blog-area blog-grid">
                    <div className="container">
                        <div className="blog-item-box">
                            <div className="row">

                                {caseStudies.map((study, index) => (
                                    <div
                                        key={study.id}
                                        className="col-xl-4 col-lg-6 col-md-6 mb-50"
                                        data-aos="fade-up"
                                        data-aos-duration="900"
                                        data-aos-delay={index * 200}  // Stagger effect
                                    >
                                        <div
                                            className="blog-style-two fade-up-anim case-study-card"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <div className="thumb mb-0">
                                                <a href="#">
                                                    <div className="image-container">
                                                        <img src={study.image} alt="Thumb" />
                                                        <div className={`splash-overlay ${hoveredIndex === index ? 'active' : ''}`}></div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="p-3" style={{ backgroundColor: "#fff" }}>
                                                <div className="blog-one-meta">
                                                    <ul>
                                                        <li>
                                                            <a href="#" className="text-white">{study.category}</a>
                                                        </li>
                                                        <li>{study.date}</li>
                                                    </ul>
                                                </div>

                                                <h4>
                                                    <a href="#">{study.title}</a>
                                                </h4>

                                                {/* <a href="#" className="text-black">
                                                    Read More <i className="fas fa-long-arrow-right"></i>
                                                </a> */}

                                                <Link to="/insights/blogs" className="text-xs">
                                                    Read More <i className="fas fa-long-arrow-right"></i>
                                                </Link>
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
    )
}

export default HomeCaseStudies;
