import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import ProductsGrid from './ProductsGrid';
import BrandSection from './BrandSection';
import './Home.css';
import Video from "../../assets/Logo/backgroundvideo.mp4"; // Add your video file

interface HomePageProps {
  onAddToWishlist: (product: any) => void;
  onRemoveFromWishlist: (productId: number) => void;
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="home">
      <video autoPlay loop muted className="background-video1">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
      <h1 className="section-title">New Arrivals</h1>
      <ProductsGrid/>
      <BrandSection />
      <Footer />
    </div>
  );
};

export default HomePage;



