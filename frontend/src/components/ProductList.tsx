import React from "react";
import Navbar from "../home/navbar";
import ProductCard from "../ProductList/ProductCard";
import BrandSection from "../home/BrandSection";
import Footer from "../home/Footer";
import apple1 from "../assets/iphone_16_pro_max.jpg";
import "./ProductList.css";

const products = [
  { image: apple1, name: "Apple iPhone 16 Pro Max 1TB", price: "Rs. 488,000.00", availability: "OUT OF STOCK" },
  { image: apple1, name: "Apple iPhone 16 Pro max 512GB", price: "Rs. 454,500.00", availability: "In Stock" },
  { image: apple1, name: "Apple iPhone 16 Pro Max 256GB", price: "Rs. 399,000.00", availability: "In Stock" },
  { image: apple1, name: "Apple iPhone 16 1TB", price: "Rs. 424,000", availability: "In Stock" },
  
];

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="products">
        <table className="products-table">
          <tbody>
            {Array.from({ length: Math.ceil(products.length / 4) }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {products.slice(rowIndex * 4, rowIndex * 4 + 4).map((product, colIndex) => (
                  <td key={colIndex} className="product-cell">
                    <ProductCard
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      availability={product.availability}
                    />
                  </td>
                ))}
                {/* Add empty <td> if the last row has less than 4 columns */}
                {rowIndex === Math.floor(products.length / 4) &&
                  Array.from({ length: 4 - (products.length % 4) }).map((_, emptyIndex) => (
                    <td key={`empty-${emptyIndex}`} className="product-cell"></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BrandSection />
      <Footer />
    </div>
  );
};

export default HomePage;
