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
import spromaxblack from '../assets/Apple/iPhone 16 Pro Max Black Titanium.jpg';
import spromaxwhite from '../assets/Apple/iPhone 16 Pro Max White Titanium.jpg';
import spromaxdesert from '../assets/Apple/iPhone 16 Pro Max Desert Titanium.jpg';
import spromaxnatural from '../assets/Apple/iPhone 16 Pro Max Natural Titanium.jpg';
import splusblack from '../assets/Apple/iPhone 16 Plus black.jpg';
import spluspink from '../assets/Apple/iPhone 16 Plus Pink.jpg';
import splusteal from '../assets/Apple/iPhone 16 Plus teal.jpg';
import splusultramarine from '../assets/Apple/iPhone 16 Plus Ultramarine.jpg';
import spluswhite from '../assets/Apple/iPhone 16 Plus white.jpeg';
import fipromaxblack from '../assets/Apple/iPhone 15 pro max black Titanium.jpg';
import fipromaxwhite from '../assets/Apple/iPhone 15 pro max White Titanium.jpg';
import fipromaxblue from '../assets/Apple/iPhone 15 Pro Max blue.jpg';
import fipromaxnatural from '../assets/Apple/iPhone 15 pro max Natural Titanium.jpg';
import fifplusblue from '../assets/Apple/iPhone 15 Plus blue.webp';
import fifpluspink from '../assets/Apple/iPhone 15 Plus pink.jpg';
import fifplusyellow from '../assets/Apple/iPhone 15 Plus yellow.jpg';
import foplusmidnight from '../assets/Apple/iPhone 14 Plus midnight.webp';
import fopluspurple from '../assets/Apple/iPhone 14 Plus purple.jpg';
import foplusred from '../assets/Apple/iPhone 14 Plus red.jpg';
import foplusstarlight from '../assets/Apple/iPhone 14 Plus starlight.webp';
import foplusyellow from '../assets/Apple/iPhone 14 Plus yellow.jpg';

const appleProducts = [
  {
    id: 1,
    name: 'iPhone 16 Pro Max',
    price: 'LKR 389,900 - LKR 684,900',
    stock: true,
    images: {
      'Black': spromaxblack,
      'White': spromaxwhite,
      '#FAD5A5': spromaxdesert,
      '#E5D3BF': spromaxnatural,
    },
  },
  {
    id: 2,
    name: 'iPhone 16 Pro',
    price: 'LKR 339,900 - LKR 649,900',
    stock: false,
    images: {
      'Black': spromaxblack,
      'White': spromaxwhite,
      '#FAD5A5': spromaxdesert,
      '#E5D3BF': spromaxnatural,
    },
  },
  {
    id: 3,
    name: 'iPhone 16 Plus',
    price: 'LKR 299,900 - LKR 504,900',
    stock: true,
    images: {
      'Black': splusblack,
      'Pink': spluspink,
      'Teal': splusteal,
      '#0437F2': splusultramarine,
      'White': spluswhite,
    },
  },

  {
    id: 4,
    name: 'iPhone 15 Pro Max',
    price: 'LKR 364,900 - LKR 664,900',
    stock: false,
    images: {
      'Black': fipromaxblack,
      'White': fipromaxwhite,
      'Blue': fipromaxblue,
      '#E5D3BF': fipromaxnatural,
    },
  },
  {
    id: 5,
    name: 'iPhone 15 Pro',
    price: 'LKR 324,900 - LKR 619,900',
    stock: true,
    images: {
      'Black': fipromaxblack,
      'White': fipromaxwhite,
      'Blue': fipromaxblue,
      '#E5D3BF': fipromaxnatural,
    },
  },

  {
    id: 6,
    name: 'iPhone 15 Plus',
    price: 'LKR 269,900 - LKR 489,900',
    stock: true,
    images: {
      'Blue': fifplusblue,
      'Pink': fifpluspink,
      'Yellow': fifplusyellow,
    },
  },
  {
    id: 7,
    name: 'iPhone 15',
    price: 'LKR 219,900 - LKR 449,900',
    stock: false,
    images: {
      'Blue': fifplusblue,
      'Pink': fifpluspink,
      'Yellow': fifplusyellow,
    },
  },
  {
    id: 8,
    name: 'iPhone 14 Plus',
    price: 'LKR 249,900 - LKR 459,900',
    stock: true,
    images: {
      '#191970': foplusmidnight,
      'Purple': fopluspurple,
      'Red': foplusred,
      '#faf7f2': foplusstarlight,
      'Yellow': foplusyellow,
    },
  },
  {
    id: 9,
    name: 'iPhone 14',
    price: 'LKR 189,900 - LKR 409,900',
    stock: true,
    images: {
      '#191970': foplusmidnight,
      'Purple': fopluspurple,
      'Red': foplusred,
      '#faf7f2': foplusstarlight,
      'Yellow': foplusyellow,
    },
  },
];

const ApplePage: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<{ [productId: number]: string }>(
    appleProducts.reduce((acc, product) => {
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
  const handleImageClick = (productId: number) => {
    navigate(`/appleProducts/${productId}`); // Navigate to a unique route for the product
  };

  const sortedProducts = [...appleProducts].sort((a, b) => {
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
              src={product.images[selectedColors[product.id] as keyof typeof product.images]} // Display the selected color's image
              alt={`${product.name} image`} // Descriptive alt text
              className="product-image"
              onClick={() => handleImageClick(product.id)} // Only pass the product.id
              style={{ cursor: 'pointer' }}
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

export default ApplePage;
