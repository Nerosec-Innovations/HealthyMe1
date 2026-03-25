import { SlInfo } from 'react-icons/sl';
import './App.css';
import FeaturesSection from './components/Features';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <FeaturesSection/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
