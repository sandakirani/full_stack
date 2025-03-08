import React from 'react';
import './Cart.css';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onQuantityChange: (id: string, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, imageUrl, onQuantityChange }) => {
  const handleQuantityChange = (amount: number) => {
    const newQuantity = Math.max(0, quantity + amount); // Ensure quantity doesn't go below zero
    onQuantityChange(id, newQuantity);
  };

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} className="item-thumbnail" />
      <span className="item-name">{name}</span>
      <span className="item-price">{price.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(-1)} className="minus">-</button>
        <input type="number" value={quantity} readOnly className="quantity" />
        <button onClick={() => handleQuantityChange(1)} className="plus">+</button>
      </div>
      <span className="item-total-price">{(price * quantity).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
    </div>
  );
};

export default CartItem;
