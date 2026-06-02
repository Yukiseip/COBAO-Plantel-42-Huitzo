import './index.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import InfoCards from './components/InfoCards';
import OfertaEducativa from './components/OfertaEducativa';
import Comunidad from './components/Comunidad';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <InfoCards />
        <OfertaEducativa />
        <Comunidad />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
