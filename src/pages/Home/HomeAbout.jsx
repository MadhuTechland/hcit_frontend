

import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

function HomeAbout() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparency and honesty guide our relationships with clients and partners.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to create forward-thinking solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Teamwork and partnership drive our success and yours.',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: '15+ years of experience in digital transformation',
    },
    {
      name: 'Lisa Anderson',
      role: 'Chief Technology Officer',
      description: 'Expert in software architecture and development',
    },
    {
      name: 'David Martinez',
      role: 'Creative Director',
      description: 'Award-winning designer with a passion for user experience',
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Marketing',
      description: 'Strategic thinker with proven results in digital marketing',
    },
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2012', title: 'Expanded Services', description: 'Grew to offer comprehensive digital solutions' },
    { year: '2016', title: 'International Reach', description: 'Opened offices in multiple countries' },
    { year: '2023', title: 'Industry Leader', description: 'Recognized as a top provider in web solutions' },
  ];

  return (
    <main>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8" aria-label="Hero section">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">HomeAbout Us</h1>
            <p className="text-xl sm:text-2xl text-blue-100">
              Empowering businesses through innovative digital solutions since 2008
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Our story section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <article>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2008, we began with a simple mission: to help businesses thrive in the digital age.
                What started as a small team of passionate developers has grown into a full-service digital agency
                serving clients worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years, we've helped hundreds of businesses transform their digital presence, from startups
                finding their footing to established enterprises scaling their operations. Our commitment to excellence
                and innovation has remained constant throughout our journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to be recognized as industry leaders, but we remain focused on what matters most:
                delivering exceptional results for our clients.
              </p>
            </article>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Projects</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
                <div className="text-gray-700 font-medium">Clients</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Years</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Mission and vision section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <Eye size={32} aria-hidden="true" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                and create lasting value in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in digital transformation, recognized for our innovation, expertise, and
                unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Values section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <article key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <value.icon size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Journey timeline section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <article key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <time className="flex-shrink-0 w-24 text-3xl font-bold text-blue-600">{milestone.year}</time>
                  <div className="flex-grow bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Team section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <article key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={48} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeAbout;
