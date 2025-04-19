import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Clock, DollarSign, Send, CheckCircle } from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  
  const openJobDetails = (id: number) => {
    setSelectedJob(id);
  };
  
  const closeJobDetails = () => {
    setSelectedJob(null);
  };
  
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior React Developer',
      location: 'Remote / Innovation Valley, CA',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'We&#39;re looking for an experienced React developer to join our team and help create stunning, high-performance web applications for our clients.',
      responsibilities: [
        'Develop responsive web applications using React and related technologies',
        'Collaborate with designers, back-end developers, and project managers',
        'Write clean, maintainable, and efficient code',
        'Implement UI components and functionality based on design specifications',
        'Participate in code reviews and contribute to team knowledge sharing'
      ],
      requirements: [
        '3+ years of experience with React and modern JavaScript',
        'Strong knowledge of HTML, CSS, and responsive design principles',
        'Experience with state management (Redux, Context API, etc.)',
        'Familiarity with modern build tools (Webpack, Vite, etc.)',
        'Understanding of RESTful APIs and asynchronous request handling',
        'Excellent problem-solving skills and attention to detail'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      location: 'Innovation Valley, CA',
      type: 'Full-time',
      salary: '$70,000 - $100,000',
      description: 'Join our creative team to design beautiful, intuitive user interfaces for web and mobile applications that deliver exceptional user experiences.',
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Collaborate with developers to implement designs',
        'Create and maintain design systems and documentation',
        'Stay updated with design trends and best practices'
      ],
      requirements: [
        '2+ years of experience in UX/UI design',
        'Strong portfolio demonstrating your design process and skills',
        'Proficiency with design tools like Figma, Sketch, or Adobe XD',
        'Understanding of user-centered design principles',
        'Knowledge of web and mobile design standards',
        'Strong communication and collaboration skills'
      ]
    },
    {
      id: 3,
      title: 'Mobile App Developer (iOS/Android)',
      location: 'Remote / Innovation Valley, CA',
      type: 'Full-time',
      salary: '$85,000 - $115,000',
      description: 'We\'re seeking a talented mobile developer with expertise in building native or cross-platform mobile applications for iOS and Android.',
      responsibilities: [
        'Develop mobile applications for iOS and/or Android platforms',
        'Write clean, efficient, and maintainable code',
        'Collaborate with design and backend teams',
        'Implement new features and fix bugs',
        'Ensure app performance, quality, and responsiveness',
        'Publish applications to the App Store and Google Play'
      ],
      requirements: [
        '3+ years of mobile development experience',
        'Proficiency in Swift/Objective-C for iOS or Kotlin/Java for Android',
        'Experience with cross-platform frameworks (React Native, Flutter) is a plus',
        'Understanding of mobile design patterns and best practices',
        'Knowledge of RESTful APIs and data persistence',
        'Familiarity with mobile testing and debugging tools'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Innovation Valley, CA',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      description: 'Join our marketing team to create and implement effective digital marketing strategies that drive growth and engagement for our clients.',
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media presence and content strategy',
        'Implement SEO best practices for client websites',
        'Analyze campaign performance and provide reports',
        'Stay updated with digital marketing trends and tools'
      ],
      requirements: [
        '2+ years of experience in digital marketing',
        'Knowledge of SEO, SEM, and social media marketing',
        'Experience with marketing analytics tools',
        'Understanding of content marketing principles',
        'Excellent communication and writing skills',
        'Certification in Google Analytics, Google Ads, or similar is a plus'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Health Insurance',
      description: 'Comprehensive health, dental, and vision insurance for you and your dependents.'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to maintain a healthy work-life balance.'
    },
    {
      title: 'Professional Development',
      description: 'Budget for courses, certifications, and conferences to help you grow professionally.'
    },
    {
      title: 'Paid Time Off',
      description: 'Generous vacation policy, paid holidays, and sick leave.'
    },
    {
      title: '401(k) Matching',
      description: 'Company matching program to help you save for retirement.'
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities, retreats, and social events.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Lurnetic</title>
        <meta name="description" content="Join the Lurnetic team. Explore career opportunities in web development, mobile app development, UI/UX design, and digital marketing." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Join Our <span className="bg-clip-text text-transparent bg-gradient-primary">Team</span>
            </h1>
            <p className="text-lg text-secondary-700">
              We're always looking for talented individuals who are passionate about technology and creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Why Join Lurnetic?</h2>
              <p className="text-secondary-700 mb-6">
                At Lurnetic, we believe in creating an environment where talented individuals can thrive, innovate, and grow both personally and professionally.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Innovative Work</h3>
                    <p className="text-secondary-600">Work on exciting projects using the latest technologies and methodologies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Growth Opportunities</h3>
                    <p className="text-secondary-600">Clear career paths and continuous learning opportunities to advance your skills.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Collaborative Culture</h3>
                    <p className="text-secondary-600">A supportive team environment that values diverse perspectives and ideas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Work-Life Balance</h3>
                    <p className="text-secondary-600">We respect your time outside of work and promote a healthy balance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Lurnetic team collaboration" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Benefits & Perks</h2>
            <p className="text-secondary-700">
              We offer competitive benefits to keep you happy, healthy, and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Current Openings</h2>
            <p className="text-secondary-700">
              Explore our available positions and find your next career opportunity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="relative">
                  {/* Job Card */}
                  <div 
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => openJobDetails(job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <p className="text-secondary-700 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center text-sm text-secondary-600">
                            <MapPin size={16} className="mr-1 text-primary-500" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-secondary-600">
                            <Clock size={16} className="mr-1 text-primary-500" />
                            {job.type}
                          </div>
                          <div className="flex items-center text-sm text-secondary-600">
                            <DollarSign size={16} className="mr-1 text-primary-500" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <button 
                        className="mt-4 md:mt-0 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          openJobDetails(job.id);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Job Details Modal */}
                  {selectedJob === job.id && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={closeJobDetails}>
                          <div className="absolute inset-0 bg-secondary-900 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                        <div 
                          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="bg-white p-6 sm:p-8">
                            <div className="flex justify-between items-start mb-6">
                              <div>
                                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                  <div className="flex items-center text-sm text-secondary-600">
                                    <MapPin size={16} className="mr-1 text-primary-500" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center text-sm text-secondary-600">
                                    <Clock size={16} className="mr-1 text-primary-500" />
                                    {job.type}
                                  </div>
                                  <div className="flex items-center text-sm text-secondary-600">
                                    <DollarSign size={16} className="mr-1 text-primary-500" />
                                    {job.salary}
                                  </div>
                                </div>
                              </div>
                              <button 
                                className="text-secondary-500 hover:text-secondary-700"
                                onClick={closeJobDetails}
                              >
                                <svg 
                                  className="h-6 w-6" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>

                            <div className="mb-6">
                              <p className="text-secondary-700 mb-4">{job.description}</p>
                            </div>

                            <div className="mb-6">
                              <h4 className="text-lg font-semibold mb-3">Responsibilities:</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <CheckCircle size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                                    <span className="text-secondary-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-8">
                              <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <CheckCircle size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                                    <span className="text-secondary-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex justify-center">
                              <button 
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-transform hover:shadow-lg"
                              >
                                Apply Now
                                <Send size={18} className="ml-2" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Hiring Process</h2>
            <p className="text-secondary-700">
              Here's what you can expect when you apply for a position at Lurnetic.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-200 z-0"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">Application Review</h3>
                      <p className="text-secondary-700">
                        Our hiring team reviews your application and resume to assess your qualifications and fit for the role.
                      </p>
                    </div>
                    <div className="hidden md:flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl z-10">
                      1
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="md:hidden flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                        1
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-1 md:order-none">
                      <div className="md:hidden flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                        2
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl z-10">
                      2
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">Initial Interview</h3>
                      <p className="text-secondary-700">
                        A video or phone call with our hiring manager to discuss your experience, skills, and interest in the position.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">Technical Assessment</h3>
                      <p className="text-secondary-700">
                        Depending on the role, you may be asked to complete a technical challenge or provide work samples to demonstrate your skills.
                      </p>
                    </div>
                    <div className="hidden md:flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl z-10">
                      3
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="md:hidden flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                        3
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-1 md:order-none">
                      <div className="md:hidden flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                        4
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl z-10">
                      4
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">Team Interview</h3>
                      <p className="text-secondary-700">
                        Meet with potential team members and colleagues to assess cultural fit and team dynamics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2">Offer & Onboarding</h3>
                      <p className="text-secondary-700">
                        If selected, you'll receive an offer and begin our onboarding process to set you up for success.
                      </p>
                    </div>
                    <div className="hidden md:flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl z-10">
                      5
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="md:hidden flex items-center justify-center bg-gradient-primary w-12 h-12 rounded-full text-white font-bold text-xl mb-4 mx-auto">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Don't See the Right Fit?</h2>
            <p className="text-lg mb-8">
              We're always interested in connecting with talented individuals. Send us your resume for future opportunities.
            </p>
            <button 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              Submit Your Resume
              <Send size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;