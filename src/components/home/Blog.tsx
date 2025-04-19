import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React: A Beginner&#39;s Guide',
    excerpt: 'Learn the basics of React and how to build your first component in this comprehensive guide for beginners.',
    date: 'May 15, 2025',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'The Importance of Responsive Design in 2025',
    excerpt: 'Discover why responsive design is more critical than ever and how to implement it effectively in your projects.',
    date: 'May 8, 2025',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
  },
  {
    id: 3,
    title: 'SEO Strategies to Boost Your Website&#39;s Ranking',
    excerpt: 'Explore the latest SEO techniques that can help improve your website&#39;s visibility in search engine results.',
    date: 'May 1, 2025',
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Digital Marketing',
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Latest from Our <span className="bg-clip-text text-transparent bg-gradient-primary">Blog</span>
          </h2>
          <p className="text-secondary-700">
            Explore our collection of tech guides and tutorials to help you stay ahead in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
                  <Link to="/blog">{post.title}</Link>
                </h3>
                <p className="text-secondary-600 mb-4">{post.excerpt}</p>
                <Link 
                  to="/blog" 
                  className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors"
          >
            View All Articles
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;