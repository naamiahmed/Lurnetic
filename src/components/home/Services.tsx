import { 
  Laptop, 
  Smartphone, 
  Palette, 
  BarChart, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'We create responsive, fast-loading websites that engage visitors and convert them into customers.',
    icon: <Laptop size={24} />,
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: <Smartphone size={24} />,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that are both aesthetically pleasing and highly functional.',
    icon: <Palette size={24} />,
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that increase your brand visibility and drive growth.',
    icon: <BarChart size={24} />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-primary">Services</span>
          </h2>
          <p className="text-secondary-700">
            We provide comprehensive technology solutions to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-primary-100 p-3 rounded-xl inline-flex mb-6">
                <div className="text-primary-600">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-secondary-600 mb-6">{service.description}</p>
              <Link 
                to="/services" 
                className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
              >
                Learn more 
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
          >
            View All Services
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;