import React from 'react';
import './BrandSection.css';
import { useNavigate } from 'react-router-dom';
import apple from '../assets/logo/iphone.png';
import samsung from '../assets/logo/samsung.png';
import pixel from '../assets/logo/pixel.png';
import xiaomi from '../assets/logo/xiaomi.webp';
import vivo from '../assets/logo/vivo.png';
import all from '../assets/logo/all_phones.webp';

const brands = [
  { image: apple, route: '/apple' },
  { image: samsung, route: '/samsung' },
  { image: pixel, route: '/pixel' },
  { image: xiaomi, route: '/xiaomi' },
  { image: vivo, route: '/vivo' },
  { image: all, route: '/' },
];

const BrandSection: React.FC = () => {
  const navigate = useNavigate();

  const handleBrandClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="brand-section">
      <h2 className="brand-section-title">Shop Popular Brands</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="brand-item"
            onClick={() => handleBrandClick(brand.route)}
          >
            <img src={brand.image}  className="brand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
