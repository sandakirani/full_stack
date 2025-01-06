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
import V21blue from '../assets/vivo/Vivo V21 5G Dusk Blue.jpg';
import V21sunset from '../assets/vivo/Vivo V21 5G Sunset Dazzle.jpg';
import Y1s3GBblue from '../assets/vivo/Vivo Y1s 3GB Aurora Blue.jpg';
import Y1s3GBblack from '../assets/vivo/Vivo Y1s 3GB Olive Black.jpg';
import V20SEblack from '../assets/vivo/Vivo V20 SE Gravity Black.jpg';
import V20SEblue from '../assets/vivo/Vivo V20 SE Oxygen Blue.jpg';
import V20sunset from '../assets/vivo/Vivo V20  Sunset Melody.webp';
import V20midnight from '../assets/vivo/Vivo V20 Midnight Jazz.jpg';
import Y27sblack from '../assets/vivo/Vivo Y27S Burgundy Black.jpg';
import Y27sgreen from '../assets/vivo/Vivo Y27S Garden Green.png';
import Y22sblue from '../assets/vivo/Vivo Y22s  Starlit Blue.jpg';
import Y22scyan from '../assets/vivo/Vivo Y22s  Summer Cyan.jpg';
import Y17sgreen from '../assets/vivo/Vivo Y17S Forest Green.png';
import Y17spurple from '../assets/vivo/Vivo Y17S Glitter Purple.png';
import Y19sblack from '../assets/vivo/Vivo Y19s Glossy Black.jpg';
import Y19ssilver from '../assets/vivo/Vivo Y19s Pearl Silver.jpg';
import V295Gblack from '../assets/vivo/Vivo V29 5G Forest Black.jpg';
import V295Gmagic from '../assets/vivo/Vivo V29 5G Magic Maroon.jpeg';
import V295Gpink from '../assets/vivo/Vivo V29 5G Rose Pink.jpg';
import V295Gice from '../assets/vivo/Vivo V29 5G ice Creek Blue.jpg';


const vivoproducts = [
  {
    id: 1,
    name: 'Vivo V21 5G',
    price: 'LKR 89,900 - LKR 95,000',
    stock: true,
    images: {
      '#57727f': V21blue,
      '#0072B8': V21sunset
    },
  },
  {
    id: 2,
    name: 'Vivo Y1s 3GB',
    price: 'LKR 34,900 - LKR 38,000',
    stock: false,
    images: {
      '#eaffff': Y1s3GBblue,
      '#3B3834': Y1s3GBblack
    },
  },
  {
    id: 3,
    name: 'Vivo V20 SE',
    price: 'LKR 80,000 - LKR 85,000',
    stock: true,
    images: {
      '#454A53': V20SEblack,
      '#90B5D4': V20SEblue
    },
  },

  {
    id: 4,
    name: 'Vivo V20',
    price: 'LKR 89,900 - LKR 95,000',
    stock: false,
    images: {
      '#4A90E2': V20sunset,
      '#272757': V20midnight
    },
  },
  {
    id: 5,
    name: 'Vivo Y27S',
    price: 'LKR 77,990 - LKR 80,000',
    stock: true,
    images: {
      '#660033': Y27sblack,
      '#4CAF50': Y27sgreen
    },
  },

  {
    id: 6,
    name: 'Vivo Y22s',
    price: 'LKR 62,500 - LKR 65,000',
    stock: true,
    images: {
      '#4d5f7a': Y22sblue,
      '#00FFFF': Y22scyan
    },
  },
  {
    id: 7,
    name: 'Vivo Y17S',
    price: 'LKR 55,000 - LKR 60,000',
    stock: false,
    images: {
      '#228B22': Y17sgreen,
      '#8E3FE2': Y17spurple
    },
  },
  {
    id: 8,
    name: 'Vivo Y19s',
    price: 'LKR 49,990 - LKR 52,000',
    stock: false,
    images: {
      '#252324': Y19sblack,
      '#E0E3E1': Y19ssilver
    },
  },
  {
    id: 9,
    name: 'Vivo V29 5G',
    price: 'LKR 100,000 - LKR 130,000',
    stock: false,
    images: {
      '#4D4841': V295Gblack,
      '#800000': V295Gmagic,
      '#F7879A': V295Gpink,
      '#368BC1': V295Gice
    },
  },
];

const VivoPage: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<{ [productId: number]: string }>(
    vivoproducts.reduce((acc, product) => {
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
    navigate(`/vivoProducts/${productId}`); 
  };
  const sortedProducts = [...vivoproducts].sort((a, b) => {
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
        {currentBrand !== 'Home' && <Link to="/vivo"><strong>{currentBrand}</strong></Link>}
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
      <h2 className='brandname'>Vivo</h2>

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

export default VivoPage;
