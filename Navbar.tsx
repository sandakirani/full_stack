import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../components/FavoritesContext'; // Import the custom hook
import logo from '../assets/cwb.png';

const Navbar: React.FC = () => {
  const { favoritesCount } = useFavorites(); // Use the context
  const [cartCount, setCartCount] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search for:', searchQuery);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="navbar">
      <img src={logo} className="logo1" alt="Logo" />
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <FontAwesomeIcon icon={faSearch} className="fa-search" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for phones..."
          className="search-input"
        />
      </form>
      <div className="icons-container">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faHeart} className="icon1" onClick={() => navigate('/wishlist')} />
          <span className="badge">{favoritesCount}</span>
        </div>

        <div className="icon-wrapper" onClick={addToCart}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon1" onClick={() => navigate('/addcart')} />
          <span className="badge">{cartCount}</span>
        </div>

        <FontAwesomeIcon icon={faUser} className="account" onClick={() => navigate('/account')} />
      </div>
    </div>
  );
};

export default Navbar;
