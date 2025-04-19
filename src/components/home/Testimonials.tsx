import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    content: 'Lurnetic transformed our outdated website into a modern, responsive platform that has significantly increased our user engagement and conversion rates. Their team was professional, responsive, and delivered beyond our expectations.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, InnovateApp',
    content: 'The mobile app developed by Lurnetic has been a game-changer for our business. Their attention to detail, user experience focus, and technical expertise are unmatched. They truly understand how to create products that users love.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, GrowthBrand',
    content: 'Working with Lurnetic on our digital marketing campaigns has been a fantastic experience. Their strategic approach and technical knowledge have helped us achieve a 200% increase in our online presence and lead generation.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="bg-clip-text text-transparent bg-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-secondary-700">
            Hear from businesses that have experienced the Lurnetic difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-primary-500 mb-6">
              <Quote size={48} />
            </div>
            
            <p className="text-lg md:text-xl text-secondary-700 mb-8">
              {testimonials[currentIndex].content}
            </p>
            
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-secondary-600">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <button 
              onClick={prevTestimonial}
              className="p-2 bg-white rounded-full shadow-md text-secondary-800 hover:text-primary-600 transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 bg-white rounded-full shadow-md text-secondary-800 hover:text-primary-600 transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;