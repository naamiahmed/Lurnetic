import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Users size={24} />,
      title: 'Client-Focused',
      description: 'We prioritize our clients&#39; needs and goals, ensuring that every solution we deliver is tailored to their specific requirements.',
    },
    {
      icon: <Award size={24} />,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality work that exceeds expectations and stands the test of time.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Timeliness',
      description: 'We respect deadlines and ensure that projects are completed on schedule without compromising on quality.',
    },
  ];

  const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Lurnetic</title>
        <meta name="description" content="Learn about Lurnetic, our mission, values, and the team behind our tech development services." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="bg-clip-text text-transparent bg-gradient-primary">Lurnetic</span>
            </h1>
            <p className="text-lg text-secondary-700">
              We're a team of passionate developers, designers, and digital strategists dedicated to helping businesses succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-secondary-700 mb-4">
                Lurnetic was founded in 2020 with a simple mission: to help businesses leverage technology to grow and succeed. What started as a small team of three passionate tech enthusiasts has since grown into a full-service digital agency.
              </p>
              <p className="text-secondary-700 mb-4">
                We noticed that many businesses struggled to find reliable tech partners who could deliver high-quality solutions on time and within budget. We set out to change that by building a company that combines technical expertise with clear communication and a client-first approach.
              </p>
              <p className="text-secondary-700">
                Today, we're proud to have helped dozens of businesses across various industries transform their digital presence and achieve their goals.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="The Lurnetic team collaborating" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Values</h2>
            <p className="text-secondary-700">
              The core principles that guide everything we do at Lurnetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 p-3 rounded-full inline-flex mb-6">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-secondary-700">
              The talented individuals who make Lurnetic's success possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Alex Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                <p className="text-primary-600 mb-4">Founder & CEO</p>
                <p className="text-secondary-600">
                  Tech visionary with 10+ years of experience in software development and business leadership.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sarah Kim" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Kim</h3>
                <p className="text-primary-600 mb-4">Lead Designer</p>
                <p className="text-secondary-600">
                  Award-winning UI/UX designer passionate about creating beautiful and functional interfaces.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Michael Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-primary-600 mb-4">Lead Developer</p>
                <p className="text-secondary-600">
                  Full-stack developer with expertise in multiple languages and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Why Choose Lurnetic?</h2>
              <p className="text-secondary-700 mb-6">
                We combine technical expertise with strategic thinking to deliver solutions that not only look great but also drive results for your business.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Technical Expertise</h3>
                    <p className="text-secondary-600">Our team stays updated with the latest technologies and best practices.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Custom Solutions</h3>
                    <p className="text-secondary-600">We create tailored solutions that address your specific business challenges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Transparent Process</h3>
                    <p className="text-secondary-600">We keep you informed at every stage of the project development.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Ongoing Support</h3>
                    <p className="text-secondary-600">Our relationship doesn't end at launch; we provide continued support and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Lurnetic team collaborating" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;