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
import s24ultrablack from '../assets/Samsung/samsung galaxy s24 ultra phantom black.jpg';
import s24ultrasilver from '../assets/Samsung/samsung galaxy s24 ultra Phantom Silver.jpg';
import s24ultragreen from '../assets/Samsung/samsung galaxy s24 ultra Phantom Green.jpg';
import sblack from '../assets/Samsung/samsung galaxy s24 phantom black.jpg';
import ssilver from '../assets/Samsung/Samsung Galaxy S24 Phantom Silver.jpg';
import syellow from '../assets/Samsung/Samsung Galaxy S24 titanium yellow .jpg';
import Zfold6black from '../assets/Samsung/Samsung Galaxy Z Fold6 Phantom Black.jpg';
import zfold6beige from '../assets/Samsung/Samsung Galaxy Z Fold6 Beige.jpg';
import zfold6Burgundy from '../assets/Samsung/Samsung Galaxy Z Fold6 Burgundy.jpg';
import zflip6mint from '../assets/Samsung/Samsung Galaxy Z Flip6 mint.jpg';
import zflip6borapurple from '../assets/Samsung/Samsung Galaxy Z Flip6 Bora Purple.jpg';
import zflip6cream from '../assets/Samsung/Samsung Galaxy Z Flip6 Cream.jpg';
import s23ultrablack from '../assets/Samsung/Samsung Galaxy S23 Ultra Phantom Black.jpg';
import s23ultrasilver from '../assets/Samsung/Samsung Galaxy S23 Ultra Phantom Silver.jpg';
import s23ultralavender from '../assets/Samsung/Samsung Galaxy S23 Ultra Phantom lavender.webp';
import s23FEgraphite from '../assets/Samsung/Samsung Galaxy S23 FE Graphite.jpg';
import s23FElavender from '../assets/Samsung/Samsung Galaxy S23 FE Lavender.jpg';
import s23FEolive from '../assets/Samsung/Samsung Galaxy S23 FE Olive.jpg';
import A555Gblack from '../assets/Samsung/Samsung Galaxy A55 5G Awesome Black.jpg';
import A555Gviolet from '../assets/Samsung/Samsung Galaxy A55 5G Awesome violet.jpg';
import A555Gwhite from '../assets/Samsung/Samsung Galaxy A55 5G Awesome white.jpg';
import M555GIcyblue from '../assets/Samsung/Samsung Galaxy M55 5G Icy Blue.jpg';
import M555GBlazing from '../assets/Samsung/Samsung Galaxy M55 5G Blazing Black.jpg';

const samsungproducts = [
  {
    id: 1,
    name: 'Samsung Galaxy S24 Ultra',
    price: 'LKR 350,000 - LKR 450,000',
    stock: true,
    images: {
      '#242725': s24ultrablack,
      '#E3E4E5': s24ultrasilver,
      '#dce4d7': s24ultragreen
    },
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    price: 'LKR 250,000 - LKR 300,000',
    stock: false,
    images: {
      '#242725': sblack,
      '#a3a4a': ssilver,
      '#FAEE4D': syellow
    },
  },
  {
    id: 3,
    name: 'Samsung Galaxy Z Fold6',
    price: 'LKR 600,000 - LKR 700,000',
    stock: true,
    images: {
      '#242725': Zfold6black,
      '#F5F5DC': zfold6beige,
      '#800020': zfold6Burgundy
    },
  },

  {
    id: 4,
    name: 'Samsung Galaxy Z Flip6',
    price: 'LKR 350,000 - LKR 420,000',
    stock: false,
    images: {
      '#3EB489': zflip6mint,
      '#bccfdb': zflip6borapurple,
      '#FFFDD0': zflip6cream
    },
  },
  {
    id: 5,
    name: 'Samsung Galaxy S23 Ultra',
    price: 'LKR 300,000 - LKR 400,000',
    stock: true,
    images: {
      'Black': s23ultrablack,
      '#C7C9D3': s23ultrasilver,
      '#E6E6FA': s23ultralavender
    },
  },

  {
    id: 6,
    name: 'Samsung Galaxy S23 FE',
    price: 'LKR 150,000 - LKR 200,000',
    stock: true,
    images: {
      '#251607': s23FEgraphite,
      '#E6E6FA': s23FElavender,
      '#808000': s23FEolive
    },
  },
  {
    id: 7,
    name: 'Samsung Galaxy A55 5G',
    price: 'LKR 90,000 - LKR 120,000',
    stock: false,
    images: {
      'Black': A555Gblack,
      '#8F00FF': A555Gviolet,
      'White': A555Gwhite
    },
  },
  {
    id: 8,
    name: 'Samsung Galaxy A35 5G',
    price: 'LKR 80,000 - LKR 100,000',
    stock: true,
    images: {
      'Black': A555Gblack,
      '#8F00FF': A555Gviolet,
      'White': A555Gwhite
    },
  },
  {
    id: 9,
    name: 'Samsung Galaxy M55 5G',
    price: 'LKR 130,000 - LKR 170,000',
    stock: true,
    images: {
      '#739BD0': M555GIcyblue,
      '#0C090A': M555GBlazing
    },
  },
];

const SamsungPage: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState<{ [productId: number]: string }>(
    samsungproducts.reduce((acc, product) => {
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
    navigate(`/samsungProducts/${productId}`); // Navigate to a unique route for the product
  };

  const sortedProducts = [...samsungproducts].sort((a, b) => {
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
      <h2 className='brandname'>Samsung</h2>
      
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

export default SamsungPage;
