import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMetadata = {
  '/': {
    title: 'HC IT Solutions | Professional Web Development & Digital Solutions',
    description: 'Transform your business with WebSite - innovative web development, digital marketing, and comprehensive business solutions tailored for growth.',
    keywords: 'web development, digital marketing, web design, web solutions, business growth, online presence, web services',
    canonical: 'https://website.com',
    ogType: 'website',
    ogImage: 'https://images.pexels.com/photos/3181443/pexels-photo-3181443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'WebSite',
      'url': 'https://website.com',
      'description': 'Professional web development and digital solutions for business growth',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://website.com/search?q={search_term}',
        'query-input': 'required name=search_term'
      }
    }
  },
  '/about': {
    title: 'About Us - HC IT Solutions | Our Story, Mission & Team',
    description: 'Learn about WebSite - our 15+ years of expertise, mission to empower businesses, core values, and dedicated team of digital professionals.',
    keywords: 'about us, company profile, team, mission, values, web development company, digital agency, business solutions',
    canonical: 'https://website.com/about',
    ogType: 'website',
    ogImage: 'https://images.pexels.com/photos/3427773/pexels-photo-3427773.jpeg?auto=compress&cs=tinysrgb&w=1200',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'WebSite',
      'url': 'https://website.com',
      'logo': 'https://website.com/logo.png',
      'description': 'Professional digital solutions company with 15+ years of experience',
      'foundingDate': '2008',
      'sameAs': [
        'https://www.facebook.com/website',
        'https://twitter.com/website',
        'https://www.linkedin.com/company/website'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+1-555-123-4567',
        'contactType': 'Customer Service'
      }
    }
  },
  '/services': {
    title: 'Services - HC IT Solutions | Web Development, SEO, Design & Digital Marketing',
    description: 'Explore our comprehensive services: web development, mobile apps, SEO, UI/UX design, e-commerce solutions, and digital marketing strategies.',
    keywords: 'web services, web development, mobile app development, SEO services, UI UX design, e-commerce, digital marketing, consulting',
    canonical: 'https://website.com/services',
    ogType: 'website',
    ogImage: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'WebSite',
      'url': 'https://website.com/services',
      'description': 'Professional digital services and solutions',
      'areaServed': 'Worldwide',
      'offers': [
        {
          '@type': 'Service',
          'name': 'Web Development',
          'description': 'Custom websites and web applications'
        },
        {
          '@type': 'Service',
          'name': 'Mobile App Development',
          'description': 'Native and cross-platform mobile applications'
        },
        {
          '@type': 'Service',
          'name': 'SEO Services',
          'description': 'Search engine optimization and organic traffic'
        },
        {
          '@type': 'Service',
          'name': 'UI/UX Design',
          'description': 'User experience and interface design'
        }
      ]
    }
  },
  '/contact': {
    title: 'Contact Us - HC IT Solutions | Get In Touch With Our Team',
    description: 'Contact WebSite today to discuss your project. Our team is ready to help bring your digital vision to life. Call, email, or fill out our contact form.',
    keywords: 'contact us, get in touch, business inquiry, support, contact form, phone number, email address, contact information',
    canonical: 'https://website.com/contact',
    ogType: 'website',
    ogImage: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact WebSite',
      'url': 'https://website.com/contact',
      'organization': {
        '@type': 'Organization',
        'name': 'WebSite',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+1-555-123-4567',
          'email': 'info@website.com',
          'areaServed': 'Worldwide',
          'availableLanguage': 'English'
        }
      }
    }
  }
};

function SEO() {
  const location = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] || pageMetadata['/'];

    document.title = metadata.title;

    updateMetaTag('description', metadata.description);
    updateMetaTag('keywords', metadata.keywords);
    updateMetaTag('og:title', metadata.title, true);
    updateMetaTag('og:description', metadata.description, true);
    updateMetaTag('og:image', metadata.ogImage, true);
    updateMetaTag('og:url', metadata.canonical, true);
    updateMetaTag('og:type', metadata.ogType, true);
    updateMetaTag('twitter:card', metadata.twitterCard);
    updateMetaTag('twitter:title', metadata.title);
    updateMetaTag('twitter:description', metadata.description);
    updateMetaTag('twitter:image', metadata.ogImage);

    updateCanonicalURL(metadata.canonical);
    updateStructuredData(metadata.structuredData);

    window.scrollTo(0, 0);
  }, [location]);

  const updateMetaTag = (name, content, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attr}="${name}"]`);

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, name);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  };

  const updateCanonicalURL = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = url;
  };

  const updateStructuredData = (schema) => {
    let scriptTag = document.querySelector('script[type="application/ld+json"]');

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    scriptTag.textContent = JSON.stringify(schema);
  };

  return null;
}

export default SEO;
