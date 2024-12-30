import React from 'react';
import './BrandSection.css';
import apple from '../assets/logo/iphone.png';
import samsung from '../assets/logo/samsung.png';
import pixel from '../assets/logo/pixel.png';
import xiaomi from '../assets/logo/xiaomi.webp';
import vivo from '../assets/logo/vivo.png';
import all from '../assets/logo/all_phones.webp';

const brands = [
  { name: 'iPhone', image: apple },
  { name: 'Samsung', image: samsung },
  { name: 'Pixel', image: pixel },
  { name: 'Xiaomi', image: xiaomi },
  { name: 'Vivo', image: vivo },
  { name: 'All Phones', image: all },
];

const BrandSection: React.FC = () => {
  return (
    <div className="brand-section">
      <h2 className="brand-section-title">Shop Popular Brands</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <img src={brand.image} alt={brand.name} className="brand-logo" />
            {brand.name === 'All Phones' && <p className="brand-name">{brand.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
