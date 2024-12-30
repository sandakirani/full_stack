import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  availability: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, availability }) => {
  const nameStyle: React.CSSProperties = {
    fontSize: "20px",
    color: "black",
    textAlign: "center", // Ensure this is a valid value
  };

  const imageStyle: React.CSSProperties ={
    width: '200px', 
    height: '200px', 
    objectFit: 'contain', 
    marginBottom: '15px',
    marginTop: '20px', 
  }
  
  const priceStyle: React.CSSProperties = {
    fontSize: "16px",
    color: "green",
    textAlign: "right", // Ensure this is valid
  };
  
  const availabilityStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "red",
    textAlign: "left", // Ensure this is valid
  };
  

  const cardStyle: React.CSSProperties ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align all content to the center
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    width: '300px',
    height: '380px',
  };

  return (
    <div className="product-card" style={cardStyle}>
      <h3 style={nameStyle}>{name}</h3>
      <img
        src={image}
        alt={name}
        style={imageStyle}
      />
      <p style={priceStyle}>{price}</p>
      <p style={availabilityStyle}>{availability}</p>
    </div>
  );
};

export default ProductCard;