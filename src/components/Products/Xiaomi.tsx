import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import './Brand.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../Header/FavoritesContext';
import { useWishlist } from '../HeaderInside/WishlistContext';

import ultra14black from '../../assets/Xiaomi/Xiaomi 14 Ultra black.jpg';
import ultra14white from '../../assets/Xiaomi/Xiaomi 14 Ultra white.jpg';
import Note13proplusblack from '../../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Midnight Black.jpg';
import Note13proplusgreen from '../../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Mint Green.jpg';
import Note13proplusblue from '../../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Ice Blue.jpg';
import Note13problack from '../../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Midnight Black.jpg';
import Note13proWhite from '../../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Arctic White.jpg';
import Note13propurple from '../../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Lavender Purple.jpg';
import Note13black from '../../assets/Xiaomi/Xiaomi Redmi Note 13  Midnight Black.jpg';
import Note13green from '../../assets/Xiaomi/Xiaomi Redmi Note 13  Mint Green.jpg';
import Note13blue from '../../assets/Xiaomi/Xiaomi Redmi Note 13  Ice Blue.jpg';
import Note13sunset from '../../assets/Xiaomi/Xiaomi Redmi Note 13  Ocean Sunset.webp';
import Note12sblack from '../../assets/Xiaomi/Xiaomi Redmi Note 12S Onyx Black.jpg';
import Note12sgreen from '../../assets/Xiaomi/Xiaomi Redmi Note 12S Pearl Green.jpg';
import Note12sblue from '../../assets/Xiaomi/Xiaomi Redmi Note 12S ice blue.png';
import Note12proplusblack from '../../assets/Xiaomi/Xiaomi Redmi Note 12 pro+  Midnight Black.jpg';
import Note12propluswhite from '../../assets/Xiaomi/Xiaomi Redmi Note 12 Pro+ Polar White.jpg';
import Note12proplusblue from '../../assets/Xiaomi/Xiaomi Redmi Note 12 Pro+ Sky Blue.jpg';
import Note12problack from '../../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Onyx Black.png';
import Note12problue from '../../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Frosted Blue.jpg';
import Note12propurple from '../../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Stardust Purple.jpg';
import Note14proplusblack from '../../assets/Xiaomi/Xiaomi Redmi Note 14 Pro+ Titan Black.jpg';
import Note14propluspurple from '../../assets/Xiaomi/Xiaomi Redmi Note 14 Pro+ phantom Purple.jpg';
import Note14proplusblue from '../../assets/Xiaomi/Xiaomi Redmi Note 14 Pro+ spectre Blue.jpg';


const xiaomiproducts = [
  {
    id: 1,
    name: 'Xiaomi 14 Ultra',
    price: 'LKR 389,900 - LKR 399,900',
    stock: true,
    images: {
      'Black': ultra14black,
      'White': ultra14white
    },
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 13 Pro+',
    price: 'LKR 89,990 - LKR 104,990',
    stock: false,
    images: {
      'Black': Note13proplusblack,
      '#98ff98': Note13proplusgreen,
      '#dcf3ff': Note13proplusblue
    },
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 13 Pro',
    price: 'LKR 61,490 - LKR 74,990',
    stock: true,
    images: {
      'Black': Note13problack,
      '#F8F9FA': Note13proWhite,
      '#E6E6FA': Note13propurple
    },
  },

  {
    id: 4,
    name: 'Xiaomi Redmi Note 13',
    price: 'LKR 48,990 - LKR 59,990',
    stock: false,
    images: {
      'Black': Note13black,
      '#98ff98': Note13green,
      '#dcf3ff': Note13blue,
      '#FF7F50 ':Note13sunset
    },
  },
  {
    id: 5,
    name: 'Xiaomi Redmi Note 12S',
    price: 'LKR 60,500 - LKR 69,500',
    stock: true,
    images: {
      'Black': Note12sblack,
      '#45644A': Note12sgreen,
      '#dcf3ff': Note12sblue
    },
  },

  {
    id: 6,
    name: 'Xiaomi Redmi Note 12 Pro+',
    price: 'LKR 104,990 - LKR 120,000',
    stock: true,
    images: {
      '#00040D': Note12proplusblack,
      '#eef4f4': Note12propluswhite,
      '#87CEEB': Note12proplusblue
    },
  },
  {
    id: 7,
    name: 'Xiaomi Redmi Note 12 Pro',
    price: 'LKR 79,490 - LKR 89,900',
    stock: false,
    images: {
      '#353935': Note12problack,
      '#ACD5F3': Note12problue,
      '#6C3BAA': Note12propurple
    },
  },
  {
    id: 8,
    name: 'Xiaomi Redmi Note 14 Pro+',
    price: 'LKR 90,000 - LKR 120,000',
    stock: false,
    images: {
      'Black': Note14proplusblack,
      '#E3E0EA': Note14propluspurple,
      '#98bfc9': Note14proplusblue
    },
  },
];

const XiaomiPage: React.FC = () => {

  interface product {
    id: number;
    name: string;
    price: string;
    images: { [color: string]: string | undefined };  // Allow string or undefined
  }

  const [selectedColors, setSelectedColors] = useState<{ [productId: number]: string }>(
    xiaomiproducts.reduce((acc, product) => {
      const defaultColor = Object.keys(product.images)[0]; // Set the first color as the default
      acc[product.id] = defaultColor;
      return acc;
    }, {} as { [productId: number]: string })
  );
  const { incrementFavorites, decrementFavorites } = useFavorites();
  const [favorites, setFavorites] = useState<{ [id: number]: number }>({}); // Change to track count of favorites
  const [sortOption, setSortOption] = useState('latest');
  const [currentBrand, setCurrentBrand] = useState<string>('Home');
  const {addToWishlist, removeFromWishlist } = useWishlist(); // Use Wishlist Context

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get the brand from the state passed during navigation
    const state = location.state as { brand: string };
    if (state?.brand) {
      setCurrentBrand(state.brand);
    }
  }, [location.state]);

  const handleColorChange = (productId: number, color: string) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

 
  const handleFavoriteClick = (product: product) => {
    console.log(`Clicked product ID: ${product.id}`);
    console.log(`Is favorited before click: ${favorites[product.id] === 1}`);
  
    const isFavorited = favorites[product.id] === 1;
  
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [product.id]: isFavorited ? 0 : 1,
    }));
  
    if (isFavorited) {
      console.log('Decrementing favorites count');
      decrementFavorites();
      removeFromWishlist(product.id);
    } else {
      console.log('Incrementing favorites count');
      incrementFavorites();
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[selectedColors[product.id] as keyof typeof product.images] as string, // Type assertion to string
      });
    }
  };
  
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleNavigation = (brand: string) => {
    navigate(`/${brand.toLowerCase()}`, { state: { brand } });
  };
  const handleImageClick = (productId: number) => {
    navigate(`/xiaomiProducts/${productId}`); // Navigate to a unique route for the product
  };

  const sortedProducts = [...xiaomiproducts].sort((a, b) => {
    switch (sortOption) {
      case 'popularity':
        return b.stock === a.stock ? 0 : b.stock ? -1 : 1;
      case 'latest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="brand-page">
      <Navbar />
      <div className="breadcrumb">
        <Link to="/home">Home</Link> {currentBrand !== 'Home' && ` > `}
        {currentBrand !== 'Home' && <Link to="/xiaomi"><strong>{currentBrand}</strong></Link>}
      </div>
      <div className="brand-buttons">
        <button onClick={() => handleNavigation('Apple')} className="brand-button">
          Apple
        </button>
        <button onClick={() => handleNavigation('Samsung')} className="brand-button">
          Samsung
        </button>
        <button onClick={() => handleNavigation('Pixel')} className="brand-button">
          Pixel
        </button>
        <button onClick={() => handleNavigation('Xiaomi')} className="brand-button">
          Xiaomi
        </button>
        <button onClick={() => handleNavigation('Vivo')} className="brand-button">
          Vivo
        </button>
        
      </div>
      <h2 className='brandname'>Xiaomi</h2>
      
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select className="select" id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="popularity">Popularity</option>
          <option value="latest">Latest</option>
        </select>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product">
           <img
              src={product.images[selectedColors[product.id] as keyof typeof product.images]} // Display the selected color's image
              alt={`${product.name} image`} // Descriptive alt text
              className="product-image"
              onClick={() => handleImageClick(product.id)} // Only pass the product.id
              style={{ cursor: 'pointer' }}
            />
            <div className="heart-icon1" onClick={() => handleFavoriteClick(product)}>
              <FontAwesomeIcon
                icon={favorites[product.id] ? faHeartFilled : faHeartEmpty}
                style={{ color: favorites[product.id] ? '#16263E' : 'black', cursor: 'pointer' }}
              />
            </div>
            {!product.stock && <p className="out-of-stock">Out of Stock</p>}
            <h3 className="pname">{product.name}</h3>
            <p className="price">LKR {product.price.toLocaleString()}</p>
            <div className="color-selector">
              {Object.keys(product.images).map((color) => (
                <div
                  key={color}
                  className={`color-circle ${color.toLowerCase().replace(' ', '-')}`}
                  onClick={() => handleColorChange(product.id, color)}
                  style={{
                    backgroundColor: color.toLowerCase(),
                  border: selectedColors[product.id] === color ? "2px solid #243653" : "2px solid black",
                  cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default XiaomiPage;
