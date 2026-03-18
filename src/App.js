import { SlInfo } from 'react-icons/sl';
import './App.css';
import FeaturesSection from './components/Features';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <FeaturesSection/>
      <Slider/>
    </div>
  );
}

export default App;
