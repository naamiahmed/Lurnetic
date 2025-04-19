import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  
  const categories = [
    'General',
    'Services',
    'Process',
    'Technical',
    'Pricing'
  ];
  
  const faqs = [
    {
      id: 1,
      category: 'General',
      question: 'What services does Lurnetic offer?',
      answer: 'Lurnetic offers a comprehensive range of tech development services, including website development, mobile app development, UI/UX design, and digital marketing solutions. We also provide beginner-friendly tech guides and tutorials to help newcomers enter the tech industry.'
    },
    {
      id: 2,
      category: 'General',
      question: 'How can I request a quote for my project?',
      answer: 'You can request a quote by filling out our contact form on the Contact Us page, calling our office, or sending an email to info@lurnetic.com. Please provide as much detail as possible about your project requirements to help us give you an accurate estimate.'
    },
    {
      id: 3,
      category: 'General',
      question: 'Where is Lurnetic located?',
      answer: 'Our main office is located in Innovation Valley, CA. However, we work with clients globally and have remote team members across different time zones to ensure seamless service delivery.'
    },
    {
      id: 4,
      category: 'Services',
      question: 'What types of websites do you develop?',
      answer: 'We develop all types of websites, including informational websites, e-commerce platforms, custom web applications, membership sites, blogs, and more. Our websites are responsive, user-friendly, and optimized for search engines. We use modern frameworks and technologies to ensure your website is fast, secure, and scalable.'
    },
    {
      id: 5,
      category: 'Services',
      question: 'Do you develop both iOS and Android mobile apps?',
      answer: 'Yes, we develop mobile applications for both iOS and Android platforms. We can create native apps specific to each platform or cross-platform apps using frameworks like React Native or Flutter that work on both platforms with a single codebase.'
    },
    {
      id: 6,
      category: 'Services',
      question: 'What does your UI/UX design process look like?',
      answer: 'Our UI/UX design process includes research and discovery, user persona development, information architecture, wireframing, prototyping, visual design, usability testing, and iterative refinement. We focus on creating intuitive, accessible, and aesthetically pleasing interfaces that meet user needs and business goals.'
    },
    {
      id: 7,
      category: 'Process',
      question: 'How long does it take to complete a typical project?',
      answer: 'Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 2-6 months. During our initial consultation, we&#39;ll provide you with a detailed timeline based on your project specifications.'
    },
    {
      id: 8,
      category: 'Process',
      question: 'How do you handle project management and communication?',
      answer: 'We use an agile project management approach with regular sprints and checkpoints. Communication is facilitated through a dedicated project manager who serves as your main point of contact. We provide regular updates and use tools like Slack, Trello, or other project management software to ensure transparency and efficient collaboration.'
    },
    {
      id: 9,
      category: 'Process',
      question: 'What happens after my project is completed?',
      answer: 'After project completion, we provide a thorough handover that includes all necessary documentation, training if required, and an initial support period. We also offer ongoing maintenance and support services to ensure your digital solution continues to perform optimally and remains up-to-date.'
    },
    {
      id: 10,
      category: 'Technical',
      question: 'What technologies and frameworks do you use?',
      answer: 'We work with a wide range of modern technologies and frameworks, including React, Angular, Vue.js, Node.js, Python, PHP, Swift, Kotlin, and more. Our technology choices are based on your specific project requirements, performance considerations, scalability needs, and long-term maintenance factors.'
    },
    {
      id: 11,
      category: 'Technical',
      question: 'Do you provide hosting services for websites?',
      answer: 'While we don&#39;t provide hosting services directly, we can recommend reliable hosting providers based on your website&#39;s needs and budget. We also handle the deployment process and can set up your hosting environment to ensure optimal performance and security.'
    },
    {
      id: 12,
      category: 'Technical',
      question: 'How do you ensure the security of digital solutions you develop?',
      answer: 'Security is a top priority in all our development projects. We follow industry best practices for secure coding, implement appropriate authentication and authorization mechanisms, use HTTPS/SSL, protect against common vulnerabilities (OWASP top 10), perform security testing, and keep all software components updated with the latest security patches.'
    },
    {
      id: 13,
      category: 'Pricing',
      question: 'How do you determine project costs?',
      answer: 'Our pricing is based on the scope, complexity, and timeline of your project. Factors that influence cost include the number of features, design requirements, integration needs, platform considerations (web, mobile, etc.), and ongoing support needs. We provide transparent quotes after thoroughly understanding your requirements.'
    },
    {
      id: 14,
      category: 'Pricing',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we typically work with a milestone-based payment structure. This usually includes an initial deposit, followed by payments at predefined project milestones, and a final payment upon project completion. For larger projects, we can discuss custom payment schedules that work for your budget constraints.'
    },
    {
      id: 15,
      category: 'Pricing',
      question: 'Are there any additional costs I should be aware of?',
      answer: 'We strive to be transparent about all costs involved in your project. Potential additional costs might include third-party services (like payment gateways, APIs, stock photos), hosting fees, domain registration, SSL certificates, and ongoing maintenance. We\'ll clearly outline all these potential costs in our proposal so there are no surprises.'
    }
  ];
  
  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };
  
  const filteredFaqs = faqs
    .filter(faq => faq.category === activeCategory || activeCategory === 'All')
    .filter(faq => 
      searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <Helmet>
        <title>FAQ | Lurnetic</title>
        <meta name="description" content="Frequently asked questions about Lurnetic's services, processes, pricing, and technical capabilities." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-primary">Questions</span>
            </h1>
            <p className="text-lg text-secondary-700">
              Find answers to common questions about our services, process, and company.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-secondary-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                      onClick={() => toggleQuestion(faq.id)}
                    >
                      <span className="text-lg font-medium text-left">{faq.question}</span>
                      {openQuestion === faq.id ? 
                        <ChevronUp size={20} className="text-primary-500 flex-shrink-0" /> : 
                        <ChevronDown size={20} className="text-primary-500 flex-shrink-0" />
                      }
                    </button>
                    {openQuestion === faq.id && (
                      <div className="p-5 bg-gray-50 border-t border-gray-200">
                        <p className="text-secondary-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-secondary-700 mb-4">No results found for your search.</p>
                <p className="text-secondary-600">Try a different search term or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-secondary-700 mb-8">
              If you couldn't find the answer you were looking for, please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:info@lurnetic.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-transform hover:shadow-lg"
              >
                Email Us
              </a>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;