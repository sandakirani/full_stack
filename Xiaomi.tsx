import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Brand.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../components/FavoritesContext';
import ultra14black from '../assets/Xiaomi/Xiaomi 14 Ultra black.webp';
import ultra14white from '../assets/Xiaomi/Xiaomi 14 Ultra white.webp';
import Note13proplusblack from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Midnight Black.webp';
import Note13proplusgreen from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Mint Green.webp';
import Note13proplusblue from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Ice Blue.jpg';
import Note13problack from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Midnight Black.jpg';
import Note13progreen from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Mint Green.jpg';
import Note13problue from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Ice Blue.jpg';
import Note13black from '../assets/Xiaomi/Xiaomi Redmi Note 13  Midnight Black.jpg';
import Note13green from '../assets/Xiaomi/Xiaomi Redmi Note 13  Mint Green.webp';
import Note13blue from '../assets/Xiaomi/Xiaomi Redmi Note 13  Ice Blue.jpg';
import Note13sunset from '../assets/Xiaomi/Xiaomi Redmi Note 13  Ocean Sunset.webp';
import Note12sblack from '../assets/Xiaomi/Xiaomi Redmi Note 12S Onyx Black.jpg';
import Note12sgreen from '../assets/Xiaomi/Xiaomi Redmi Note 12S Pearl Green.jpg';
import Note12sblue from '../assets/Xiaomi/Xiaomi Redmi Note 12S ice blue.png';
import Note12proplusblack from '../assets/Xiaomi/Xiaomi Redmi Note 12 pro+  Midnight Black.jpg';
import Note12propluswhite from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro+ Polar White.jpg';
import Note12proplusblue from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro+ Sky Blue.jpg';
import Note12problack from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Onyx Black.png';
import Note12problue from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Frosted Blue.webp';
import Note12propurple from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Stardust Purple.jpg';


const xiaomiproducts = [
  {
    id: 1,
    name: 'Xiaomi 14 Ultra',
    price: 'LKR 389,900 - LKR 399,900',
    stock: true,
    images: {
      'black': ultra14black,
      'white': ultra14white
    },
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 13 Pro+',
    price: 'LKR 89,990 - LKR 104,990',
    stock: false,
    images: {
      'black': Note13proplusblack,
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
      'black': Note13problack,
      '#98ff98': Note13progreen,
      '#dcf3ff': Note13problue
    },
  },

  {
    id: 4,
    name: 'Xiaomi Redmi Note 13',
    price: 'LKR 48,990 - LKR 59,990',
    stock: false,
    images: {
      'black': Note13black,
      '#98ff98': Note13green,
      '#dcf3ff': Note13blue,
      '#4a7c99':Note13sunset
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
    price: ' LKR 104,990 - LKR 120,000',
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
];

const XiaomiPage: React.FC = () => {
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

 
  const handleFavoriteClick = (productId: number) => {
    console.log(`Clicked product ID: ${productId}`);
    console.log(`Is favorited before click: ${favorites[productId] === 1}`);
  
    const isFavorited = favorites[productId] === 1;
  
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: isFavorited ? 0 : 1,
    }));
  
    if (isFavorited) {
      console.log('Decrementing favorites count');
      decrementFavorites();
    } else {
      console.log('Incrementing favorites count');
      incrementFavorites();
    }
  };
  
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleNavigation = (brand: string) => {
    navigate(`/${brand.toLowerCase()}`, { state: { brand } });
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
        {currentBrand !== 'Home' && <Link to="/apple"><strong>{currentBrand}</strong></Link>}
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
        <button onClick={() => handleNavigation('Allphones')} className="brand-button">
          All phones
        </button>
      </div>
      <h2 className='brandname'>Apple</h2>
      
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
              src={product.images[selectedColors[product.id] as keyof typeof product.images]}
              alt={`${product.name} in ${selectedColors[product.id]}`}
              className="product-image"
            />
            <div className="heart-icon1" onClick={() => handleFavoriteClick(product.id)}>
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
                    border: selectedColors[product.id] === color ? '2px solid black' : 'none',
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
