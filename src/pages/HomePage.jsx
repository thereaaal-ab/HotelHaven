import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';
import About from '../components/About';
import Services from '../components/Services';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedRooms />
        <About />
        <Services />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

