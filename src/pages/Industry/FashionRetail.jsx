import React from 'react';

const FashionRetail = () => {
  return (
    <div 
      className="fashion-retail-hero-section"
      style={{
        backgroundImage: `url('https://www.visionet.com/sites/default/files/2025-10/D365%20Fashion%20Retail%20Whitepaper%201680x224.webp?fid=18476')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* This overlay helps make the text more readable against the image */}
      <div className="overlay"></div>
    <div className='py-3'>
          
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="fashion-retail-content">
              <h2 className="title">Dynamics 365 in Fashion Retail</h2>
              <a href="#" className="btn btn-primary learn-more-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FashionRetail;