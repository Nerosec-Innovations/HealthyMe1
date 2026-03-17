import './App.css';
import FeaturesSection from './components/Features';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <HeroSection/>
      <FeaturesSection/>
    </div>
  );
}

export default App;
