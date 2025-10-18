import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Architecture from '../components/Architecture';
import Results from '../components/Results';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <Results />
      <Contact />
    </div>
  );
};

export default Home;
