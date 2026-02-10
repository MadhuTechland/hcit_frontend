

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
//     const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//     const [showProductsDropdown, setShowProductsDropdown] = useState(false);
//     const [showAboutDropdown, setShowAboutDropdown] = useState(false);
//     const [showInsightsDropdown, setShowInsightsDropdown] = useState(false);
//     const [hidingDropdown, setHidingDropdown] = useState(null);

//     const handleImageClick = (e) => {
//         e.preventDefault();
//         window.location.href = '/news/transformation';
//     };

//     const handleLinkClick = (dropdownSetter) => {
//         setHidingDropdown(true);
//         dropdownSetter(false);
//         setTimeout(() => setHidingDropdown(false), 300); // Match the CSS transition duration
//     };

//     // Services data with paths
//     const servicesData = [
//         {
//             title: "Digital Commerce",
//             description: "Build commerce experiences that deliver hyper-personalization and enhanced customer experience.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Digital Consulting",
//             description: "Create meaningful digital touchpoint by merging technological innovation with human ingenuity.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Digital Experience",
//             description: "Help enterprises become future-ready with our transformative digital services.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Cloud",
//             description: "Leverage HC IT's cloud expertise for a competitive edge and business transformation.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Enterprise Applications",
//             description: "Transform Business operations with AI Powered ERP.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Cyber Security",
//             description: "Navigate the digital frontier with resilient cybersecurity expertise.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Data & AI",
//             description: "Elevate your business performance by fostering a data-centric culture, leveraging AI-powered innovation.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Generative AI",
//             description: "Redefine business and IT with Gen AI for amplified ROI and peak productivity.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Managed IT Services",
//             description: "Designed to help you focus on your core operations while optimizing costs and improving agility.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Intelligent Process Automation",
//             description: "Unleash your business's true potential with Intelligent Process Automation.",
//             path: "/services/digital-commerce"
//         },
//         {
//             title: "Business Process Services (BPS)",
//             description: "Supercharge business performance with value-driven outcomes.",
//             path: "/services/digital-commerce"
//         }
//     ];



//     const productsData = [
//         {
//             title: "Supply Chain Management",
//             items: [
//                 "PartnerLinQ",
//                 "HauteLogic",
//                 "Essential Supply Chain",
//                 "Parcel Freight"
//             ]
//         },
//         {
//             title: "Commerce",
//             items: [
//                 "Catapult",
//                 "eCommerce (B2B/B2C)",
//                 "Intelligent Order Management"
//             ]
//         },
//         {
//             title: "Microsoft",
//             items: [
//                 "Dynamics 365 ERP",
//                 "Dynamics 365 CRM",
//                 "Power Platform"
//             ]
//         },
//         {
//             title: "Salesforce",
//             items: [
//                 "Salesforce CRM",
//                 "Commerce Cloud"
//             ]
//         },
//         {
//             title: "Data & Analytics",
//             items: [
//                 "AcuitySpark",
//                 "Customer Data Platform",
//                 "Modern Data Platform",
//                 "GenAI Studio"
//             ]
//         },
//         {
//             title: "Insurance",
//             items: [
//                 "Evvox",
//                 "Actuarial Automation Solution"
//             ]
//         },
//         {
//             title: "BFSI",
//             items: [
//                 "AtClose",
//                 "Loangility",
//                 "DocVu.AI"
//             ]
//         }
//     ];


//     // About HC IT data
//     const aboutData = [
//         {
//             title: "Who We Are",
//             description: "Learn about HC IT's mission, vision, and values that drive our commitment to excellence."
//         },
//         {
//             title: "Our Leadership",
//             description: "Meet the experienced leaders who guide HC IT's strategic direction and growth."
//         },
//         {
//             title: "Our History",
//             description: "Discover HC IT's journey from inception to becoming a global technology leader."
//         },
//         {
//             title: "Careers",
//             description: "Explore career opportunities and join our team of innovative professionals."
//         },
//         {
//             title: "Partners",
//             description: "Learn about our strategic partnerships that enhance our service offerings."
//         },
//         {
//             title: "Newsroom",
//             description: "Stay updated with the latest news, press releases, and announcements from HC IT."
//         }
//     ];

//     const insightsData = [
//         {
//             title: "Blogs",
//             description: "Dive into our blogs for insights on digital experiences, enterprise modernization, data & AI, and IT services.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "Brochures",
//             description: "Delivering pioneering IT solutions to drive digital transformation and boost operational efficiency.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "Case Studies",
//             description: "Delve into our case studies showcasing innovative IT solutions tailored for diverse industry challenges.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "eBooks",
//             description: "Explore our eBook library for unique insights and expert strategies to elevate your IT solutions.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "Articles",
//             description: "Expert takes on digital, AI, and enterprise tech.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "All Insights",
//             description: "Explore our resources to gain industry-specific insights.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "News",
//             description: "Stay updated with our latest news, offering fresh perspectives and developments in IT innovation.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "Events",
//             description: "Explore our latest events, featuring groundbreaking innovations, industry insights, and expert-led discussions.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "Webinars",
//             description: "Watch our webinars for comprehensive discussions and insights on advanced IT trends and solutions.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "Whitepapers",
//             description: "Access our whitepapers for detailed analyses and strategic insights on emerging IT technologies and solutions.",
//             path: "/insights/blogs"
//         },
//         {
//             title: "Podcasts",
//             description: "Tune into our podcasts for expert insights and in-depth analyses of current IT trends and innovations.",
//             path: "/insights/blogs"
//         }
//     ];

//     return (
//         <header>
//             {/* Start Navigation */}
//             <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs white navbar-fixed no-background">
//                 <div className="container-full d-flex justify-content-between align-items-center">
//                     {/* Start Header Navigation */}
//                     <div className="navbar-header">
//                         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
//                             <i className="fa fa-bars"></i>
//                         </button>
//                         <Link className="navbar-brand" to="/">
//                             <img src="/assets/img/logo.jpeg" className="logo logo-display" alt="Logo" />
//                             <img src="/assets/img/logo.jpeg" className="logo logo-scrolled" alt="Logo" />
//                         </Link>
//                     </div>
//                     {/* End Header Navigation */}

//                     {/* Collect the nav links, forms, and other content for toggling */}
//                     <div className="collapse navbar-collapse" id="navbar-menu">
//                         <img src="/assets/img/logo.jpeg" alt="Logo" />
//                         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
//                             <i className="fa fa-times"></i>
//                         </button>

//                         <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
//                             {/* Industries Dropdown */}
//                             <li
//                                 className="dropdown megamenu-fw megamenu-style-two column-two"
//                                 onMouseEnter={() => setShowIndustriesDropdown(true)}
//                                 onMouseLeave={() => setShowIndustriesDropdown(false)}
//                             >
//                                 <a href="#" data-toggle="dropdown">
//                                     Industries <i className="fas fa-chevron-down"></i>
//                                 </a>

//                                 {/* Industries Dropdown Content */}
//                                 {showIndustriesDropdown && (
//                                     <ul className={`dropdown-menu megamenu-content animated fadeInDown ${hidingDropdown ? 'hiding' : ''}`} role="menu" style={{ display: 'block' }}>
//                                         <li>
//                                             <div className="">
//                                                 <div className="">
//                                                     <div className="">
//                                                         <div className="row">
//                                                             {/* Left side - Industries list */}
//                                                             <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
//                                                                 <div className="row">
//                                                                     {/* Retail and Consumer Goods */}
//                                                                     <div className="col-lg-6">
//                                                                         <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                             <Link to="/industry/cpg-and-retail" onClick={() => handleLinkClick(setShowIndustriesDropdown)}>
//                                                                                 <h5 className="font-bold text-base text-gray-900 mb-1">Retail and Consumer Goods</h5>
//                                                                                 <p className="text-gray-600 text-xs leading-relaxed mb-1">Transform shopping experiences across all channels and promote efficiencies with our specialized expertise.</p>
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>

//                                                                     {/* Healthcare and Life Sciences */}
//                                                                     <div className="col-lg-6">
//                                                                         <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                             <Link to="/industry/cpg-and-retail" onClick={() => handleLinkClick(setShowIndustriesDropdown)}>
//                                                                                 <h5 className="font-bold text-base text-gray-900 mb-1">Healthcare and Life Sciences</h5>
//                                                                                 <p className="text-gray-600 text-xs leading-relaxed mb-1">Powering scientific breakthroughs with cutting-edge technology to revolutionize medical treatments and research.</p>
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>

//                                                                     {/* Banking and Financial Services */}
//                                                                     <div className="col-lg-6">
//                                                                         <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                             <Link to="/industry/cpg-and-retail" onClick={() => handleLinkClick(setShowIndustriesDropdown)}>
//                                                                                 <h5 className="font-bold text-base text-gray-900 mb-1">Banking and Financial Services</h5>
//                                                                                 <p className="text-gray-600 text-xs leading-relaxed mb-1">Become agile, develop hyper-personalized customer experiences, and drive operational efficiencies.</p>
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>

//                                                                     {/* Insurance */}
//                                                                     <div className="col-lg-6">
//                                                                         <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                             <Link to="/industry/cpg-and-retail" onClick={() => handleLinkClick(setShowIndustriesDropdown)}>
//                                                                                 <h5 className="font-bold text-base text-gray-900 mb-1">Insurance</h5>
//                                                                                 <p className="text-gray-600 text-xs leading-relaxed mb-1">Craft extraordinary customer experiences, redefine operations and discover new revenue horizons.</p>
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>

//                                                                     {/* Telecom */}
//                                                                     <div className="col-lg-6">
//                                                                         <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                             <Link to="/industry/cpg-and-retail" onClick={() => handleLinkClick(setShowIndustriesDropdown)}>
//                                                                                 <h5 className="font-bold text-base text-gray-900 mb-1">Telecom</h5>
//                                                                                 <p className="text-gray-600 text-xs leading-relaxed mb-1">Elevate your business with services and tailored solutions that deliver value for stakeholders and your teams.</p>
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>

//                                                                     {/* Public Sector */}
//                                                                     <div className="col-lg-6">
//                                                                         <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                             <Link to="/industry/cpg-and-retail" onClick={() => handleLinkClick(setShowIndustriesDropdown)}>
//                                                                                 <h5 className="font-bold text-base text-gray-900 mb-1">Public Sector</h5>
//                                                                                 <p className="text-gray-600 text-xs leading-relaxed mb-1">Enabling public service enterprises for data driven digital transformation</p>
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                             {/* Right side - News/Recognition */}
//                                                             <div className="col-lg-4 py-8 px-8 bg-light p-4">
//                                                                 <div className="h-full flex flex-col text-start">
//                                                                     <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">HC IT Recognized as a Major Contender in Everest Group's Application Transformation Services for AI Enablement PEAK Matrix® 2025</h5>
//                                                                     <p className="text-gray-600 text-xs mb-6 leading-relaxed">The recognition underscores HC IT's growing capabilities in helping enterprises modernize applications with AI-driven transformation.</p>
//                                                                     <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
//                                                                         <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="Recognition" onClick={handleImageClick} className="w-full" />
//                                                                     </div>
//                                                                     <div className="mt-auto">
//                                                                         <Link to="/news/transformation" onClick={() => handleLinkClick(setShowIndustriesDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
//                                                                             Explore insights ↘
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </li>

//                             {/* Services Dropdown */}
//                             <li
//                                 className="dropdown megamenu-fw megamenu-style-two column-two"
//                                 onMouseEnter={() => setShowServicesDropdown(true)}
//                                 onMouseLeave={() => setShowServicesDropdown(false)}
//                             >
//                                 <a href="#" data-toggle="dropdown">
//                                     Services <i className="fas fa-chevron-down"></i>
//                                 </a>

//                                 {/* Services Dropdown Content */}
//                                 {showServicesDropdown && (
//                                     <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''}`} role="menu" style={{ display: 'block' }}>
//                                         <li>
//                                             <div className="">
//                                                 <div className="">
//                                                     <div className="">
//                                                         <div className="row">
//                                                             {/* Left side - Services list in 3 columns */}
//                                                             <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
//                                                                 <div className="row">
//                                                                     {servicesData.map((service, index) => (
//                                                                         <div className="col-lg-6" key={index}>
//                                                                             <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                                 <Link to={service.path} onClick={() => handleLinkClick(setShowServicesDropdown)}>
//                                                                                     <h5 className="font-bold text-base text-gray-900 mb-1">{service.title}</h5>
//                                                                                     <p className="text-gray-600 text-xs leading-relaxed mb-1">{service.description}</p>
//                                                                                 </Link>
//                                                                             </div>
//                                                                         </div>
//                                                                     ))}
//                                                                 </div>
//                                                             </div>

//                                                             {/* Right side - GenAI Workshop */}
//                                                             <div className="col-lg-4 py-8 px-8 bg-light p-4">
//                                                                 <div className="h-full flex flex-col text-start">
//                                                                     <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">From Pilot to profit: HC IT GenAI workshop for enterprises</h5>
//                                                                     <p className="text-gray-600 text-xs mb-6 leading-relaxed">Join our exclusive workshop to discover how to implement GenAI solutions that drive real business value and ROI.</p>
//                                                                     <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
//                                                                         <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="GenAI Workshop" onClick={handleImageClick} className="w-full" />
//                                                                     </div>
//                                                                     <div className="mt-auto">
//                                                                         <Link to="/news/transformation" onClick={() => handleLinkClick(setShowServicesDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
//                                                                             Explore insights ↘
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </li>

//                             {/* Products & Solutions Dropdown */}
//                             <li
//                                 className="dropdown megamenu-fw megamenu-style-two column-two"
//                                 onMouseEnter={() => setShowProductsDropdown(true)}
//                                 onMouseLeave={() => setShowProductsDropdown(false)}
//                             >
//                                 <a href="#" data-toggle="dropdown">
//                                     Products & Solutions <i className="fas fa-chevron-down"></i>
//                                 </a>

//                                 {/* Products Dropdown Content */}
//                                 {showProductsDropdown && (
//                                     <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''}`} role="menu" style={{ display: 'block' }}>
//                                         <li>
//                                             <div className="">
//                                                 <div className="">
//                                                     <div className="">
//                                                         <div className="row">
//                                                             {/* Left side - Products list */}
//                                                             <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
//                                                                 <div className="row">
//                                                                     {productsData.map((product, index) => (
//                                                                         <div className="col-lg-4" key={index}>
//                                                                             <h5 className="font-bold text-base text-gray-900 mb-2">{product.title}</h5>

//                                                                             <ul className="text-gray-600 text-xs leading-relaxed mb-0">
//                                                                                 {product.items.map((item, i) => (
//                                                                                     <li key={i} className="text-xs mb-1"> <Link to="services/digital-commerce" className='text-sm'  >• {item}</Link>       </li>
//                                                                                 ))}
//                                                                             </ul>
//                                                                         </div>
//                                                                     ))}

//                                                                 </div>
//                                                             </div>

//                                                             {/* Right side - GenAI Content */}
//                                                             <div className="col-lg-4 py-8 px-8 bg-light p-4">
//                                                                 <div className="h-full flex flex-col text-start">
//                                                                     <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">What smart execs want from GenAI: The billion-dollar opportunity</h5>
//                                                                     <p className="text-gray-600 text-xs mb-6 leading-relaxed">Discover how leading executives are leveraging Generative AI to unlock unprecedented value and drive business transformation.</p>
//                                                                     <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
//                                                                         <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="GenAI Opportunity" onClick={handleImageClick} className="w-full" />
//                                                                     </div>
//                                                                     <div className="mt-auto">
//                                                                         <Link to="/news/transformation" onClick={() => handleLinkClick(setShowProductsDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
//                                                                             Explore insights ↘
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </li>

//                             {/* About HC IT Dropdown */}
//                             <li
//                                 className="dropdown megamenu-fw megamenu-style-two column-two"
//                                 onMouseEnter={() => setShowAboutDropdown(true)}
//                                 onMouseLeave={() => setShowAboutDropdown(false)}
//                             >
//                                 <a href="#" data-toggle="dropdown">
//                                     About HC IT <i className="fas fa-chevron-down"></i>
//                                 </a>

//                                 {/* About Dropdown Content */}
//                                 {showAboutDropdown && (
//                                     <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''}`} role="menu" style={{ display: 'block' }}>
//                                         <li>
//                                             <div className="">
//                                                 <div className="">
//                                                     <div className="">
//                                                         <div className="row">
//                                                             {/* Left side - About list */}
//                                                             <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
//                                                                 <div className="row">
//                                                                     {aboutData.map((item, index) => (
//                                                                         <div className="col-lg-6" key={index}>
//                                                                             <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                                 <h5 className="font-bold text-base text-gray-900 mb-1">{item.title}</h5>
//                                                                                 <p className="text-gray-600 text-xs leading-relaxed mb-1">{item.description}</p>
//                                                                             </div>
//                                                                         </div>
//                                                                     ))}
//                                                                 </div>
//                                                             </div>

//                                                             {/* Right side - Microsoft Partnership */}
//                                                             <div className="col-lg-4 py-8 px-8 bg-light p-4">
//                                                                 <div className="h-full flex flex-col text-start">
//                                                                     <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">HC IT becomes Microsoft's top cloud partner</h5>
//                                                                     <p className="text-gray-600 text-xs mb-6 leading-relaxed">Recognized for our expertise in delivering innovative Microsoft cloud solutions that drive digital transformation.</p>
//                                                                     <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
//                                                                         <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="Microsoft Partnership" onClick={handleImageClick} className="w-full" />
//                                                                     </div>
//                                                                     <div className="mt-auto">
//                                                                         <Link to="/news/transformation" onClick={() => handleLinkClick(setShowAboutDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
//                                                                             Explore insights ↘
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </li>

//                             {/* Insights Dropdown */}
//                             <li
//                                 className="dropdown megamenu-fw megamenu-style-two column-two"
//                                 onMouseEnter={() => setShowInsightsDropdown(true)}
//                                 onMouseLeave={() => setShowInsightsDropdown(false)}
//                             >
//                                 <a href="#" data-toggle="dropdown">
//                                     Insights <i className="fas fa-chevron-down"></i>
//                                 </a>

//                                 {/* Insights Dropdown Content */}
//                                 {showInsightsDropdown && (
//                                     <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''}`} role="menu" style={{ display: 'block' }}>
//                                         <li>
//                                             <div className="">
//                                                 <div className="">
//                                                     <div className="">
//                                                         <div className="row">
//                                                             {/* Left side - Insights list */}
//                                                             <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
//                                                                 <div className="row">
//                                                                     {insightsData.map((insight, index) => (
//                                                                         <div className="col-lg-6" key={index}>
//                                                                             <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
//                                                                                 <Link to={insight.path} onClick={() => handleLinkClick(setShowInsightsDropdown)}>
//                                                                                     <h5 className="font-bold text-base text-gray-900 mb-1">{insight.title}</h5>
//                                                                                     <p className="text-gray-600 text-xs leading-relaxed mb-1">{insight.description}</p>
//                                                                                 </Link>
//                                                                             </div>
//                                                                         </div>
//                                                                     ))}
//                                                                 </div>
//                                                             </div>

//                                                             {/* Right side - Latest Insights */}
//                                                             <div className="col-lg-4 py-8 px-8 bg-light p-4">
//                                                                 <div className="h-full flex flex-col text-start">
//                                                                     <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">Latest Insights: Digital Transformation Trends 2025</h5>
//                                                                     <p className="text-gray-600 text-xs mb-6 leading-relaxed">Explore the key trends shaping digital transformation and how businesses can stay ahead in the evolving landscape.</p>
//                                                                     <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
//                                                                         <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="Digital Transformation" onClick={handleImageClick} className="w-full" />
//                                                                     </div>
//                                                                     <div className="mt-auto">
//                                                                         <Link to="/news/transformation" onClick={() => handleLinkClick(setShowInsightsDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
//                                                                             Explore insights ↘
//                                                                         </Link>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 )}
//                             </li>
//                         </ul>
//                     </div>
//                     {/* /.navbar-collapse */}

//                     <div className="attr-right">
//                         <div className="attr-nav">
//                             {/* <ul>
//                                 <li className="side-menu">
//                                     <a href="#">
//                                         <span className="bar-1"></span>
//                                         <span className="bar-2"></span>
//                                         <span className="bar-3"></span>
//                                     </a>
//                                 </li>
//                                 <li className="button">
//                                     <a className="btn btn-style-one btn-border-light" href="#">Contact Us <i className="fas fa-arrow-right"></i></a>
//                                 </li>
//                             </ul> */}
//                         </div>
//                     </div>
//                     {/* Main Nav */}

//                     {/* Start Side Menu */}
//                     <div className="side">
//                         <a href="#" className="close-side"><i className="fas fa-times"></i></a>
//                         <div className="widget">
//                             <div className="logo">
//                                 <Link to="/">
//                                     <img src="/assets/img/logo.jpeg" alt="Logo" />
//                                 </Link>
//                             </div>
//                             <p>
//                                 Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means.
//                             </p>
//                         </div>
//                         <div className="widget address">
//                             <div>
//                                 <ul>
//                                     <li>
//                                         <div className="content">
//                                             <p>Address</p>
//                                             <strong>California, TX 70240</strong>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <div className="content">
//                                             <p>Email</p>
//                                             <strong>support@validtheme.com</strong>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <div className="content">
//                                             <p>Contact</p>
//                                             <strong>+44-20-7328-4499</strong>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="widget newsletter">
//                             <h4>Get Subscribed!</h4>
//                             <form action="#">
//                                 <div className="input-group stylish-input-group">
//                                     <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
//                                     <span className="input-group-addon">
//                                         <button type="submit">
//                                             <i className="fas fa-long-arrow-right"></i>
//                                         </button>
//                                     </span>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="widget social">
//                             <ul className="link">
//                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
//                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                                 <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
//                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     {/* End Side Menu */}
//                 </div>

//                 {/* Overlay screen for menu */}
//                 <div className="overlay-screen"></div>
//                 {/* End Overlay screen for menu */}
//             </nav>
//             {/* End Navigation */}

//             {/* Add CSS for dropdown transition */}
//             <style jsx>{`
//                 .dropdown-menu {
//                     transition: opacity 0.3s ease, visibility 0.3s ease;
//                 }
//                 .dropdown-menu.hiding {
//                     opacity: 0;
//                     visibility: hidden;
//                 }
//             `}</style>
//         </header>
//     );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import industryService from '../services/industryService';
import serviceService from '../services/serviceService';
import productService from '../services/productService';
import aboutService from '../services/aboutService';

const Header = () => {
    const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [showInsightsDropdown, setShowInsightsDropdown] = useState(false);
    const [hidingDropdown, setHidingDropdown] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileDropdowns, setMobileDropdowns] = useState({
        industries: false,
        services: false,
        products: false,
        about: false,
        insights: false
    });
    const [industries, setIndustries] = useState([]);
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [aboutPages, setAboutPages] = useState([]);
    const location = useLocation();

    // Check if mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
            document.body.style.overflow = '';
        };
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
        setMobileDropdowns({
            industries: false,
            services: false,
            products: false,
            about: false,
            insights: false
        });
    }, [location]);

    useEffect(() => {
        // Fetch industries from API
        const fetchIndustries = async () => {
            try {
                const response = await industryService.getAll();
                const industryData = response.data || [];

                // Filter active industries and sort by order
                const activeIndustries = industryData.filter(item => item.is_active);
                setIndustries(activeIndustries);
            } catch (error) {
                console.error('Error fetching industries:', error);
                // Fallback to empty array if API fails
                setIndustries([]);
            }
        };

        // Fetch services from API
        const fetchServices = async () => {
            try {
                const response = await serviceService.getAll();
                const serviceData = response.data || [];

                // Filter active services and sort by order
                const activeServices = serviceData.filter(item => item.is_active);
                setServices(activeServices);
            } catch (error) {
                console.error('Error fetching services:', error);
                // Fallback to empty array if API fails
                setServices([]);
            }
        };

        // Fetch products from API
        const fetchProducts = async () => {
            try {
                const response = await productService.getAll();
                const productData = response.data || [];

                // Filter active products and sort by order
                const activeProducts = productData.filter(item => item.is_active);
                setProducts(activeProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Fallback to empty array if API fails
                setProducts([]);
            }
        };

        // Fetch about pages from API
        const fetchAboutPages = async () => {
            try {
                const response = await aboutService.getAllPages();
                // Response is directly the array, not response.data
                const aboutData = Array.isArray(response) ? response : [];

                // Filter active pages and sort by order
                const activePages = aboutData.filter(item => item.is_active);
                setAboutPages(activePages);
            } catch (error) {
                console.error('Error fetching about pages:', error);
                // Fallback to empty array if API fails
                setAboutPages([]);
            }
        };

        fetchIndustries();
        fetchServices();
        fetchProducts();
        fetchAboutPages();
    }, []);

    const handleImageClick = (e) => {
        e.preventDefault();
        window.location.href = '/news/transformation';
    };

    const handleLinkClick = (dropdownSetter) => {
        setHidingDropdown(true);
        dropdownSetter(false);
        setTimeout(() => setHidingDropdown(false), 300); // Match the CSS transition duration
        // Close mobile menu when a link is clicked
        if (isMobile) {
            closeMobileMenu();
        }
    };

    // Toggle menu function
    const toggleMenu = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        // Lock/unlock body scroll
        if (newState) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            // Reset mobile dropdowns when closing menu
            setMobileDropdowns({
                industries: false,
                services: false,
                products: false,
                about: false,
                insights: false
            });
        }
    };

    // Toggle mobile dropdown
    const toggleMobileDropdown = (dropdown, e) => {
        if (isMobile) {
            e.preventDefault();
            e.stopPropagation();
            setMobileDropdowns(prev => ({
                ...prev,
                [dropdown]: !prev[dropdown]
            }));
        }
    };

    // Close mobile menu
    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
        setMobileDropdowns({
            industries: false,
            services: false,
            products: false,
            about: false,
            insights: false
        });
    };

    // Close menu when clicking outside or on route change
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar');
            const toggleButton = document.querySelector('.navbar-toggle');
            
            if (isMenuOpen && navbar && toggleButton) {
                if (!navbar.contains(event.target) || event.target.closest('.nav a')) {
                    setIsMenuOpen(false);
                }
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Sync menu state with validnavs.js behavior
    useEffect(() => {
        const navbarMenu = document.getElementById('navbar-menu');
        if (!navbarMenu) return;

        const observer = new MutationObserver(() => {
            const hasShowClass = navbarMenu.classList.contains('show');
            if (hasShowClass !== isMenuOpen) {
                setIsMenuOpen(hasShowClass);
            }
        });

        observer.observe(navbarMenu, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => {
            observer.disconnect();
        };
    }, [isMenuOpen]);

    // Services data with paths
    const servicesData = [
        {
            title: "Digital Commerce",
            description: "Build commerce experiences that deliver hyper-personalization and enhanced customer experience.",
            path: "/services/digital-commerce"
        },
        {
            title: "Digital Consulting",
            description: "Create meaningful digital touchpoint by merging technological innovation with human ingenuity.",
            path: "/services/digital-commerce"
        },
        {
            title: "Digital Experience",
            description: "Help enterprises become future-ready with our transformative digital services.",
            path: "/services/digital-commerce"
        },
        {
            title: "Cloud",
            description: "Leverage HC IT's cloud expertise for a competitive edge and business transformation.",
            path: "/services/digital-commerce"
        },
        {
            title: "Enterprise Applications",
            description: "Transform Business operations with AI Powered ERP.",
            path: "/services/digital-commerce"
        },
        {
            title: "Cyber Security",
            description: "Navigate the digital frontier with resilient cybersecurity expertise.",
            path: "/services/digital-commerce"
        },
        {
            title: "Data & AI",
            description: "Elevate your business performance by fostering a data-centric culture, leveraging AI-powered innovation.",
            path: "/services/digital-commerce"
        },
        {
            title: "Generative AI",
            description: "Redefine business and IT with Gen AI for amplified ROI and peak productivity.",
            path: "/services/digital-commerce"
        },
        {
            title: "Managed IT Services",
            description: "Designed to help you focus on your core operations while optimizing costs and improving agility.",
            path: "/services/digital-commerce"
        },
        {
            title: "Intelligent Process Automation",
            description: "Unleash your business's true potential with Intelligent Process Automation.",
            path: "/services/digital-commerce"
        },
        {
            title: "Business Process Services (BPS)",
            description: "Supercharge business performance with value-driven outcomes.",
            path: "/services/digital-commerce"
        }
    ];



    const productsData = [
        {
            title: "Supply Chain Management",
            items: [
                "PartnerLinQ",
                "HauteLogic",
                "Essential Supply Chain",
                "Parcel Freight"
            ]
        },
        {
            title: "Commerce",
            items: [
                "Catapult",
                "eCommerce (B2B/B2C)",
                "Intelligent Order Management"
            ]
        },
        {
            title: "Microsoft",
            items: [
                "Dynamics 365 ERP",
                "Dynamics 365 CRM",
                "Power Platform"
            ]
        },
        {
            title: "Salesforce",
            items: [
                "Salesforce CRM",
                "Commerce Cloud"
            ]
        },
        {
            title: "Data & Analytics",
            items: [
                "AcuitySpark",
                "Customer Data Platform",
                "Modern Data Platform",
                "GenAI Studio"
            ]
        },
        {
            title: "Insurance",
            items: [
                "Evvox",
                "Actuarial Automation Solution"
            ]
        },
        {
            title: "BFSI",
            items: [
                "AtClose",
                "Loangility",
                "DocVu.AI"
            ]
        }
    ];


    // About HC IT data
    const aboutData = [
        {
            title: "Who We Are",
            description: "Learn about HC IT's mission, vision, and values that drive our commitment to excellence."
        },
        {
            title: "Our Leadership",
            description: "Meet the experienced leaders who guide HC IT's strategic direction and growth."
        },
        {
            title: "Our History",
            description: "Discover HC IT's journey from inception to becoming a global technology leader."
        },
        {
            title: "Careers",
            description: "Explore career opportunities and join our team of innovative professionals."
        },
        {
            title: "Partners",
            description: "Learn about our strategic partnerships that enhance our service offerings."
        },
        {
            title: "Newsroom",
            description: "Stay updated with the latest news, press releases, and announcements from HC IT."
        }
    ];

    const insightsData = [
        {
            title: "Blogs",
            description: "Dive into our blogs for insights on digital experiences, enterprise modernization, data & AI, and IT services.",
            path: "/insights/blogs"
        },
        {
            title: "Brochures",
            description: "Delivering pioneering IT solutions to drive digital transformation and boost operational efficiency.",
            path: "/insights/blogs"
        },
        {
            title: "Case Studies",
            description: "Delve into our case studies showcasing innovative IT solutions tailored for diverse industry challenges.",
            path: "/insights/blogs"
        },
        {
            title: "eBooks",
            description: "Explore our eBook library for unique insights and expert strategies to elevate your IT solutions.",
            path: "/insights/blogs"
        },
        {
            title: "Articles",
            description: "Expert takes on digital, AI, and enterprise tech.",
            path: "/insights/blogs"
        },
        {
            title: "All Insights",
            description: "Explore our resources to gain industry-specific insights.",
            path: "/insights/blogs"
        },
        {
            title: "News",
            description: "Stay updated with our latest news, offering fresh perspectives and developments in IT innovation.",
            path: "/insights/blogs"
        },
        {
            title: "Events",
            description: "Explore our latest events, featuring groundbreaking innovations, industry insights, and expert-led discussions.",
            path: "/insights/blogs"
        },
        {
            title: "Webinars",
            description: "Watch our webinars for comprehensive discussions and insights on advanced IT trends and solutions.",
            path: "/insights/blogs"
        },
        {
            title: "Whitepapers",
            description: "Access our whitepapers for detailed analyses and strategic insights on emerging IT technologies and solutions.",
            path: "/insights/blogs"
        },
        {
            title: "Podcasts",
            description: "Tune into our podcasts for expert insights and in-depth analyses of current IT trends and innovations.",
            path: "/insights/blogs"
        }
    ];

    return (
        <header>
            {/* Start Navigation */}
            <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs white navbar-fixed no-background">
                <div className="container-full d-flex justify-content-between align-items-center">
                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#navbar-menu"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                            aria-expanded={isMenuOpen}
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src="/assets/img/logo.jpeg" className="logo logo-display" alt="Logo" />
                        </Link>
                    </div>
                    {/* End Header Navigation */}

                    {/* Mobile menu overlay */}
                    {isMobile && (
                        <div
                            className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
                            onClick={closeMobileMenu}
                        />
                    )}

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div id="navbar-menu" className={isMenuOpen && isMobile ? 'mobile-menu-open' : ''}>
                        {/* Mobile menu header with logo and close */}
                        {isMobile && (
                            <div className="mobile-menu-header">
                                <Link to="/" className="mobile-menu-logo" onClick={closeMobileMenu}>
                                    <img src="/assets/img/logo.jpeg" alt="Logo" />
                                </Link>
                                <button
                                    className="mobile-menu-close"
                                    onClick={closeMobileMenu}
                                    aria-label="Close menu"
                                >
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                        )}
                        <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                            {/* Industries Dropdown */}
                            <li
                                className={`dropdown megamenu-fw megamenu-style-two column-two ${mobileDropdowns.industries ? 'dropdown-open' : ''}`}
                                onMouseEnter={() => !isMobile && setShowIndustriesDropdown(true)}
                                onMouseLeave={() => !isMobile && setShowIndustriesDropdown(false)}
                            >
                                <a
                                    href="#"
                                    data-toggle="dropdown"
                                    onClick={(e) => toggleMobileDropdown('industries', e)}
                                >
                                    Industries <i className="fas fa-chevron-down"></i>
                                </a>

                                {/* Industries Dropdown Content */}
                                {(showIndustriesDropdown || mobileDropdowns.industries) && (
                                    <ul className={`dropdown-menu megamenu-content animated fadeInDown ${hidingDropdown ? 'hiding' : ''} ${mobileDropdowns.industries ? 'mobile-dropdown-open' : ''}`} role="menu" style={{ display: 'block' }}>
                                        <li>
                                            <div className="">
                                                <div className="">
                                                    <div className="">
                                                        <div className="row">
                                                            {/* Left side - Industries list */}
                                                            <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
                                                                <div className="row">
                                                                    {/* Dynamic industries from API */}
                                                                    {industries.map((industry, index) => (
                                                                        <div className="col-lg-6" key={industry.id || index}>
                                                                            <div className="cursor-pointer transition duration-150 text-start h-full hover:bg-gray-50 rounded p-1">
                                                                                <Link to={`/industry/${industry.slug}`} onClick={() => handleLinkClick(setShowIndustriesDropdown)}>
                                                                                    <h5 className="font-bold text-base text-gray-900 mb-1">{industry.title}</h5>
                                                                                    <p className="text-gray-600 text-xs leading-relaxed mb-1">{industry.description}</p>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Right side - News/Recognition */}
                                                            <div className="col-lg-4 py-8 px-8 bg-light p-4">
                                                                <div className="h-full flex flex-col text-start">
                                                                    <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">HC IT Recognized as a Major Contender in Everest Group's Application Transformation Services for AI Enablement PEAK Matrix® 2025</h5>
                                                                    <p className="text-gray-600 text-xs mb-6 leading-relaxed">The recognition underscores HC IT's growing capabilities in helping enterprises modernize applications with AI-driven transformation.</p>
                                                                    <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
                                                                        <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="Recognition" onClick={handleImageClick} className="w-full" />
                                                                    </div>
                                                                    <div className="mt-auto">
                                                                        <Link to="/news/transformation" onClick={() => handleLinkClick(setShowIndustriesDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
                                                                            Explore insights ↘
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Services Dropdown */}
                            <li
                                className={`dropdown megamenu-fw megamenu-style-two column-two ${mobileDropdowns.services ? 'dropdown-open' : ''}`}
                                onMouseEnter={() => !isMobile && setShowServicesDropdown(true)}
                                onMouseLeave={() => !isMobile && setShowServicesDropdown(false)}
                            >
                                <a
                                    href="#"
                                    data-toggle="dropdown"
                                    onClick={(e) => toggleMobileDropdown('services', e)}
                                >
                                    Services <i className="fas fa-chevron-down"></i>
                                </a>

                                {/* Services Dropdown Content */}
                                {(showServicesDropdown || mobileDropdowns.services) && (
                                    <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''} ${mobileDropdowns.services ? 'mobile-dropdown-open' : ''}`} role="menu" style={{ display: 'block' }}>
                                        <li>
                                            <div className="">
                                                <div className="">
                                                    <div className="">
                                                        <div className="row">
                                                            {/* Left side - Services list in 3 columns */}
                                                            <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
                                                                <div className="row">
                                                                    {services.map((service, index) => (
                                                                        <div className="col-lg-6" key={index}>
                                                                            <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
                                                                                <Link to={`/services/${service.slug}`} onClick={() => handleLinkClick(setShowServicesDropdown)}>
                                                                                    <h5 className="font-bold text-base text-gray-900 mb-1">{service.title}</h5>
                                                                                    <p className="text-gray-600 text-xs leading-relaxed mb-1">{service.description}</p>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Right side - GenAI Workshop */}
                                                            <div className="col-lg-4 py-8 px-8 bg-light p-4">
                                                                <div className="h-full flex flex-col text-start">
                                                                    <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">From Pilot to profit: HC IT GenAI workshop for enterprises</h5>
                                                                    <p className="text-gray-600 text-xs mb-6 leading-relaxed">Join our exclusive workshop to discover how to implement GenAI solutions that drive real business value and ROI.</p>
                                                                    <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
                                                                        <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="GenAI Workshop" onClick={handleImageClick} className="w-full" />
                                                                    </div>
                                                                    <div className="mt-auto">
                                                                        <Link to="/news/transformation" onClick={() => handleLinkClick(setShowServicesDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
                                                                            Explore insights ↘
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Products & Solutions Dropdown */}
                            <li
                                className={`dropdown megamenu-fw megamenu-style-two column-two ${mobileDropdowns.products ? 'dropdown-open' : ''}`}
                                onMouseEnter={() => !isMobile && setShowProductsDropdown(true)}
                                onMouseLeave={() => !isMobile && setShowProductsDropdown(false)}
                            >
                                <a
                                    href="#"
                                    data-toggle="dropdown"
                                    onClick={(e) => toggleMobileDropdown('products', e)}
                                >
                                    Products & Solutions <i className="fas fa-chevron-down"></i>
                                </a>

                                {/* Products Dropdown Content */}
                                {(showProductsDropdown || mobileDropdowns.products) && (
                                    <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''} ${mobileDropdowns.products ? 'mobile-dropdown-open' : ''}`} role="menu" style={{ display: 'block' }}>
                                        <li>
                                            <div className="">
                                                <div className="">
                                                    <div className="">
                                                        <div className="row">
                                                            {/* Left side - Products list */}
                                                            <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
                                                                <div className="row">
                                                                    {products.map((product, index) => (
                                                                        <div className="col-lg-6" key={index}>
                                                                            <div className="cursor-pointer transition duration-150 text-start h-full hover:bg-gray-50 rounded p-1">
                                                                                <Link to={`/products/${product.slug}`} onClick={() => handleLinkClick(setShowProductsDropdown)}>
                                                                                    <h5 className="font-bold text-base text-gray-900 mb-1">{product.title}</h5>
                                                                                    <p className="text-gray-600 text-xs leading-relaxed mb-1">{product.description}</p>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    ))}

                                                                </div>
                                                            </div>

                                                            {/* Right side - GenAI Content */}
                                                            <div className="col-lg-4 py-8 px-8 bg-light p-4">
                                                                <div className="h-full flex flex-col text-start">
                                                                    <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">What smart execs want from GenAI: The billion-dollar opportunity</h5>
                                                                    <p className="text-gray-600 text-xs mb-6 leading-relaxed">Discover how leading executives are leveraging Generative AI to unlock unprecedented value and drive business transformation.</p>
                                                                    <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
                                                                        <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="GenAI Opportunity" onClick={handleImageClick} className="w-full" />
                                                                    </div>
                                                                    <div className="mt-auto">
                                                                        <Link to="/news/transformation" onClick={() => handleLinkClick(setShowProductsDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
                                                                            Explore insights ↘
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* About HC IT Dropdown */}
                            <li
                                className={`dropdown megamenu-fw megamenu-style-two column-two ${mobileDropdowns.about ? 'dropdown-open' : ''}`}
                                onMouseEnter={() => !isMobile && setShowAboutDropdown(true)}
                                onMouseLeave={() => !isMobile && setShowAboutDropdown(false)}
                            >
                                <a
                                    href="#"
                                    data-toggle="dropdown"
                                    onClick={(e) => toggleMobileDropdown('about', e)}
                                >
                                    About HC IT <i className="fas fa-chevron-down"></i>
                                </a>

                                {/* About Dropdown Content */}
                                {(showAboutDropdown || mobileDropdowns.about) && (
                                    <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''} ${mobileDropdowns.about ? 'mobile-dropdown-open' : ''}`} role="menu" style={{ display: 'block' }}>
                                        <li>
                                            <div className="">
                                                <div className="">
                                                    <div className="">
                                                        <div className="row">
                                                            {/* Left side - About list */}
                                                            <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
                                                                <div className="row">
                                                                    {aboutPages.map((item, index) => (
                                                                        <div className="col-lg-6" key={item.id || index}>
                                                                            <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
                                                                                <Link to={`/about/${item.slug}`} onClick={() => handleLinkClick(setShowAboutDropdown)}>
                                                                                    <h5 className="font-bold text-base text-gray-900 mb-1">{item.title}</h5>
                                                                                    <p className="text-gray-600 text-xs leading-relaxed mb-1">{item.description}</p>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Right side - Microsoft Partnership */}
                                                            <div className="col-lg-4 py-8 px-8 bg-light p-4">
                                                                <div className="h-full flex flex-col text-start">
                                                                    <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">HC IT becomes Microsoft's top cloud partner</h5>
                                                                    <p className="text-gray-600 text-xs mb-6 leading-relaxed">Recognized for our expertise in delivering innovative Microsoft cloud solutions that drive digital transformation.</p>
                                                                    <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
                                                                        <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="Microsoft Partnership" onClick={handleImageClick} className="w-full" />
                                                                    </div>
                                                                    <div className="mt-auto">
                                                                        <Link to="/news/transformation" onClick={() => handleLinkClick(setShowAboutDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
                                                                            Explore insights ↘
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Insights Dropdown */}
                            <li
                                className={`dropdown megamenu-fw megamenu-style-two column-two ${mobileDropdowns.insights ? 'dropdown-open' : ''}`}
                                onMouseEnter={() => !isMobile && setShowInsightsDropdown(true)}
                                onMouseLeave={() => !isMobile && setShowInsightsDropdown(false)}
                            >
                                <a
                                    href="#"
                                    data-toggle="dropdown"
                                    onClick={(e) => toggleMobileDropdown('insights', e)}
                                >
                                    Insights <i className="fas fa-chevron-down"></i>
                                </a>

                                {/* Insights Dropdown Content */}
                                {(showInsightsDropdown || mobileDropdowns.insights) && (
                                    <ul className={`dropdown-menu megamenu-content ${hidingDropdown ? 'hiding' : ''} ${mobileDropdowns.insights ? 'mobile-dropdown-open' : ''}`} role="menu" style={{ display: 'block' }}>
                                        <li>
                                            <div className="">
                                                <div className="">
                                                    <div className="">
                                                        <div className="row">
                                                            {/* Left side - Insights list */}
                                                            <div className="col-lg-8 py-6 px-16 border-r border-gray-200">
                                                                <div className="row">
                                                                    {insightsData.map((insight, index) => (
                                                                        <div className="col-lg-6" key={index}>
                                                                            <div className="cursor-pointer transition duration-150 text-start h-full  hover:bg-gray-50 rounded p-1">
                                                                                <Link to={insight.path} onClick={() => handleLinkClick(setShowInsightsDropdown)}>
                                                                                    <h5 className="font-bold text-base text-gray-900 mb-1">{insight.title}</h5>
                                                                                    <p className="text-gray-600 text-xs leading-relaxed mb-1">{insight.description}</p>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Right side - Latest Insights */}
                                                            <div className="col-lg-4 py-8 px-8 bg-light p-4">
                                                                <div className="h-full flex flex-col text-start">
                                                                    <h5 className="font-bold text-base text-gray-900 mb-3 leading-snug">Latest Insights: Digital Transformation Trends 2025</h5>
                                                                    <p className="text-gray-600 text-xs mb-6 leading-relaxed">Explore the key trends shaping digital transformation and how businesses can stay ahead in the evolving landscape.</p>
                                                                    <div className="col-10 relative mb-6 overflow-hidden rounded-lg">
                                                                        <img src="https://www.visionet.com/sites/default/files/2025-10/Industry-menu.webp" alt="Digital Transformation" onClick={handleImageClick} className="w-full" />
                                                                    </div>
                                                                    <div className="mt-auto">
                                                                        <Link to="/news/transformation" onClick={() => handleLinkClick(setShowInsightsDropdown)} className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm">
                                                                            Explore insights ↘
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}

                    <div className="attr-right">
                        <div className="attr-nav">
                            {/* <ul>
                                <li className="side-menu">
                                    <a href="#">
                                        <span className="bar-1"></span>
                                        <span className="bar-2"></span>
                                        <span className="bar-3"></span>
                                    </a>
                                </li>
                                <li className="button">
                                    <a className="btn btn-style-one btn-border-light" href="#">Contact Us <i className="fas fa-arrow-right"></i></a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    {/* Main Nav */}

                    {/* Start Side Menu */}
                    <div className="side">
                        <a href="#" className="close-side"><i className="fas fa-times"></i></a>
                        <div className="widget">
                            <div className="logo">
                                <Link to="/">
                                    {/* Hide this duplicate logo on small screens to avoid showing it inside the mobile menu */}
                                    <img src="/assets/img/logo.jpeg" alt="Logo" className="d-none d-md-block" />
                                </Link>
                            </div>
                            <p>
                                Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means.
                            </p>
                        </div>
                        <div className="widget address">
                            <div>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <p>Address</p>
                                            <strong>California, TX 70240</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>Email</p>
                                            <strong>support@validtheme.com</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>Contact</p>
                                            <strong>+44-20-7328-4499</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget newsletter">
                            <h4>Get Subscribed!</h4>
                            <form action="#">
                                <div className="input-group stylish-input-group">
                                    <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <i className="fas fa-long-arrow-right"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="widget social">
                            <ul className="link">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* End Side Menu */}
                </div>

                {/* Overlay screen for menu */}
                {/* <div className="overlay-screen"></div> */}
                {/* End Overlay screen for menu */}
            </nav>
            {/* End Navigation */}

            {/* Add CSS for dropdown transition */}
            <style jsx>{`
                .dropdown-menu {
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                }
                .dropdown-menu.hiding {
                    opacity: 0;
                    visibility: hidden;
                }
            `}</style>
        </header>
    );
};

export default Header;