import { Code, Smartphone, Search, PenTool, ShoppingCart, BarChart, Layers, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Fast Loading Speed', 'Secure & Scalable', 'SEO Optimized'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'User-Friendly Interface', 'Cloud Integration', 'Push Notifications'],
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to improve your search rankings and increase organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics & Reporting'],
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms that make selling online easy and profitable.',
      features: ['Payment Integration', 'Inventory Management', 'Shopping Cart', 'Order Tracking'],
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that reach your target audience and maximize ROI.',
      features: ['Social Media Marketing', 'Content Marketing', 'Email Campaigns', 'PPC Advertising'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We learn about your business, goals, and target audience to create a tailored strategy.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We develop a comprehensive project plan with clear milestones and deliverables.',
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our designers create beautiful, functional designs that align with your brand.',
    },
    {
      step: '04',
      title: 'Development',
      description: 'Our developers bring the designs to life with clean, efficient code.',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures everything works perfectly across all devices and browsers.',
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support to ensure continued success.',
    },
  ];

  return (
    <main>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-label="Hero section">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl sm:text-2xl text-blue-100">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Services offerings section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end solutions for your digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  <service.icon size={32} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2" aria-hidden="true">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Process section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures project success every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <article key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-blue-100 mb-4" aria-hidden="true">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Why choose us section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <article>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Why Choose Our Services</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Layers size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive Solutions</h3>
                    <p className="text-gray-600">End-to-end services that cover all aspects of your digital needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Rocket size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Fast Delivery</h3>
                    <p className="text-gray-600">Agile methodology ensures timely delivery without compromising quality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <BarChart size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Measurable Results</h3>
                    <p className="text-gray-600">Data-driven approach with clear metrics and transparent reporting.</p>
                  </div>
                </div>
              </div>
            </article>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Let's discuss your project and find the perfect solution for your business. Our team is ready to help you succeed.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Custom project proposal</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-200 mr-2">✓</span>
                  <span>No long-term contracts</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
