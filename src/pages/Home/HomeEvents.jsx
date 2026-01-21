// import React, { useState } from 'react';

// const HomeEvents = () => {
//     const events = [
//         {
//             id: 1,
//             imageUrl: "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
//             title: "Announcing if attachment resolution sentiments to constructions.",
//             date: "12 August, 2025",
//             author: "Admin",
//             description: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
//             link: "#"
//         },
//         {
//             id: 2,
//             imageUrl: "https://www.visionet.com/sites/default/files/2025-09/ALTA-One-Event%20Homepage.webp?fid=18056",
//             title: "Minuter him own clothes but observe country at the maintaining.",
//             date: "12 July, 2025",
//             author: "Admin",
//             description: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
//             link: "#"
//         },
//         {
//             id: 3,
//             imageUrl: "http://visionet.com/sites/default/files/2025-09/PPC-Hero-Banner%20Homepage.webp?fid=18051",
//             title: "Overcame breeding point concerns has terminate the hole family.",
//             date: "12 August, 2025",
//             author: "Admin",
//             description: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
//             link: "#"
//         }
//     ];

//     return (
//         <div>
//             <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 offset-lg-2">
//                             <div className="site-heading text-center">
//                                 <h2 className="title split-text-right split-text-in-right">Join HC IT at events across the globe</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="case-studies">
//                         <div className=" blog-grid">
//                             <div className=" full-blog ">
//                                 <style jsx>{`
//                                     .event-container {
//                                         position: relative;
//                                         overflow: hidden;
//                                     }
//                                     .event-overlay {
//                                         position: absolute;
//                                         bottom: 0;
//                                         left: 0;
//                                         right: 0;
//                                         background: transparent;
//                                         color: white;
//                                         padding: 15px;
//                                         transform: translateY(100%);
//                                         transition: transform 0.5s ease;
//                                     }
//                                     .event-container:hover .event-overlay {
//                                         transform: translateY(0);
//                                     }
//                                     .event-image {
//                                         width: 100%;
//                                         height: auto;
//                                         display: block;
//                                     }
//                                     .first-event .info {
//                                         padding: 20px;
//                                         background: #f8f9fa;
//                                     }
//                                     .event-title {
//                                         position: absolute;
//                                         bottom: 20px;
//                                         left: 15px;
//                                         right: 15px;
//                                         color: white;
//                                         z-index: 1;
//                                         transition: opacity 0.3s ease;
//                                     }
//                                     .event-container:hover .event-title {
//                                         opacity: 0;
//                                     }
//                                     .event-overlay h2,
//                                     .event-overlay p,
//                                     .event-overlay ul li a {
//                                         color: white;
//                                     }
//                                     .event-overlay .btn {
//                                         background: transparent;
//                                         border: 1px solid white;
//                                         color: white;
//                                     }
//                                     .event-overlay .btn:hover {
//                                         background: white;
//                                         color: white;
//                                     }
//                                 `}</style>

//                                 <div className="container">
//                                     <div className="blog-items">
//                                         <div className="row ">
//                                             {/* First event - always visible */}
//                                             <div className="col-lg-6 p-3">
//                                                 <div className=" first-event">
//                                                     <div className="item">
//                                                         <div className="thumb">
//                                                             <a href={events[0].link}>
//                                                                 <img
//                                                                     src={events[0].imageUrl}
//                                                                     alt="Event 1"
//                                                                     className="event-image rounded-sm"
//                                                                 />
//                                                             </a>
//                                                         </div>
//                                                         <div className="info ">
//                                                             <div className="meta pb-3">
//                                                                 <ul className='d-flex align-items-center '>
//                                                                     <li>
//                                                                         <a href="#"><i className="far fa-calendar-alt"></i> {events[0].date}</a>
//                                                                     </li>
//                                                                     <li className='ms-3'>
//                                                                         <a href="#"><i className="far fa-user-circle"></i> {events[0].author}</a>
//                                                                     </li>
//                                                                 </ul>
//                                                             </div>
//                                                             <h5>{events[0].title}</h5>
//                                                             <p>{events[0].description}</p>
//                                                             <a className="btn mt-10 btn-style-one" href={events[0].link}>Learn More <i className="fas fa-arrow-right"></i></a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             {/* Second and third events - hover effect */}
//                                             <div className='col-lg-6 p-3'>
//                                                 <div className='row'>
//                                                     {/* Second event */}
//                                                     <div className='col-lg-12 mb-3'>
//                                                         <div className="item">
//                                                             <div className="thumb event-container">
//                                                                 <a href={events[1].link}>
//                                                                     <img
//                                                                         src={events[1].imageUrl}
//                                                                         alt="Event 2"
//                                                                         className="event-image"
//                                                                     />
//                                                                 </a>
//                                                                 <div className="event-title">
//                                                                     <h5><a href={events[1].link} style={{ color: 'white' }}>{events[1].title}</a></h5>
//                                                                 </div>
//                                                                 <div className="event-overlay">
//                                                                     <div className=" meta pb-3">
//                                                                         <ul className='d-flex align-items-center '>
//                                                                             <li>
//                                                                                 <a href="#"><i className="far fa-calendar-alt"></i> {events[1].date}</a>
//                                                                             </li>
//                                                                             <li  className='ms-3'>
//                                                                                 <a href="#"><i className="far fa-user-circle"></i> {events[1].author}</a>
//                                                                             </li>
//                                                                         </ul>
//                                                                     </div>
//                                                                     <div className='mt-3'>
//                                                                         <h5 style={{color:"#fff"}}>{events[1].title}</h5>
//                                                                         <p>{events[1].description}</p>
//                                                                         <a className="text-white" href={events[1].link}>Explore More <i className="fas fa-arrow-right"></i></a>

//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     {/* Third event */}
//                                                     <div className='col-lg-12'>
//                                                         <div className="item">
//                                                             <div className="thumb event-container">
//                                                                 <a href={events[2].link}>
//                                                                     <img
//                                                                         src={events[2].imageUrl}
//                                                                         alt="Event 3"
//                                                                         className="event-image"
//                                                                     />
//                                                                 </a>
//                                                                 <div className="event-title">
//                                                                     <h5><a href={events[2].link} style={{ color: 'white' }}>{events[2].title}</a></h5>
//                                                                 </div>
//                                                                 <div className="event-overlay">
//                                                                     <div className=" meta pb-3">
//                                                                         <ul className='d-flex align-items-center '>
//                                                                             <li>
//                                                                                 <a href="#"><i className="far fa-calendar-alt"></i> {events[2].date}</a>
//                                                                             </li>
//                                                                             <li className='ms-3'>
//                                                                                 <a href="#"><i className="far fa-user-circle"></i> {events[2].author}</a>
//                                                                             </li>
//                                                                         </ul>
//                                                                     </div>
//                                                                     <h5 style={{color:"#fff"}}>{events[2].title}</h5>
//                                                                     <p>{events[2].description}</p>
//                                                                     <a className="text-white" href={events[1].link}>Explore More <i className="fas fa-arrow-right"></i></a>                                                                </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
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

// export default HomeEvents



import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import eventService from '../../services/eventService';

const HomeEvents = () => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });

        // Fetch events from API
        const fetchEvents = async () => {
            try {
                const response = await eventService.getAll();
                const eventData = response.data || [];

                // Transform API data to match component structure
                const transformedEvents = eventData.slice(0, 3).map(item => ({
                    id: item.id,
                    imageUrl: item.image ? `${IMAGE_BASE_URL}/${item.image}` : "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
                    title: item.title,
                    date: new Date(item.event_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }),
                    author: item.author || "Admin",
                    description: item.description,
                    link: "#"
                }));

                setEvents(transformedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
                // Fallback to default data if API fails
                setEvents([
                    {
                        id: 1,
                        imageUrl: "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
                        title: "Announcing if attachment resolution sentiments to constructions.",
                        date: "12 August, 2025",
                        author: "Admin",
                        description: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
                        link: "#"
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
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
        <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">

            {/* ====================== TITLE ====================== */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div 
                            className="site-heading text-center"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <h2 className="title split-text-right split-text-in-right">
                                Join HC IT at events across the globe
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====================== EVENTS ====================== */}
            <div className="container">
                <div className="case-studies">
                    <div className="blog-grid">
                        <div className="full-blog">
                            
                            {/* INLINE CSS */}
                            <style jsx>{`
                                .event-container {
                                    position: relative;
                                    overflow: hidden;
                                }
                                .event-overlay {
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    right: 0;
                                    background: rgba(0,0,0,0.5);
                                    padding: 15px;
                                    transform: translateY(100%);
                                    transition: transform 0.5s ease;
                                }
                                .event-container:hover .event-overlay {
                                    transform: translateY(0);
                                }
                                .event-image {
                                    width: 100%;
                                    height: auto;
                                    display: block;
                                }
                                .event-title {
                                    position: absolute;
                                    bottom: 20px;
                                    left: 15px;
                                    right: 15px;
                                    color: white;
                                    transition: opacity 0.3s ease;
                                }
                                .event-container:hover .event-title {
                                    opacity: 0;
                                }
                            `}</style>

                            <div className="container">
                                <div className="blog-items">
                                    <div className="row">

                                        {/* ====================== EVENT 1 ====================== */}
                                        <div 
                                            className="col-lg-6 p-3"
                                            data-aos="fade-right"
                                            data-aos-duration="1000"
                                        >
                                            <div className="first-event">
                                                <div className="item">
                                                    <div className="thumb">
                                                        <a href={events[0].link}>
                                                            <img
                                                                src={events[0].imageUrl}
                                                                alt="Event 1"
                                                                className="event-image rounded-sm"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="info">
                                                        <div className="meta pb-3">
                                                            <ul className='d-flex align-items-center'>
                                                                <li>
                                                                    <a href="#" className='text-xs'><i className="far fa-calendar-alt"></i> {events[0].date}</a>
                                                                </li>
                                                                <li className='ms-3'>
                                                                    <a href="#" className='text-xs'><i className="far fa-user-circle"></i> {events[0].author}</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h5>{events[0].title}</h5>
                                                        <p>{events[0].description}</p>
                                                        <a className="btn mt-10 btn-style-one" href={events[0].link}>
                                                            Learn More 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ====================== EVENT 2 ====================== */}
                                        <div className='col-lg-6 p-3'>
                                            <div className='row'>

                                                <div 
                                                    className='col-lg-12 mb-3'
                                                    data-aos="fade-left"
                                                    data-aos-duration="1000"
                                                    data-aos-delay="150"
                                                >
                                                    <div className="item">
                                                        <div className="thumb event-container">
                                                            <a href={events[1].link}>
                                                                <img
                                                                    src={events[1].imageUrl}
                                                                    alt="Event 2"
                                                                    className="event-image"
                                                                />
                                                            </a>

                                                            <div className="event-title">
                                                                <h5><a href={events[1].link} style={{ color: 'white' }}>{events[1].title}</a></h5>
                                                            </div>

                                                            <div className="event-overlay">
                                                                <div className="meta pb-3">
                                                                    <ul className='d-flex align-items-center'>
                                                                        <li><a href="# " className='text-white'><i className="far fa-calendar-alt"></i> {events[1].date}</a></li>
                                                                        <li className='ms-3'><a href="#" className='text-white'><i className="far fa-user-circle"></i> {events[1].author}</a></li>
                                                                    </ul>
                                                                </div>

                                                                <div className='mt-3'>
                                                                    <h5 style={{color:"#fff"}}>{events[1].title}</h5>
                                                                    <p className='text-white text-xs'>{events[1].description}</p>
                                                                    <a className="text-white" href={events[1].link}>
                                                                        Explore More 
                                                                    </a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                {/* ====================== EVENT 3 ====================== */}
                                                <div 
                                                    className='col-lg-12'
                                                    data-aos="fade-left"
                                                    data-aos-duration="1000"
                                                    data-aos-delay="300"
                                                >
                                                    <div className="item">
                                                        <div className="thumb event-container">
                                                            <a href={events[2].link}>
                                                                <img
                                                                    src={events[2].imageUrl}
                                                                    alt="Event 3"
                                                                    className="event-image"
                                                                />
                                                            </a>

                                                            <div className="event-title">
                                                                <h5><a href={events[2].link} style={{ color: 'white' }}>{events[2].title}</a></h5>
                                                            </div>

                                                            <div className="event-overlay">
                                                                <div className="meta pb-3">
                                                                    <ul className='d-flex align-items-center'>
                                                                        <li className='text-white'><a href="#" className='text-white'><i className="far fa-calendar-alt"></i> {events[2].date}</a></li>
                                                                        <li className='ms-3 text-white'><a href="#" className='text-white'><i className="far fa-user-circle"></i> {events[2].author}</a></li>
                                                                    </ul>
                                                                </div>

                                                                <h5 style={{color:"#fff"}}>{events[2].title}</h5>
                                                                <p style={{color:"#fff"}} className='text-xs'>{events[2].description}</p>
                                                                <a className="text-white" href={events[2].link}>
                                                                    Explore More
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
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeEvents;
