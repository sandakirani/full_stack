import React from 'react';
import ProductCard from './ProductCard';
import { useWishlist } from '../HeaderInside/WishlistContext';
import samsung from '../../assets/NewArrival/samsung.jpg';
import apple from '../../assets/NewArrival/iphone.jpg';
import pixel from '../../assets/NewArrival/Googlepixel.jpg';
import xiaomi from '../../assets/NewArrival/xiaomi.jpg';
import vivo from '../../assets/NewArrival/vivo.webp';
import './ProductGrid.css';

const products = [
  { id: 1, image: samsung, name: 'Samsung Galaxy S24', price: 'LKR 250,000 - LKR 300,000' },
  { id: 2, image: apple, name: 'iPhone 16 Pro Max', price: 'LKR 350,000 - LKR 400,000' },
  { id: 3, image: pixel, name: 'Google Pixel 9 Pro XL', price: 'LKR 275,000 - LKR 325,000' },
  { id: 4, image: xiaomi, name: 'Xiaomi Redmi Note 14 Pro+', price: 'LKR 90,000 - LKR 120,000' },
  { id: 5, image: vivo, name: 'Vivo V29 5G', price: 'LKR 100,000 - LKR 130,000' },
];

const ProductsGrid: React.FC = () => {
  const { addToWishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="products-grid">
      <table className="products-table">
        <tbody>
          {Array.from({ length: Math.ceil(products.length / 5) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {products.slice(rowIndex * 5, rowIndex * 5 + 5).map((product, colIndex) => (
                <td key={colIndex} className="product-cell">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    onAddToWishlist={() => addToWishlist(product)}
                    onRemoveFromWishlist={() => removeFromWishlist(product.id)}
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
