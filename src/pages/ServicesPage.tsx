import { Helmet } from 'react-helmet-async';
import { Laptop, Smartphone, Palette, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Website Development',
      description: 'We create custom, responsive websites that not only look great but also perform exceptionally well. Our websites are built with search engine optimization, user experience, and your business goals in mind.',
      icon: <Laptop size={32} />,
      features: [
        'Custom website design and development',
        'E-commerce solutions',
        'Content management systems',
        'Website maintenance and support',
        'Performance optimization',
        'SEO-friendly structure'
      ]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Our expert team builds native and cross-platform mobile applications that provide seamless user experiences across all devices. We focus on creating intuitive, feature-rich apps that meet your business needs.',
      icon: <Smartphone size={32} />,
      features: [
        'iOS and Android app development',
        'Cross-platform solutions',
        'UI/UX design for mobile',
        'App testing and quality assurance',
        'App store submission',
        'Ongoing maintenance and updates'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging, and accessible user interfaces that enhance user experience and drive engagement. Our design process is collaborative, user-centered, and focused on achieving your business objectives.',
      icon: <Palette size={32} />,
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Design systems',
        'Responsive design'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Our comprehensive digital marketing services help you reach your target audience, increase brand awareness, and drive conversions. We develop customized strategies based on your unique business goals and market position.',
      icon: <BarChart size={32} />,
      features: [
        'Search engine optimization (SEO)',
        'Pay-per-click advertising (PPC)',
        'Social media marketing',
        'Content marketing',
        'Email marketing campaigns',
        'Analytics and performance tracking'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Lurnetic</title>
        <meta name="description" content="Explore Lurnetic's services including website development, mobile app development, UI/UX design, and digital marketing solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-primary">Services</span>
            </h1>
            <p className="text-lg text-secondary-700">
              Comprehensive technology solutions designed to help your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-primary-100 p-4 rounded-xl inline-flex mb-6">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-secondary-700 mb-6">
                  {service.description}
                </p>
                <h3 className="font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Discuss your project
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Process</h2>
            <p className="text-secondary-700">
              We follow a structured approach to deliver high-quality solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-4 -left-4 bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-4">Discovery</h3>
                <p className="text-secondary-600">
                  We begin by understanding your business, objectives, target audience, and project requirements.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-4 -left-4 bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-4">Planning</h3>
                <p className="text-secondary-600">
                  We create a detailed project plan, including timeline, deliverables, and technical specifications.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-4 -left-4 bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-4">Execution</h3>
                <p className="text-secondary-600">
                  Our team designs and develops your solution with regular updates and opportunities for feedback.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-4 -left-4 bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-4">Launch & Support</h3>
                <p className="text-secondary-600">
                  We deploy your solution and provide ongoing support and maintenance to ensure continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Technologies We Use</h2>
            <p className="text-secondary-700">
              We leverage the latest technologies to create scalable, secure, and high-performing solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {/* Technology 1 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React"
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="font-medium">React</p>
            </div>

            {/* Technology 2 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="font-medium">Node.js</p>
            </div>

            {/* Technology 3 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="font-medium">TypeScript</p>
            </div>

            {/* Technology 4 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="font-medium">MongoDB</p>
            </div>

            {/* Technology 5 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg"
                alt="Swift"
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="font-medium">Swift</p>
            </div>

            {/* Technology 6 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
                alt="Tailwind CSS"
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="font-medium">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how we can help you achieve your business goals with our tech solutions.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;