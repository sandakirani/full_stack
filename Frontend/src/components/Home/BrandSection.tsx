import React from 'react';
import './BrandSection.css';
import { useNavigate } from 'react-router-dom';
import apple from '../../assets/BrandLogo/iphone.png';
import samsung from '../../assets/BrandLogo/samsung.png';
import pixel from '../../assets/BrandLogo/pixel.png';
import xiaomi from '../../assets/BrandLogo/xiaomi.webp';
import vivo from '../../assets/BrandLogo/vivo.png';

const brands = [
  { name: 'Apple', image: apple, route: '/apple' },
  { name: 'Samsung', image: samsung, route: '/samsung' },
  { name: 'Pixel', image: pixel, route: '/pixel' },
  { name: 'Xiaomi', image: xiaomi, route: '/xiaomi' },
  { name: 'Vivo', image: vivo, route: '/vivo' },
];

const BrandSection: React.FC = () => {
  const navigate = useNavigate();

  // Handle brand click and navigate to the respective route
  const handleBrandClick = (brand: { name: string; route: string }) => {
    navigate(brand.route, { state: { brand: brand.name } });
  };

  return (
    <div className="brand-section">
      <h2 className="brand-section-title">Shop Popular Brands</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="brand-item"
            onClick={() => handleBrandClick(brand)}
          >
            <img
              src={brand.image}
              alt={`${brand.name} Logo`}
              className="brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
