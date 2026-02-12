import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import contactInfoService from '../../services/contactInfoService';

const HomeContact = () => {
    const [contactInfo, setContactInfo] = useState({
        phone: '',
        address: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 450,
            once: true,
            easing: "ease-out",
        });

        // Fetch contact info from API
        const fetchContactInfo = async () => {
            try {
                const response = await contactInfoService.getAll();
                const contactData = response.data || [];

                // Create an object with contact info by type
                const contactInfoByType = {};
                contactData.forEach(item => {
                    contactInfoByType[item.type] = item.value;
                });

                setContactInfo({
                    phone: contactInfoByType['phone'] || '+9999999999',
                    address: contactInfoByType['address'] || '128 Kuaram old Road, RC Puram, Hyderabad',
                    email: contactInfoByType['email'] || 'info@gmail.com'
                });
            } catch (error) {
                console.error('Error fetching contact info:', error);
                // Fallback to default data if API fails
                setContactInfo({
                    phone: '+9999999999',
                    address: '128 Kuaram old Road, RC Puram, Hyderabad',
                    email: 'info@gmail.com'
                });
            } finally {
                setLoading(false);
            }
        };

        fetchContactInfo();
    }, []);

    if (loading) {
        return (
            <div className="contact-style-one-area overflow-hidden py-3">
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
        <div>
            <div className="contact-style-one-area overflow-hidden py-3">
                <div className="container">
                    <div className="contact-style-one-items" style={{ backgroundImage: "url(/assets/img/shape/map.png)" }}>
                        <div className="row align-center">

                            {/* LEFT SIDE INFO */}
                            <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-50">

                                <div 
                                    className="contact-style-one-info"
                                    data-aos="fade-up"
                                >
                                    <h2 className="split-text title">
                                        For assistance, please contact our support team.
                                    </h2>

                                    <ul>
                                        <li data-aos="fade-up" data-aos-delay="150">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="content">
                                                <h4>Hotline</h4>
                                                <a href="#">{contactInfo.phone}</a>
                                            </div>
                                        </li>

                                        <li data-aos="fade-up" data-aos-delay="300" className='d-flex align-items-center mt-2'>
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt me-0"></i>
                                            </div>
                                            <div className="info">
                                                <h4>Our Location</h4>
                                                <p>{contactInfo.address}</p>
                                            </div>
                                        </li>

                                        <li data-aos="fade-up" data-aos-delay="450"  className='d-flex align-items-center mt-2'>
                                            <div className="icon">
                                                <i className="fas fa-envelope-open-text me-0"></i>
                                            </div>
                                            <div className="info">
                                                <h4>Official Email</h4>
                                                <a>{contactInfo.email}</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* RIGHT SIDE FORM */}
                            <div 
                                className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <div className="contact-form-card" style={{ backgroundImage: "url(assets/img/shape/3.png)" }}>
                                    
                                    <h4 className="sub-title">Free Consultation</h4>
                                    <p>
                                        Fill out the form to get a personalized price quote and package solution from our global team of experts.
                                    </p>

                                    <form method="POST" className="contact-form">

                                        <div className="row">
                                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Enter first name here" type="text" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Enter last name here" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Enter email here" type="email" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Enter your company name" type="text" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Enter your phone number" type="tel" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="250">
                                                <div className="form-group comments">
                                                    <textarea className="form-control" placeholder="Enter your message here"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" data-aos="fade-up" data-aos-delay="400">
                                            <div className="col-lg-12">
                                                {/* <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" />
                                                    <label className="form-check-label">
                                                        I agree to receive other communications from HC IT Systems.
                                                    </label>
                                                </div> */}
                                                <p className="privacy-text">
                                                    You acknowledge that your data will be processed in accordance with our <a href="#">Privacy Policy</a>.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row" data-aos="zoom-in" data-aos-delay="450">
                                            <div className="col-lg-12">
                                                <button className="btn btn-style-one" type="submit">
                                                    Get in Touch 
                                                </button>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact;
