import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    // Show success message (in a real implementation)
    alert('Thanks for your message! We will get back to you soon.');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Lurnetic</title>
        <meta name="description" content="Get in touch with Lurnetic for your tech development needs. Contact us for website development, mobile apps, UI/UX design, and digital marketing solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get In <span className="bg-clip-text text-transparent bg-gradient-primary">Touch</span>
            </h1>
            <p className="text-lg text-secondary-700">
              Have a project in mind or need technical expertise? We'd love to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-secondary-700 mb-2">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+15551234567" className="text-primary-600 font-medium hover:text-primary-700">
                +1 (555) 123-4567
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-secondary-700 mb-2">We'll respond within 24 hours</p>
              <a href="mailto:info@lurnetic.com" className="text-primary-600 font-medium hover:text-primary-700">
                info@lurnetic.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-secondary-700 mb-2">123 Tech Street</p>
              <p className="text-primary-600 font-medium">
                Innovation Valley, CA 94043
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Map */}
                <div className="bg-gray-200 h-full min-h-[400px] md:min-h-0 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101268.17836690784!2d-122.12295172050787!3d37.40299139321311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1662596988450!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lurnetic office location"
                  ></iframe>
                </div>

                {/* Form */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-secondary-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-secondary-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition-colors"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-secondary-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition-colors"
                          placeholder="Your phone (optional)"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-secondary-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-secondary-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition-colors"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-transform hover:shadow-lg"
                    >
                      Send Message
                      <Send size={18} className="ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary-700">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">What is your typical project timeline?</h3>
                <p className="text-secondary-700">
                  Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 2-6 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">How much does a typical project cost?</h3>
                <p className="text-secondary-700">
                  Each project is unique, and costs depend on requirements, complexity, and timeline. We provide transparent quotes after understanding your needs. We offer solutions for various budgets while maintaining quality standards.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Do you provide maintenance and support after launch?</h3>
                <p className="text-secondary-700">
                  Yes, we offer ongoing maintenance and support services to ensure your digital solutions remain secure, up-to-date, and performing optimally. We offer various support packages to meet different needs.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">What is your development process?</h3>
                <p className="text-secondary-700">
                  We follow an agile development approach that includes discovery, planning, design, development, testing, and deployment phases. We maintain transparent communication throughout and provide regular updates on progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;