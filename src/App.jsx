import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import CpgAndRetail from './pages/Industry/CpgAndRetail.jsx';
import CpgAndRetailLayout from './pages/Industry/CpgAndRetailLayout.jsx';
import IndustryDetail from './pages/Industry/IndustryDetail.jsx';
import ServiceDetail from './pages/Service/ServiceDetail.jsx';
import ProductDetail from './pages/Product/ProductDetail.jsx';
import AboutDetail from './pages/About/AboutDetail.jsx';
import BlogsLayout from './pages/Insights/BlogsLayout.jsx';
import BlogDetails from './pages/Insights/BlogDetails.jsx';
import NewspartOne from './pages/News/NewspartOne.jsx';
import DigitalCommerce from './pages/services/DigitalCommerce/DigitalCommerce.jsx';
import DigitalServicesLayout from './pages/services/DigitalCommerce/DigitalServicesLayout.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
// import HauteLogicLayout from './pages/services/Solutions/hautelogic/HauteLogicLayout.jsx';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,     // global default duration in 800ms
      easing: "ease-out-cubic",
      once: false,       // whether animation should happen only once - set true if you want one-time
      mirror: false,     // whether elements should animate out while scrolling past them
    });
  }, []);

  // refresh on route change or when location changes
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  // Sync navbar sticked state with body class for logo-scrolled visibility
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav.navbar.validnavs.navbar-sticky');

      // Show the "scrolled" logo as soon as the user scrolls (desktop only),
      // and also when the theme marks the navbar as "sticked".
      const isDesktop = window.innerWidth > 1023;
      const shouldShow =
        isDesktop &&
        (window.scrollY > 0 || (navbar && navbar.classList.contains('sticked')));

      document.body.classList.toggle('navbar-sticked', Boolean(shouldShow));
    };

    // Check on mount
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Also observe navbar class changes (in case validnavs.js modifies it)
    const navbar = document.querySelector('nav.navbar.validnavs.navbar-sticky');
    if (navbar) {
      const observer = new MutationObserver(handleScroll);
      observer.observe(navbar, {
        attributes: true,
        attributeFilter: ['class']
      });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <img src="/assets/img/logo.jpeg" className="logo logo-scrolled" alt="Logo" />
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic industry route - must come before specific routes */}
        <Route path="/industry/:slug" element={<IndustryDetail />} />
        {/* Dynamic service route - must come before specific routes */}
        <Route path="/services/:slug" element={<ServiceDetail />} />
        {/* Dynamic product route - must come before specific routes */}
        <Route path="/products/:slug" element={<ProductDetail />} />
        {/* Dynamic about route - must come before specific routes */}
        <Route path="/about/:slug" element={<AboutDetail />} />
        <Route path="/insights/blogs" element={<BlogsLayout />} />
        <Route path="/insights/blogs/blog-details" element={<BlogDetails />} />
        <Route path="/news/transformation" element={<NewspartOne />} />
        <Route path="/services/digital-commerce" element={<DigitalServicesLayout />} />
        {/* <Route path="/solutions/hautelogic" element={<HauteLogicLayout />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
