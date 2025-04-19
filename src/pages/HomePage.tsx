import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Lurnetic | Tech Development Services</title>
        <meta name="description" content="Lurnetic provides tech development services including website development, mobile app development, UI/UX design, and digital marketing solutions." />
      </Helmet>
      
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;