import React, { useState, useEffect } from 'react';
import { useWishlist } from '../HeaderInside/WishlistContext';
import { useFavorites } from '../Header/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import './Wishlist.css';

// Define the expected type
interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const navigate = useNavigate();
  const { favoritesCount, incrementFavorites, decrementFavorites } = useFavorites();

  // Sync favoritesCount with wishlist length
  useEffect(() => {
    if (wishlist.length !== favoritesCount) {
      decrementFavorites(favoritesCount); // Reset count
      incrementFavorites(wishlist.length); // Set correct count
    }
  }, [wishlist.length]);
  

  const handleSelect = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedItems(selectedItems.length === wishlist.length ? [] : wishlist.map((item) => item.id));
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => removeFromWishlist(id));
    setSelectedItems([]);
  };

  const handleNavigateHome = () => {
    navigate('/home');
  };

  return (
    <div className="wishlist-page">
      <Navbar />
      <h2 className="wishlist-title">YOUR PRODUCTS WISHLIST</h2>

      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
          <FontAwesomeIcon icon={faHeartEmpty} className="wishlist-empty-icon" />
          <h2>This wishlist is empty</h2>
          <p>You don't have any products in the wishlist yet. You will find a lot of interesting products on our "Home" page.</p>
          <button onClick={handleNavigateHome}>RETURN TO HOME</button>
        </div>
      ) : (
        <div className="wishlist-content">
          <div className="wishlist-actions">
            <button onClick={handleRemoveSelected}>×</button>
            <div className="remove-text">Remove</div>
            <label>
              <input type="checkbox" checked={selectedItems.length === wishlist.length} onChange={handleSelectAll} />
              Select all
            </label>
          </div>

          <div className="wishlist-items">
            {wishlist.map((item: WishlistItem) => (
              <div className="wishlist-item" key={item.id}>
                <div className="item-actions">
                  <button className="remove" onClick={() => removeFromWishlist(item.id)}>×</button>
                  <div className="remove-text">Remove</div>
                  <input type="checkbox" checked={selectedItems.includes(item.id)} onChange={() => handleSelect(item.id)} />
                </div>
                <div className="item-details">
                  <img src={item.image} alt={item.name} />
                  <div className="details">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WishlistPage;
