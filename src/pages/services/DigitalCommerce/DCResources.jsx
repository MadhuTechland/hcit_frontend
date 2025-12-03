


import React, { useState } from 'react';

const DCResources = () => {
    const events = [
        {
            id: 1,
            imageUrl: "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
            title: "Announcing if attachment resolution sentiments to constructions.",
            date: "12 August, 2025",
            author: "Admin",
            description: "Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.",
            link: "#"
        },
        {
            id: 2,
            imageUrl: "https://www.visionet.com/sites/default/files/2025-09/ALTA-One-Event%20Homepage.webp?fid=18056",
            title: "Minuter him own clothes but observe country at the maintaining.",
            date: "12 July, 2025",
            author: "Admin",
            link: "#"
        },
        {
            id: 3,
            imageUrl: "http://visionet.com/sites/default/files/2025-09/PPC-Hero-Banner%20Homepage.webp?fid=18051",
            title: "Overcame breeding point concerns has terminate the hole family.",
            date: "12 August, 2025",
            author: "Admin",
            link: "#"
        },
        {
            id: 4,
            imageUrl: "https://www.visionet.com/sites/default/files/2025-09/Events%20section%20581x292%20pxls.webp?fid=18066",
            title: "HC IT Empowers Südwolle Group: Revolutionizing wool commerce",
            date: "15 August, 2025",
            author: "Admin",
            link: "#"
        },
        {
            id: 5,
            imageUrl: "https://www.visionet.com/sites/default/files/2025-09/ALTA-One-Event%20Homepage.webp?fid=18056",
            title: "Revitalizing Vince: Azure Cloud Migration Powers",
            date: "18 July, 2025",
            author: "Admin",
            link: "#"
        }
    ];

    return (
        <div>
            <div className="services-style-two-area pt-50 bg-gray blurry-shape-right-bottom pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="title split-text-right split-text-in-right">Resources</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="case-studies">
                        <div className=" blog-grid">
                            <div className=" full-blog ">
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
                                        background: transparent;
                                        color: white;
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
                                    .first-event .info {
                                        padding: 20px;
                                        background: #f8f9fa;
                                    }
                                    .event-title {
                                        position: absolute;
                                        bottom: 20px;
                                        left: 15px;
                                        right: 15px;
                                        color: white;
                                        z-index: 1;
                                        transition: opacity 0.3s ease;
                                    }
                                    .event-container:hover .event-title {
                                        opacity: 0;
                                    }
                                    .event-overlay h2,
                                    .event-overlay p,
                                    .event-overlay ul li a {
                                        color: white;
                                    }
                                    .event-overlay .btn {
                                        background: transparent;
                                        border: 1px solid white;
                                        color: white;
                                    }
                                    .event-overlay .btn:hover {
                                        background: white;
                                        color: white;
                                    }
                                `}</style>

                                <div className="container">
                                    <div className="blog-items">
                                        <div className="row ">
                                            {/* First event - always visible */}
                                            <div className="col-lg-4 p-3">
                                                <div className=" first-event">
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
                                                        <div className="info ">
                                                            <div className="meta pb-3">
                                                                <ul className='d-flex align-items-center '>
                                                                    <li>
                                                                        <a href="#"><i className="far fa-calendar-alt"></i> {events[0].date}</a>
                                                                    </li>
                                                                    <li className='ms-3'>
                                                                        <a href="#"><i className="far fa-user-circle"></i> {events[0].author}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h5>{events[0].title}</h5>
                                                            <p>{events[0].description}</p>
                                                            <a className="btn mt-10 btn-style-one" href={events[0].link}>Learn More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Second, third, fourth and fifth events - hover effect */}
                                            <div className='col-lg-8 p-3'>
                                                <div className='row'>
                                                    {/* Second event */}
                                                    <div className='col-lg-6 mb-3'>
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
                                                                    <div className=" meta pb-3">
                                                                        <ul className='d-flex align-items-center '>
                                                                            <li>
                                                                                <a href="#" className='text-xs'><i className="far fa-calendar-alt"></i> {events[1].date}</a>
                                                                            </li>
                                                                            <li className='ms-3'>
                                                                                <a href="#" className='text-xs'><i className="far fa-user-circle"></i> {events[1].author}</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className='mt-3'>
                                                                        <h5 style={{ color: "#fff" }}>{events[1].title}</h5>
                                                                        <p>{events[1].description}</p>
                                                                        <a className="text-white" href={events[1].link}>Explore More <i className="fas fa-arrow-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Third event */}
                                                    <div className='col-lg-6 mb-3'>
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
                                                                    <div className=" meta pb-3">
                                                                        <ul className='d-flex align-items-center '>
                                                                            <li>
                                                                                <a href="#" className='text-xs'><i className="far fa-calendar-alt"></i> {events[2].date}</a>
                                                                            </li>
                                                                            <li className='ms-3'>
                                                                                <a href="#" className='text-xs'><i className="far fa-user-circle"></i> {events[2].author}</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <h5 style={{ color: "#fff" }}>{events[2].title}</h5>
                                                                    <p>{events[2].description}</p>
                                                                    <a className="text-white" href={events[2].link}>Explore More <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Fourth event */}
                                                    <div className='col-lg-6 mb-3'>
                                                        <div className="item">
                                                            <div className="thumb event-container">
                                                                <a href={events[3].link}>
                                                                    <img
                                                                        src={events[3].imageUrl}
                                                                        alt="Event 4"
                                                                        className="event-image"
                                                                    />
                                                                </a>
                                                                <div className="event-title">
                                                                    <h5><a href={events[3].link} style={{ color: 'white' }}>{events[3].title}</a></h5>
                                                                </div>
                                                                <div className="event-overlay">
                                                                    <div className=" meta pb-3">
                                                                        <ul className='d-flex align-items-center '>
                                                                            <li>
                                                                                <a href="#" className='text-xs'><i className="far fa-calendar-alt"></i> {events[3].date}</a>
                                                                            </li>
                                                                            <li className='ms-3'>
                                                                                <a href="#" className='text-xs'><i className="far fa-user-circle"></i> {events[3].author}</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <h5 style={{ color: "#fff" }}>{events[3].title}</h5>
                                                                    <p>{events[3].description}</p>
                                                                    <a className="text-white" href={events[3].link}>Explore More <i className="fas fa-arrow-right"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Fifth event */}
                                                    <div className='col-lg-6 mb-3'>
                                                        <div className="item">
                                                            <div className="thumb event-container">
                                                                <a href={events[4].link}>
                                                                    <img
                                                                        src={events[4].imageUrl}
                                                                        alt="Event 5"
                                                                        className="event-image"
                                                                    />
                                                                </a>
                                                                <div className="event-title">
                                                                    <h5><a href={events[4].link} style={{ color: 'white' }}>{events[4].title}</a></h5>
                                                                </div>
                                                                <div className="event-overlay">
                                                                    <div className=" meta pb-3">
                                                                        <ul className='d-flex align-items-center '>
                                                                            <li>
                                                                                <a href="#" className='text-xs'><i className="far fa-calendar-alt"></i> {events[4].date}</a>
                                                                            </li>
                                                                            <li className='ms-3'>
                                                                                <a href="#" className='text-xs'><i className="far fa-user-circle"></i> {events[4].author}</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <h5 style={{ color: "#fff" }}>{events[4].title}</h5>
                                                                    <p>{events[4].description}</p>
                                                                    <a className="text-white" href={events[4].link}>Explore More <i className="fas fa-arrow-right"></i></a>
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
        </div>
    )
}

export default DCResources