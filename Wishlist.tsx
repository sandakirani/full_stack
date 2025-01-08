import React, { useState } from 'react';
import './Wishlist.css';

interface WishlistItem {
  id: number;
  name: string;
  priceRange: string;
  image: string;
}

interface WishlistProps {
  items: WishlistItem[];
  onRemoveItem: (id: number) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ items, onRemoveItem }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => onRemoveItem(id));
    setSelectedItems([]);
  };

  if (items.length === 0) {
    return (
      <div className="wishlist-empty">
        <img
        src="../src/assets/EmptyWishlist.jpg" 
        alt="Empty Wishlist Icon"
        className="wishlist-empty-icon"
      />
        <h2>This wishlist is empty</h2>
        <p>
          You don't have any products in the wishlist yet. You will find a lot
          of interesting products on our "Shop" page.
        </p>
        <button onClick={() => window.location.href = '/shop'}>RETURN TO SHOP</button>
      </div>
    );
  }

  return (
    <div className="wishlist">
      <h2>YOUR PRODUCTS WISHLIST</h2>
      <div className="wishlist-actions">
        <button onClick={handleRemoveSelected}>×</button>
        <div className='remove-text'>Remove</div>
        <label>
          <input
            type="checkbox"
            checked={selectedItems.length === items.length}
            onChange={handleSelectAll}
          />
          Select all
        </label>
      </div>
      <div className="wishlist-items">
        {items.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <div className='item-actions'>
            <button className="remove" onClick={() => onRemoveItem(item.id)}>
              × 
            </button>
            <div className='remove-text'>Remove</div>
            <input
              type="checkbox" 
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelect(item.id)}
            />
            </div>
            <div className='item-details'>
            <img src={item.image} alt={item.name} />
            <div className="details">
              <h3>{item.name}</h3>
              <p>{item.priceRange}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
