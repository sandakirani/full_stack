import React from 'react';
import { useState } from 'react';
import './OrderSummary.css';
import { FaArrowRight } from 'react-icons/fa'; // Font Awesome

interface Product {
  name: string;
  color: string;
  warranty: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrderProps {
  orderNumber: string;
  orderDate: string;
  customerName: string;
  address: string;
  deliveryMethod: string;
  paymentMethod: string;
  products: Product[];
  subTotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
}

const OrderSummary: React.FC<OrderProps> = ({
  orderNumber,
  orderDate,
  customerName,
  address,
  deliveryMethod,
  paymentMethod,
  products,
  subTotal,
  discount,
  deliveryFee,
  total,
}) => {

  const [currentImage, setCurrentImage] = useState(products[0].image);

  return (
    <div className="order-summary-container">
      <header className="header">
        <h1>Order Summary</h1>
      </header>

      <div className='first-box'>
      <table className="order-details">
        <tr>
          <td><strong>Order Number:</strong></td>
          <td>{orderNumber}</td>
        </tr>
        <tr><td><strong>Order Date:</strong></td> 
        <td>{orderDate}</td>
        </tr>
        <tr>
          <td><strong>Name:</strong></td> 
          <td>{customerName}</td>
        </tr>
        <tr>
          <td><strong>Address:</strong></td>
          <td><br />{address.split(',').map((line, idx) => (
            <span key={idx}>{line},<br /></span>
        ))}</td>
        </tr>
        <tr>
          <td><strong>Delivery Method:</strong></td> 
          <td>{deliveryMethod}</td>
        </tr>
        <tr>
          <td><strong>Payment Method:</strong></td> 
          <td>{paymentMethod}</td></tr>
      </table>

      <div className='image-container'>
      <img src={currentImage} alt={products[0]?.name || 'Product'} />
      </div>
      </div>

      <table className="product-list">
        <thead>
            <th><strong>Product</strong></th>
            <th><strong>Quantity</strong></th>
            <th className='sub-total'><strong>Sub Total</strong></th>
        </thead>
        {products.map((product, index) => (
          <tr key={index} className="product-item">
            <td className='product' onMouseOver={() => setCurrentImage(product.image)}><p><strong>{product.name}</strong></p>
            <p className='product-details'>Color: {product.color}</p>
            <p className='product-details'>Warranty: {product.warranty}</p></td>
            <td className='quantity'><p>{product.quantity}</p></td>
            <td><p className='prices'>Rs.{product.price.toFixed(2)}</p></td>
          </tr>
        ))}
      </table>

      <table className="price-summary">
        <tr>
          <td><strong>Sub Total:</strong></td> 
          <td className='price'>Rs.{subTotal.toFixed(2)}</td>
        </tr>
          <tr><td><strong>Discount:</strong></td>
          <td className='price'>Rs.{discount.toFixed(2)}</td> 
        </tr>
        <tr>
          <td><strong>Delivery Fee:</strong></td> 
          <td className='price'>Rs.{deliveryFee.toFixed(2)}</td>
        </tr>
        <tr>
          <td><strong>Total:</strong></td>
          <td className='price'>Rs.{total.toFixed(2)}</td> 
        </tr>
      </table>

      <button className="track-order-button">
        Track Your Order
        <FaArrowRight className='arrow' onClick={() => window.location.href = '/track-order'} />
      </button>
    </div>
  );
};

export default OrderSummary;
