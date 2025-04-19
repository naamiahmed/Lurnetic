import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React: A Beginner&#39;s Guide',
    excerpt: 'Learn the basics of React and how to build your first component in this comprehensive guide for beginners.',
    content: 'React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. React allows developers to create large web applications that can update and render efficiently in response to data changes.',
    date: 'May 15, 2025',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Frontend'],
    author: {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 2,
    title: 'The Importance of Responsive Design in 2025',
    excerpt: 'Discover why responsive design is more critical than ever and how to implement it effectively in your projects.',
    content: 'Responsive design is an approach to web design that makes your web content adapt to different screen sizes and viewports. As mobile device usage continues to increase, having a responsive website is crucial for providing a good user experience to all visitors regardless of how they access your site.',
    date: 'May 8, 2025',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
    tags: ['Responsive Design', 'CSS', 'Mobile First'],
    author: {
      name: 'Sarah Kim',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 3,
    title: 'SEO Strategies to Boost Your Website&#39;s Ranking',
    excerpt: 'Explore the latest SEO techniques that can help improve your website&#39;s visibility in search engine results.',
    content: 'Search Engine Optimization (SEO) is the practice of increasing the quality and quantity of website traffic by increasing the visibility of a website to users of a web search engine. In 2025, SEO continues to evolve with search engines becoming more sophisticated in understanding user intent and content quality.',
    date: 'May 1, 2025',
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Digital Marketing',
    tags: ['SEO', 'Marketing', 'Analytics'],
    author: {
      name: 'David Patel',
      role: 'Digital Marketing Specialist',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 4,
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'Learn how TypeScript can enhance your JavaScript development with static typing and improved tooling.',
    content: 'TypeScript is a superset of JavaScript that adds static typing and other features to the language. It helps catch errors during development rather than at runtime, making your code more robust and maintainable.',
    date: 'April 25, 2025',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    author: {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 5,
    title: 'Creating Effective User Personas for UX Design',
    excerpt: 'Discover how to develop and use user personas to create more user-centered designs.',
    content: 'User personas are fictional characters created to represent the different user types that might use your website, brand, or product in a similar way. Creating detailed user personas can help you understand your users\' needs, experiences, behaviors, and goals.',
    date: 'April 18, 2025',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
    tags: ['UX Design', 'User Research', 'Personas'],
    author: {
      name: 'Sarah Kim',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  {
    id: 6,
    title: 'Building Your First Mobile App with React Native',
    excerpt: 'A step-by-step guide to creating cross-platform mobile applications using React Native.',
    content: 'React Native is a popular JavaScript framework for building native mobile apps using React. It allows you to use the same code base for iOS and Android apps, saving development time and resources.',
    date: 'April 10, 2025',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile App Development',
    tags: ['React Native', 'Mobile', 'Cross-platform'],
    author: {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
];

const categories = [
  'All',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Digital Marketing',
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Blog & Tutorials | Lurnetic</title>
        <meta name="description" content="Explore Lurnetic's beginner-friendly tech guides and tutorials covering web development, mobile apps, UI/UX design, and digital marketing." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-primary">Blog</span>
            </h1>
            <p className="text-lg text-secondary-700">
              Explore our collection of tech guides and tutorials to help you stay ahead in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-secondary-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={post.author.image} 
                        alt={post.author.name} 
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-secondary-500">{post.author.role}</p>
                      </div>
                    </div>
                    <button 
                      className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
                    >
                      Read more
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-secondary-700 mb-8">
              Stay updated with our latest articles, tutorials, and tech insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;