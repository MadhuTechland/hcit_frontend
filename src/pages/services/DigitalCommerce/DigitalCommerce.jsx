import React from 'react'
import { Link } from 'react-router-dom'

const DigitalCommerce = () => {
    return (
        <div>
            <div className="breadcrumb-area text-center bg-cover text-light bg-light-theme" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">


                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container'>
                    <ul className="breadcrumb mb-0 py-2 text-xs">
                        <li><Link to="/"><i className="fas fa-home"></i> Home&nbsp; </Link></li>
                        <li className='disable'> / Services /</li>
                        <li>&nbsp; Digital Commerce</li>
                    </ul>
                </div>
            </div>
            <div className="newsletter-area default-padding bg-gray blurry-shape-right-bottom">
                <div className="newsletter-thumb">
                    <img src="https://images.pexels.com/photos/6207736/pexels-photo-6207736.jpeg" alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="newsletter-style-two">
                                <h4 className="sub-title">Digital Commerce</h4>
                                <h3 className="itle split-text-right split-text-in-right">Leverage Digital Commerce Services & Solutions with a Modernized Approach
                                </h3>
                                <div className="fade-up-anim">
                                    <p>Build commerce experiences that deliver hyper-personalization and enhanced customer experience.
                                    </p>
                                    <a class="btn mt-10 btn-style-one" href="#">Requesting a meeting</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalCommerce