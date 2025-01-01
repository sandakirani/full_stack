import React from 'react';
import ProductCard from './ProductCard';
import samsung from '../assets/samsung.jpg';
import apple from '../assets/iphone.jpg';
import pixel  from '../assets/Googlepixel.jpg';
import xiaomi  from '../assets/xiaomi.jpg';
import vivo  from '../assets/vivo.webp';
import './ProductGrid.css';

const products = [
  { image: samsung, name: 'Samsung Galaxy S24', price: 'LKR 250,000 - LKR 300,000' },
  { image: apple, name: 'iPhone 16 Pro Max', price: 'LKR 350,000 - LKR 400,000' },
  { image: pixel, name: 'Google Pixel 9 Pro XL', price: 'LKR 275,000 - LKR 325,000' },
  { image: xiaomi, name: 'Xiaomi Redmi Note 14 Pro+', price: 'LKR 90,000 - LKR 120,000'},
  { image: vivo, name: 'Vivo V29 5G', price: 'LKR 100,000 - LKR 130,000'},
];

const ProductsGrid: React.FC = () => {
  return (
    <div className="products-grid">
      <table className="products-table">
        <tbody>
          {Array.from({ length: Math.ceil(products.length / 5) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {products.slice(rowIndex * 5).map((product, colIndex) => (
                <td key={colIndex} className="product-cell">
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </td>
              ))}
              {/* Add empty <td> if the last row has less than 5 columns */}
              {rowIndex === Math.floor(products.length / 5) &&
                Array.from({ length: 4 - (products.length % 5) }).map((_, emptyIndex) => (
                  <td key={`empty-${emptyIndex}`} className="product-cell"></td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsGrid;
