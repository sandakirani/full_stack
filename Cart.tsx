import React, { useState } from 'react';
import './Cart.css';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  onQuantityChange: (name: string, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, onQuantityChange }) => {
  const handleQuantityChange = (amount: number) => {
    const newQuantity = Math.max(0, quantity + amount); // Ensure quantity doesn't go below zero
    onQuantityChange(name, newQuantity);
  };

  return (
    <div className="cart-item">
      <span className="item-name">{name}</span>
      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(-1)} className="minus">-</button>
        <input type="number" value={quantity} readOnly className="quantity" />
        <button onClick={() => handleQuantityChange(1)} className="plus">+</button>
      </div>
      <span className="item-total-price">{(price * quantity).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
    </div>
  );
};

const Cart: React.FC = () => {
  const [items, setItems] = useState([
    { name: 'Samsung Galaxy S24 Ultra', price: 450000, quantity: 0 },
    { name: 'Samsung Galaxy S24 ', price: 300000, quantity: 0 },
    { name: 'Samsung Galaxy Z Fold6', price: 70000, quantity: 0 },
    { name: 'Samsung Galaxy Z Flip6', price: 420000, quantity: 0 },
    { name: 'Samsung Galaxy S23 Ultra', price: 400000, quantity: 0 },
    { name: 'Samsung Galaxy S23 FE', price: 200000, quantity: 0 },
    { name: 'Samsung Galaxy A55 5G', price: 120000, quantity: 0 },
    { name: 'Samsung Galaxy A35 5G', price: 100000, quantity: 0 },
    { name: 'Samsung Galaxy M55 5G', price: 170000, quantity: 0 },
    { name: 'Google Pixel 9 Pro XL', price: 455000, quantity: 0 }, 
    { name: 'Google Pixel 9 Pro', price: 287900, quantity: 0 },
    { name: 'Google Pixel 9', price: 264999, quantity: 0 },
    { name: 'Google Pixel 9 Pro Fold', price: 560000, quantity: 0 },
    { name: 'Google Pixel 8 Pro', price: 279900, quantity: 0 },
    { name: 'Google Pixel 8 ', price: 212950, quantity: 0 },
    { name: 'Google Pixel 8A', price: 150000, quantity: 0 },
    { name: 'Google Pixel 7 Pro', price: 220000, quantity: 0 }, 
    { name: 'iPhone 16 Pro Max', price: 684900, quantity: 0 }, 
    { name: 'iPhone 16 Pro', price: 649000, quantity: 0 },
    { name: 'iPhone 16 Plus', price: 504900, quantity: 0 },
    { name: 'iPhone 15 Pro Max', price: 664900, quantity: 0 },
    { name: 'iPhone 15 Pro', price: 619900, quantity: 0 },
    { name: 'iPhone 15 Plus ', price: 489900, quantity: 0 },
    { name: 'iPhone 15', price: 449900, quantity: 0 },
    { name: 'iPhone 14 Plus', price: 459900, quantity: 0 },   
    { name: 'iPhone 14 ', price: 409900, quantity: 0 },   
    { name: 'Vivo V21 5G', price: 95000, quantity: 0 },   
    { name: 'Vivo Y1s 3GB', price: 38000, quantity: 0 },   
    { name: 'Vivo V20 SE', price: 85000, quantity: 0 },   
    { name: 'Vivo V20 ', price: 80000, quantity: 0 },   
    { name: 'Vivo Y27S', price: 95000, quantity: 0 },   
    { name: 'Vivo Y22s', price: 65000, quantity: 0 },   
    { name: 'Vivo Y17S', price: 60000, quantity: 0 },
    { name: 'Vivo Y19s', price: 52000, quantity: 0 },   
    { name: 'Vivo V29 5G', price: 130000, quantity: 0 },   
    { name: 'Xiaomi 14 Ultra', price: 399900, quantity: 0 },   
    { name: 'Xiaomi Redmi Note 13 Pro+', price: 104990, quantity: 0 },   
    { name: 'Xiaomi Redmi Note 13 Pro', price: 74990, quantity: 0 },   
    { name: 'Xiaomi Redmi Note 13', price: 59990, quantity: 0 },   
    { name: 'Xiaomi Redmi Note 12S', price: 69500, quantity: 0 },   
    { name: 'Xiaomi  Redmi Note 12 Pro+', price: 120000, quantity: 0 },
    { name: 'Xiaomi  Redmi Note 12 Pro', price: 89900, quantity: 0 },  
    { name: 'Xiaomi Redmi Note 14 Pro+', price: 120000, quantity: 0 },  
    
    

    // Add other items
  ]);

  const handleQuantityChange = (name: string, newQuantity: number) => {
    const updatedItems = items.map(item =>
      item.name === name ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <div className="product-list">
        {items.map(item => (
          <CartItem
            key={item.name}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="cart-total-container">
        <div className="cart-total">
          Total: <span id="total-price">{totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
        </div>
        <button id="order-now">Order Now</button>
      </div>
    </div>
  );
};

export default Cart;
