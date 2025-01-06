import React, { useState } from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../components/FavoritesContext'; // Import the custom hook

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { incrementFavorites, decrementFavorites } = useFavorites(); // Use context

  const handleFavoriteClick = () => {
    if (isFavorite) {
      decrementFavorites(); // Decrease the favorite count in context
    } else {
      incrementFavorites(); // Increase the favorite count in context
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="heart-icon" onClick={handleFavoriteClick}>
        <FontAwesomeIcon
          icon={isFavorite ? faHeartFilled : faHeartEmpty}
          className="heart-icon"
          style={{ color: isFavorite ? '#16263E' : 'black' }}
        />
      </div>
      <h2 className="name">{name}</h2>
      <span className="new-arrival">New Arrival</span>
      <br />
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductCard;
