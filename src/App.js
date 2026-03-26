import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FeaturesSection from './components/Features';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import { products as allProducts } from './data/products';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (query) => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      setFilteredProducts(allProducts);
      setSearchPerformed(false);
      return;
    }

    const result = allProducts.filter((item) =>
      item.title.toLowerCase().includes(normalized)
    );

    setFilteredProducts(result);
    setSearchPerformed(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection onSearch={handleSearch} searchPerformed={searchPerformed} searchResultCount={filteredProducts.length} />
                <FeaturesSection />
                <Slider products={filteredProducts} />
                <Footer />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
