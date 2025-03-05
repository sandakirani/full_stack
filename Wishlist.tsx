import React, { useState, useEffect } from 'react';
import { useWishlist } from '../HeaderInside/WishlistContext';
import { useFavorites } from '../Header/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import './Wishlist.css';

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
      const difference = wishlist.length - favoritesCount;
      if (difference > 0) {
        incrementFavorites(difference);
      } else {
        decrementFavorites(Math.abs(difference));
      }
    }
  }, [wishlist.length, favoritesCount, incrementFavorites, decrementFavorites]);

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

  const brandMapping: { [key: string]: string } = {
    iphone: "AppleProducts",
    samsung: "SamsungProducts",
    pixel: "PixelProducts",
    vivo: "VivoProducts",
    xiaomi: "XiaomiProducts",
  };
  
  const getBrandFromName = (productName: string): string | null => {
    const nameLower = productName.toLowerCase();
    for (const keyword in brandMapping) {
      if (nameLower.includes(keyword)) {
        return brandMapping[keyword];
      }
    }
    return null; // Return null if no match is found
  };
  
  const handleImageClick = (productId: number) => {
    const product = wishlist.find((item) => item.id === productId);
    if (product) {
      const brand = getBrandFromName(product.name) || "unknown";
      navigate(`/${brand}/${productId}`);
    }
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
            <button onClick={handleRemoveSelected} disabled={selectedItems.length === 0}>Remove Selected</button>
            <label>
              <input type="checkbox" checked={selectedItems.length === wishlist.length} onChange={handleSelectAll} />
              Select all
            </label>
          </div>

          <div className="wishlist-items">
            {wishlist.map((item: WishlistItem) => (
              <div className="wishlist-item" key={item.id}>
                <div className="item-actions">
                  <button className="remove" onClick={() => removeFromWishlist(item.id)}>x</button>
                  <input type="checkbox" checked={selectedItems.includes(item.id)} onChange={() => handleSelect(item.id)} />
                </div>
                <div className="item-details">
                  <img src={item.image} alt={item.name} onClick={() => handleImageClick(item.id)}/>
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
