import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import ProductsGrid from './ProductsGrid';
import BrandSection from './BrandSection';
import './Home.css';

interface HomePageProps {
  onAddToWishlist: (product: any) => void;
  onRemoveFromWishlist: (productId: number) => void;
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="home">
      <Navbar />
      <h1 className="section-title">New Arrivals</h1>
      <ProductsGrid/>
      <BrandSection />
      <Footer />
    </div>
  );
};

export default HomePage;



