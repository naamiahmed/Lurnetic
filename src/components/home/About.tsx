import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const benefits = [
    'Experienced team of developers and designers',
    'Tailored solutions for businesses of all sizes',
    'Focus on quality and user-friendly experiences',
    'Dedicated support and maintenance services',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Lurnetic team collaboration" 
              className="rounded-xl shadow-xl max-w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-primary-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  5+
                </div>
                <div>
                  <p className="text-sm text-secondary-600">Years of</p>
                  <p className="font-semibold">Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              About <span className="bg-clip-text text-transparent bg-gradient-primary">Lurnetic</span>
            </h2>
            <p className="text-secondary-700 mb-6">
              At Lurnetic, we're passionate about technology and dedicated to helping businesses grow through innovative digital solutions. Our team of experts combines technical know-how with creative thinking to deliver exceptional results.
            </p>
            <p className="text-secondary-700 mb-8">
              We also provide beginner-friendly tech guides and tutorials to help newcomers enter the tech industry and stay updated with the latest trends.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <p className="text-secondary-700">{benefit}</p>
                </div>
              ))}
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              More About Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;