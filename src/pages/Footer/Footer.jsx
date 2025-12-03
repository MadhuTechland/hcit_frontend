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



import React from 'react';

const Footer = () => {
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
        <footer class="footer-style-one box-layout bg-dark text-light">

          <div class="footer-shape">
            {/* We added the "rotating-globe" class here to target this specific image */}
            <img class="rotating-globe" src="assets/img/shape/globe.png" alt="Image Not Found" />
          </div>
          <div class="container">
            <div class="f-items default-padding">
              <div class="row">
                <div class="col-xl-5 col-lg-5">
                  <div class="f-item contact">
                    <h4 class="widget-title"> Contact</h4>
                    <p>
                      128 Guttala Begumpet, Madhapur,<br /> Hyderabad 500081
                    </p>
                    <ul class="contact">
                      <li>
                        <p>Phone Number</p>
                        <h4><a href="#">+91 98989 89898</a></h4>
                      </li>
                      <li>
                        <p>Email</p>
                        <h4><a href="#">info@hcit.com</a></h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-6 offset-xl-1 col-lg-7">
                  <div class="footer-style-one-items">
                    <div class="f-item link">
                      <h4 class="widget-title">Company</h4>
                      <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Expertise</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">News &amp; Media</a></li>
                        <li><a href="#">Case Studies</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
             
                    <div class="f-item link">
                      <h4 class="widget-title">Services</h4>
                      <ul>
                        <li><a href="#">Machine Learning</a></li>
                        <li><a href="#">Chatboot</a></li>
                        <li><a href="#">Ai Development</a></li>
                        <li><a href="#">Data Science</a></li>
                        <li><a href="#">Predictive Analytics</a></li>
                        <li><a href="#">Machine Learning</a></li>
                      </ul>
                    </div>
                  
                    <div class="f-item link">
                      <h4 class="widget-title">Resources</h4>
                      <ul>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Social Media</a></li>
                        <li><a href="#">Plans &amp; Pricing</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Career</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom-one">
            <div class="container">
              <div class="content">
                <div class="row align-center">
                  <div class="col-lg-6 col-md-6">
                    <div class="logo">
                      <a href="#"><img src="assets/img/logo.jpeg" alt="Logo" /></a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <ul class="footer-item-social text-end">
                      <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><img src="assets/img/icon/twitter-x.png" alt="Image Not Found" /></a></li>
                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <p>© <a href="#">HC IT Solutions</a> 2025. All Rights Reserved</p>
                </div>
                <div class="col-lg-6 text-end">
                  <ul>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Support</a></li>
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