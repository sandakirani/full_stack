import React, { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, totalItems, totalPrice, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      console.log('Modal open with total items:', totalItems, 'and total price:', totalPrice); // Log modal data
      const timer = setTimeout(onClose, 3000); // Close modal after 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isOpen, totalItems, totalPrice, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</p>
      </div>
    </div>
  );
};

export default Modal;
