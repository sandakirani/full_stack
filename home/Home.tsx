import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductsGrid from '../home/ProductsGrid';
import BrandSection from '../home/BrandSection';
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <h1 className="section-title">New Arrivals</h1>
      <ProductsGrid />
      <BrandSection />
      <Footer />
    </div>
  );
};

export default HomePage;


