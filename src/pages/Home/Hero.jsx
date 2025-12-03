

import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { heroService } from '../../services';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        const data = await heroService.getByPage('home');
        setHeroData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching hero data:', err);
        setError(err.message || 'Failed to load hero section');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();

    const swiper = new Swiper('.brand-style-one-carousel', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 100,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });

    return () => {
      if (swiper) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="banner-style-one-area text-center default-padding bg-theme text-light bg-cover" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            // transform: 'translate(-50%, -50%)',
            transform: 'translate(-25%, -55%)',

            objectFit: 'cover'
          }}
        >
          <source src="assets/img/banner/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-center">
          <div className="col-xl-8 offset-xl-2">
            <div className="banner-one-content fade-up-anim">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-warning" role="alert">
                  {error}
                </div>
              ) : heroData ? (
                <>
                  {heroData.subtitle && <h4>{heroData.subtitle}</h4>}
                  <h2 dangerouslySetInnerHTML={{ __html: heroData.title }} />
                  {heroData.description && (
                    <div className="content">
                      <p>{heroData.description}</p>
                    </div>
                  )}
                  {heroData.button_text && heroData.button_link && (
                    <div className="button mt-40">
                      <a className="btn btn-theme btn-md" href={heroData.button_link}>
                        {heroData.button_text}
                      </a>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h4>AI automation Partner</h4>
                  <h2>Building the Foundation for Modern <strong style={{ backgroundImage: "url(/assets/img/shape/banner-2.jpg)" }}>Business</strong></h2>
                  <div className="content">
                    <p>Technologies into businesses to enhance efficiency, decision-making, and overall performance. They offer services such as AI implementation.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="brand-items" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="brand-style-one-carousel swiper wow fadeInUp" data-wow-delay="400ms">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <img src="assets/img/logo/1-light.png" alt="Client Logo 1" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <img src="assets/img/logo/2-light.png" alt="Client Logo 2" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <img src="assets/img/logo/3-light.png" alt="Client Logo 3" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <img src="assets/img/logo/4-light.png" alt="Client Logo 4" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand-item">
                      <img src="assets/img/logo/5-light.png" alt="Client Logo 5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;