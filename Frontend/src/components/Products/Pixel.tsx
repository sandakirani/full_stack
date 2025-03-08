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

import pro9XLobsidian from '../../assets/Pixel/Google Pixel 9 Pro XL Obsidian.jpg';
import pro9XLporcelain from '../../assets/Pixel/Google Pixel 9 Pro XL Porcelain.jpg';
import pro9XLhazel from '../../assets/Pixel/Google Pixel 9 Pro XL Hazel.jpg';
import pro9FoldObsidian from '../../assets/Pixel/Google Pixel 9 Pro Fold Obsidian.jpg';
import pro9Foldporcelain from '../../assets/Pixel/Google Pixel 9 Pro Fold Porcelain.jpg';
import pro8obsidian from '../../assets/Pixel/Google Pixel 8 Pro Obsidian.jpg';
import pro8bay from '../../assets/Pixel/Google Pixel 8 Pro bay.jpg';
import Lemongrass8 from '../../assets/Pixel/Google Pixel 8 Lemongrass.jpg';
import Obsidian8 from '../../assets/Pixel/Google Pixel 8 Obsidian.jpg';
import porcelain8 from '../../assets/Pixel/Google Pixel 8 porcelain.jpg';
import A8Obsidian from '../../assets/Pixel/Google Pixel 8A Obsidian.jpg';
import A8porcelain from '../../assets/Pixel/Google Pixel 8A porcelain.avif';
import pro7obsidian from '../../assets/Pixel/google pixel 7 pro obsidian.jpg';
import pro7hazel from '../../assets/Pixel/Google Pixel 7 Pro hazel.jpg';
import pro7snow from '../../assets/Pixel/Google Pixel 7 Pro snow.jpg';



const pixelproducts = [
  {
    id: 1,
    name: 'Google Pixel 9 Pro XL',
    price: 'LKR 254,500 - LKR 455,000',
    stock: true,
    images: {
      '#71627a': pro9XLobsidian,
      '#e9e0d5': pro9XLporcelain,
      '#D4CEC3': pro9XLhazel
    },
  },
  {
    id: 2,
    name: 'Google Pixel 9 Pro',
    price: 'LKR 261,900 - LKR 287,900',
    stock: false,
    images: {
      '#71627a': pro9XLobsidian,
      '#e9e0d5': pro9XLporcelain,
      '#D4CEC3': pro9XLhazel
    },
  },
  {
    id: 3,
    name: 'Google Pixel 9',
    price: 'LKR 199,000 - LKR 264,999',
    stock: true,
    images: {
      '#71627a': pro9XLobsidian,
      '#e9e0d5': pro9XLporcelain,
      '#D4CEC3': pro9XLhazel
    },
  },

  {
    id: 4,
    name: 'Google Pixel 9 Pro Fold',
    price: 'LKR 439,000 - LKR 560,000',
    stock: false,
    images: {
      '#71627a': pro9FoldObsidian,
      '#e9e0d5': pro9Foldporcelain
    },
  },
  {
    id: 5,
    name: 'Google Pixel 8 Pro',
    price: 'LKR 196,000 - LKR 212,950',
    stock: true,
    images: {
      '#71627a': pro8obsidian,
      '#576D72': pro8bay
    },
  },

  {
    id: 6,
    name: 'Google Pixel 8',
    price: 'LKR 199,900 - LKR 279,900',
    stock: true,
    images: {
      '#969580': Lemongrass8,
      '#71627a': Obsidian8,
      '#F2F2F2': porcelain8
    },
  },
  {
    id: 7,
    name: 'Google Pixel 8A',
    price: 'LKR 135,000 - LKR 150,000',
    stock: false,
    images: {
      '#71627a': A8Obsidian,
      '#EFF2F3': A8porcelain
    },
  },
  {
    id: 8,
    name: 'Google Pixel 7 Pro',
    price: 'LKR 180,000 - LKR 220,000',
    stock: true,
    images: {
      '#71627a': pro7obsidian,
      '#C8B575': pro7hazel,
      '#FFFAFA': pro7snow
    },
  },
  
];

const PixelPage: React.FC = () => {

  interface product {
    id: number;
    name: string;
    price: string;
    images: { [color: string]: string | undefined };  // Allow string or undefined
  }

  const [selectedColors, setSelectedColors] = useState<{ [productId: number]: string }>(
    pixelproducts.reduce((acc, product) => {
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
    navigate(`/pixelProducts/${productId}`); // Navigate to a unique route for the product
  };

  const sortedProducts = [...pixelproducts].sort((a, b) => {
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
        
      </div>
      <h2 className='brandname'>Pixel</h2>
      
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
                style={{ color: favorites[product.id] ? "#16263E" : "black", cursor: "pointer" }}
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

export default PixelPage;
