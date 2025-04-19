import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Lurnetic</title>
        <meta name="description" content="The page you're looking for does not exist." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-50 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-7xl md:text-9xl font-display font-bold text-primary-500 mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-secondary-700 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;