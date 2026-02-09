// import React from 'react';

// const Footer = () => {
//   return (
//     <div className='bg-dark'>
//       <footer class="footer-style-one box-layout bg-dark text-light">

//         <div class="footer-shape">
//           <img src="assets/img/shape/globe.png" alt="Image Not Found" />
//         </div>
//         <div class="container">
//           <div class="f-items default-padding">
//             <div class="row">
//               <div class="col-xl-5 col-lg-5">
//                 <div class="f-item contact">
//                   <h4 class="widget-title"> Contact</h4>
//                   <p>
//                     128 Kuaram old Road, parkvenue, Greater London, <br />  NW18JR Puran, United Kingdom
//                   </p>
//                   <ul class="contact">
//                     <li>
//                       <p>Phone Number</p>
//                       <h4><a href="#">+012-3455700</a></h4>
//                     </li>
//                     <li>
//                       <p>Email</p>
//                       <h4><a href="#">info@hcit.com</a></h4>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div class="col-xl-6 offset-xl-1 col-lg-7">
//                 <div class="footer-style-one-items">
//                   <div class="f-item link">
//                     <h4 class="widget-title">Company</h4>
//                     <ul>
//                       <li>
//                         <a href="#">About</a>
//                       </li>
//                       <li>
//                         <a href="#">Expertise</a>
//                       </li>
//                       <li>
//                         <a href="#">Sustainability</a>
//                       </li>
//                       <li>
//                         <a href="#">News &amp; Media</a>
//                       </li>
//                       <li>
//                         <a href="#">Case Studies</a>
//                       </li>
//                       <li>
//                         <a href="#">Contact</a>
//                       </li>
//                     </ul>
//                   </div>
             
//                   <div class="f-item link">
//                     <h4 class="widget-title">Services</h4>
//                     <ul>
//                       <li>
//                         <a href="#">Machine Learning</a>
//                       </li>
//                       <li>
//                         <a href="#">Chatboot</a>
//                       </li>
//                       <li>
//                         <a href="#">Ai Development</a>
//                       </li>
//                       <li>
//                         <a href="#">Data Science</a>
//                       </li>
//                       <li>
//                         <a href="#">Predictive Analytics</a>
//                       </li>
//                       <li>
//                         <a href="#">Machine Learning</a>
//                       </li>
//                     </ul>
//                   </div>
                  
//                   <div class="f-item link">
//                     <h4 class="widget-title">Resources</h4>
//                     <ul>
//                       <li>
//                         <a href="#">Events</a>
//                       </li>
//                       <li>
//                         <a href="#">Community</a>
//                       </li>
//                       <li>
//                         <a href="#">Social Media</a>
//                       </li>
//                       <li>
//                         <a href="#">Plans &amp; Pricing</a>
//                       </li>
//                       <li>
//                         <a href="#">Newsletter</a>
//                       </li>
//                       <li>
//                         <a href="#">Career</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="footer-bottom-one">
//           <div class="container">
//             <div class="content">
//               <div class="row align-center">
//                 <div class="col-lg-6 col-md-6">
//                   <div class="logo">
//                     <a href="#"><img src="assets/img/logo.jpeg" alt="Logo" /></a>
//                   </div>
//                 </div>
//                 <div class="col-lg-6 col-md-6">
//                   <ul class="footer-item-social text-end">
//                     <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
//                     <li><a href="#"><img src="assets/img/icon/twitter-x.png" alt="Image Not Found" /></a></li>
//                     <li><a href="#"><i class="fab fa-instagram"></i></a></li>
//                     <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="footer-bottom">
//           <div class="container">
//             <div class="row">
//               <div class="col-lg-6">
//                 <p>© <a href="#">validthemes</a> 2025. All Rights Reserved</p>
//               </div>
//               <div class="col-lg-6 text-end">
//                 <ul>
//                   <li>
//                     <a href="#">Terms</a>
//                   </li>
//                   <li>
//                     <a href="#">Privacy</a>
//                   </li>
//                   <li>
//                     <a href="#">Support</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//       </footer>
//     </div>
//   );
// };

// export default Footer;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api.ts';

const Footer = () => {
  const [settings, setSettings] = useState({});
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    // Fetch settings for social media links
    const fetchSettings = async () => {
      try {
        const response = await api.get('/settings?group=social');
        if (response.success) {
          setSettings(response.data);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    // Fetch contact info
    const fetchContactInfo = async () => {
      try {
        const response = await api.get('/contact-info');
        if (response.success) {
          setContactInfo(response.data);
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchSettings();
    fetchContactInfo();
  }, []);

  // Helper to get contact info by type
  const getContactByType = (type) => {
    return contactInfo.find(item => item.type === type);
  };

  const phoneInfo = getContactByType('phone');
  const emailInfo = getContactByType('email');
  const addressInfo = getContactByType('address');

  return (
    <>
      {/* This style tag contains the CSS for the rotation animation */}
      <style>
        {`
          @keyframes slowRotate {
            /* Start the rotation at 0 degrees */
            from {
              transform: rotate(0deg);
            }
            /* End the rotation at a full 360 degrees */
            to {
              transform: rotate(26deg);
            }
          }

          .rotating-globe {
            /* Apply the animation to the image */
            animation-name: slowRotate;
            animation-duration: 10s; /* 20 seconds for one full rotation */
            animation-timing-function: linear; /* Consistent speed */
            animation-iteration-count: infinite; /* Loop forever */
          }
        `}
      </style>

      <div className='bg-dark'>
        <footer className="footer-style-one box-layout bg-dark text-light">

          <div className="footer-shape">
            {/* We added the "rotating-globe" className here to target this specific image */}
            <img className="rotating-globe" src="/assets/img/shape/globe.png" alt="Image Not Found" />
          </div>
          <div className="container">
            <div className="f-items default-padding">
              <div className="row">
                <div className="col-xl-5 col-lg-5">
                  <div className="f-item contact">
                    <h4 className="widget-title"> Contact</h4>
                    <p>
                      {addressInfo?.value || '128 Guttala Begumpet, Madhapur, Hyderabad 500081'}
                    </p>
                    <ul className="contact">
                      <li>
                        <p>Phone Number</p>
                        <h4><a href={`tel:${phoneInfo?.value || '+91 98989 89898'}`}>{phoneInfo?.value || '+91 98989 89898'}</a></h4>
                      </li>
                      <li>
                        <p>Email</p>
                        <h4><a href={`mailto:${emailInfo?.value || 'info@hcit.com'}`}>{emailInfo?.value || 'info@hcit.com'}</a></h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 offset-xl-1 col-lg-7">
                  <div className="footer-style-one-items">
                    <div className="f-item link">
                      <h4 className="widget-title">Company</h4>
                      <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Expertise</Link></li>
                        <li><Link to="/about">Sustainability</Link></li>
                        <li><Link to="/insights/news">News &amp; Media</Link></li>
                        <li><Link to="/insights/case-studies">Case Studies</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </div>

                    <div className="f-item link">
                      <h4 className="widget-title">Services</h4>
                      <ul>
                        <li><Link to="/services">Machine Learning</Link></li>
                        <li><Link to="/services">Chatbot</Link></li>
                        <li><Link to="/services">AI Development</Link></li>
                        <li><Link to="/services">Data Science</Link></li>
                        <li><Link to="/services">Predictive Analytics</Link></li>
                        <li><Link to="/services">Cloud Solutions</Link></li>
                      </ul>
                    </div>

                    <div className="f-item link">
                      <h4 className="widget-title">Resources</h4>
                      <ul>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/about">Community</Link></li>
                        <li><Link to="/contact">Social Media</Link></li>
                        <li><Link to="/contact">Plans &amp; Pricing</Link></li>
                        <li><Link to="/contact">Newsletter</Link></li>
                        <li><Link to="/about">Career</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-one">
            <div className="container">
              <div className="content">
                <div className="row align-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="logo">
                      <Link to="/"><img src="/assets/img/logo.jpeg" alt="Logo" /></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul className="footer-item-social text-end">
                      {settings.social_facebook && (
                        <li><a href={settings.social_facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                      )}
                      {settings.social_twitter && (
                        <li><a href={settings.social_twitter} target="_blank" rel="noopener noreferrer"><img src="assets/img/icon/twitter-x.png" alt="Twitter/X" /></a></li>
                      )}
                      {settings.social_instagram && (
                        <li><a href={settings.social_instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                      )}
                      {settings.social_linkedin && (
                        <li><a href={settings.social_linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                      )}
                      {settings.social_youtube && (
                        <li><a href={settings.social_youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                      )}
                      {/* Default social links if none configured */}
                      {!settings.social_facebook && !settings.social_twitter && !settings.social_instagram && !settings.social_linkedin && (
                        <>
                          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/assets/img/icon/twitter-x.png" alt="Twitter/X" /></a></li>
                          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <p>© <Link to="/">HC IT Solutions</Link> 2025. All Rights Reserved</p>
                </div>
                <div className="col-lg-6 text-end">
                  <ul>
                    <li><Link to="/terms">Terms</Link></li>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/contact">Support</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>
    </>
  );
};

export default Footer;