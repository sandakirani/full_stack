import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Products.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
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

// Dummy product data for multiple products
const productData: {
  [key: number]: {
    id: number;
    name: string;
    price: string;
    storageOptions: string[];
    colors: string[];
    Design: {
      Dimensions: string;
      Weight: string;
      Display: string;
    };
    Performance: {
      Processor: string;
      Memory: string;
    };
    Camera: {
      Rear: string[];
      Front: string;
      Features: string;
    };
    Battery: {
      life: string;
      charging: string;
    };
    connectivity: {
      network: string;
      wifi: string;
      bluetooth: string;
      ports: string;
    };
    os: string;
    additional: string[];
    images: { [key: string]: string };
    inStock: boolean;
  };
} = {
  1: {
    id: 1,
    name: "iPhone 16 Pro Max",
    price: "LKR 389,900 - LKR 684,900",
    storageOptions: ["128GB", "256GB", "512GB", "1TB", "2TB"],
    colors: ["Black", "White", "#FAD5A5", "#E5D3BF"],
    Design: {
      Dimensions: "Height: 163 mm; Width: 77.6 mm; Depth: 8.25 mm.",
      Weight: "227 grams.",
      Display: "6.9-inch Super Retina XDR OLED with a resolution of 2868 x 1320 pixels at 460 ppi. Features include Dynamic Island, Always-On display, and ProMotion technology with adaptive refresh rates up to 120Hz.",
    },
    Performance: {
      Processor: "Powered by the Apple A18 Pro chip, delivering up to 30% faster performance with 3-nanometer technology.",
      Memory: "Equipped with 8GB of RAM.",
    },
    Camera: {
      Rear: ["48MP Main (f/1.78 aperture) with sensor-shift optical image stabilization.",
        "48MP Ultra-Wide (f/2.2 aperture).",
        "12MP Telephoto (f/2.8 aperture) with periscope lens offering enhanced zoom capabilities."],
      Front: "12MP TrueDepth camera with f/1.9 aperture.",
      Features: "Advanced AI-powered photography enhancements, including improved low-light performance and macro mode support.",
    },
    Battery: {
      life: "Enhanced battery life due to improved performance and power efficiency.",
      charging: "Supports MagSafe and Qi 2 wireless charging, along with USB-C fast charging capabilities.",
    },
    connectivity: {
      network: "Compatible with 5G NR, 4G LTE, and other networks.",
      wifi: "Supports Wi-Fi 7 dual-band for faster wireless connectivity.",
      bluetooth: "Equipped with Bluetooth 5.3.",
      ports: "Features a USB-C port with USB 3.2 support for data transfer speeds up to 10Gb/s.",
    },
    os: "Ships with iOS 18, offering a suite of AI-driven capabilities branded as Apple Intelligence, enhancing Siri's functionality and introducing generative features such as custom emojis and Visual Intelligence.",
    additional: [
      "Ceramic Shield for enhanced durability.",
      "Supports 5G and offers exceptional power efficiency."
    ],
    images: {
      'Black': spromaxblack,
      'White': spromaxwhite,
      '#FAD5A5': spromaxdesert,
      '#E5D3BF': spromaxnatural,
    },
    inStock: true,
  },
  2: {
    id: 2,
    name: "iPhone 16 Pro",
    price: "LKR 339,900 - LKR 649,900",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Black", "White", "#FAD5A5", "#E5D3BF"],
    Design: {
      Dimensions: "Height: 164.5 mm; Width: 78.1 mm; Depth: 8.45 mm.",
      Weight: "235 grams.",
      Display: "6.9-inch Super Retina XDR OLED with a resolution of 2872 x 1344 pixels at 465 ppi. Features include Dynamic Island, Always-On display, ProMotion technology with adaptive refresh rates up to 120Hz, and True Tone.",
    },
    Performance: {
      Processor: "Powered by the Apple A19 Pro chip, delivering up to 35% faster performance with 3-nanometer technology and enhanced AI capabilities.",
      Memory: "Equipped with 12GB of RAM.",
    },
    Camera: {
      Rear: ["50MP Main (f/1.7 aperture) with sensor-shift optical image stabilization and advanced AI-assisted image processing.",
        "50MP Ultra-Wide (f/2.2 aperture) with improved low-light capabilities.",
        "16MP Telephoto (f/2.8 aperture) with periscope lens offering enhanced optical zoom up to 10x."],
      Front: "14MP TrueDepth camera with f/1.8 aperture and improved autofocus for clearer selfies.",
      Features: "AI-powered photography enhancements, including better night mode, real-time object detection, macro mode, and improved video stabilization.",
    },
    Battery: {
      life: "Enhanced battery life with more efficient power management, offering up to 20 hours of video playback.",
      charging: "Supports MagSafe and Qi 2 wireless charging, along with USB-C fast charging capabilities for quicker power-ups.",
    },
    connectivity: {
      network: "Compatible with 5G NR, 4G LTE, and other global networks for improved connectivity.",
      wifi: "Supports Wi-Fi 8 dual-band for ultra-fast wireless speeds.",
      bluetooth: "Equipped with Bluetooth 5.4 for faster and more reliable wireless connections.",
      ports: "Features a USB-C port with USB 4.0 support for data transfer speeds up to 20Gb/s.",
    },
    os: "Ships with iOS 19, introducing enhanced Apple Intelligence features, more powerful Siri functionality, advanced augmented reality (AR) capabilities, and personalized generative features.",
    additional: [
      "Ceramic Shield for superior durability and scratch resistance.",
      "IP69 water and dust resistance for added protection",
      "Satellite connectivity for emergency SOS, now supporting global coverage.",
      "Advanced thermal management system for continuous heavy use and sustained performance."
    ],
    images: {
      'Black': spromaxblack,
      'White': spromaxwhite,
      '#FAD5A5': spromaxdesert,
      '#E5D3BF': spromaxnatural,
    },
    inStock: false,
  },
  3: {
    id: 3,
    name: "iPhone 16 Plus",
    price: "LKR 299,900 - LKR 504,900",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Black", "Pink", "Teal", "#0437F2", "White"],
    Design: {
      Dimensions: "Height: 165 mm; Width: 78.5 mm; Depth: 8.5 mm.",
      Weight: "245 grams.",
      Display: "6.9-inch Super Retina XDR OLED with a resolution of 2872 x 1344 pixels at 465 ppi. Features Dynamic Island, Always-On display, ProMotion technology with adaptive refresh rates up to 120Hz, and True Tone.",
    },
    Performance: {
      Processor: "Powered by the Apple A19 Pro chip, with 3-nanometer technology and advanced AI processing.",
      Memory: "12GB of RAM.",
    },
    Camera: {
      Rear: ["50MP Main (f/1.7 aperture) with sensor-shift optical image stabilization.",
        "50MP Ultra-Wide (f/2.2 aperture).",
        "16MP Telephoto (f/2.8 aperture) with 10x optical zoom."],
      Front: "14MP TrueDepth camera with f/1.8 aperture.",
      Features: "Advanced AI-powered photography enhancements, including improved low-light performance and macro mode support.",
    },
    Battery: {
      life: "Enhanced with up to 22 hours of video playback.",
      charging: "MagSafe, Qi 2 wireless charging, USB-C fast charging",
    },
    connectivity: {
      network: "5G NR, 4G LTE.",
      wifi: "Wi-Fi 8 dual-band",
      bluetooth: "Bluetooth 5.4.",
      ports: "USB-C with USB 4.0 support.",
    },
    os: "iOS 19 with AI-driven features and personalized Siri.",
    additional: [
      "Ceramic Shield, IP69 water and dust resistance, Satellite connectivity for SOS, advanced thermal management."
    ],
    images: {
      'Black': splusblack,
      'Pink': spluspink,
      'Teal': splusteal,
      '#0437F2': splusultramarine,
      'White': spluswhite,
    },
    inStock: true,
  },
  4: {
    id: 4,
    name: "iPhone 15 Pro Max",
    price: "LKR 364,900 - LKR 664,900",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Black", "White", "Blue", "#E5D3BF"],
    Design: {
      Dimensions: "Height: 159.9 mm; Width: 76.7 mm; Depth: 8.25 mm.",
      Weight: "221 grams.",
      Display: " 6.7-inch Super Retina XDR OLED with a resolution of 2796 x 1290 pixels at 460 ppi. Features Dynamic Island, Always-On display, ProMotion technology, and True Tone.",
    },
    Performance: {
      Processor: "Powered by the Apple A18 Pro chip with 3-nanometer technology.",
      Memory: "8GB of RAM.",
    },
    Camera: {
      Rear: ["48MP Main (f/1.78 aperture) with sensor-shift optical image stabilization.",
        "48MP Ultra-Wide (f/2.2 aperture).",
        "12MP Telephoto (f/2.8 aperture) with 5x optical zoom."],
      Front: "12MP TrueDepth camera with f/1.9 aperture.",
      Features: "Advanced AI-powered photography enhancements, including improved low-light performance and macro mode support.",
    },
    Battery: {
      life: "Enhanced for up to 29 hours of video playback.",
      charging: "MagSafe, Qi 2 wireless charging, USB-C fast charging.",
    },
    connectivity: {
      network: "5G NR, 4G LTE.",
      wifi: "Wi-Fi 7 dual-band.",
      bluetooth: "Bluetooth 5.3.",
      ports: "USB-C with USB 3.2 support.",
    },
    os: "iOS 18 with AI-driven features.",
    additional: [
      "Ceramic Shield, IP68 water and dust resistance, Satellite connectivity for emergency SOS."
    ],
    images: {
      'Black': fipromaxblack,
      'White': fipromaxwhite,
      'Blue': fipromaxblue,
      '#E5D3BF': fipromaxnatural,
    },
    inStock: false,
  },

  5: {
    id: 5,
    name: "iPhone 15 Pro",
    price: "LKR 324,900 - LKR 619,900",
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Black", "White", "Blue", "#E5D3BF"],
    Design: {
      Dimensions: "Height: 146.7 mm; Width: 70.9 mm; Depth: 7.85 mm.",
      Weight: "187 grams.",
      Display: "6.1-inch Super Retina XDR OLED with a resolution of 2532 x 1170 pixels at 460 ppi. Features Dynamic Island, Always-On display, ProMotion technology, and True Tone.",
    },
    Performance: {
      Processor: "Powered by the Apple A18 Pro chip with 3-nanometer technology.",
      Memory: "8GB of RAM.",
    },
    Camera: {
      Rear: ["48MP Main (f/1.78 aperture) with sensor-shift optical image stabilization.",
        "48MP Ultra-Wide (f/2.2 aperture).",
        "12MP Telephoto (f/2.8 aperture) with 3x optical zoom."],
      Front: "12MP TrueDepth camera with f/1.9 aperture.",
      Features: "Advanced AI-powered photography enhancements, including improved low-light performance and macro mode support.",
    },
    Battery: {
      life: "Up to 23 hours of video playback.",
      charging: "MagSafe, Qi 2 wireless charging, USB-C fast charging.",
    },
    connectivity: {
      network: "5G NR, 4G LTE.",
      wifi: "Wi-Fi 7 dual-band.",
      bluetooth: "Bluetooth 5.3.",
      ports: "USB-C with USB 3.2 support.",
    },
    os: "iOS 18 with AI-driven enhancements.",
    additional: [
      "Ceramic Shield, IP68 water and dust resistance, Satellite SOS."
    ],
    images: {
      'Black': fipromaxblack,
      'White': fipromaxwhite,
      'Blue': fipromaxblue,
      '#E5D3BF': fipromaxnatural,
    },
    inStock: true,
  },
  6: {
    id: 6,
    name: "iPhone 15 Plus",
    price: "LKR 269,900 - LKR 489,900",
    storageOptions: ["128GB", "256GB", "512GB"],
    colors: ["Blue", "Pink", "Yellow"],
    Design: {
      Dimensions: "Height: 160.8 mm; Width: 78.1 mm; Depth: 7.8 mm.",
      Weight: "203 grams.",
      Display: "6.7-inch Super Retina XDR OLED with a resolution of 2778 x 1284 pixels at 458 ppi. Features Dynamic Island and True Tone.",
    },
    Performance: {
      Processor: "Powered by the Apple A16 Bionic chip.",
      Memory: "6GB of RAM.",
    },
    Camera: {
      Rear: ["48MP Main (f/1.78 aperture).",
        "12MP Ultra-Wide (f/2.2 aperture)."],
      Front: "12MP TrueDepth camera with f/1.9 aperture.",
      Features: "Advanced AI-powered photography enhancements, including improved low-light performance and macro mode support.",
    },
    Battery: {
      life: "Up to 26 hours of video playback.",
      charging: "MagSafe, Qi 2 wireless charging, USB-C fast charging.",
    },
    connectivity: {
      network: "5G NR, 4G LTE.",
      wifi: "Wi-Fi 6.",
      bluetooth: "Bluetooth 5.3.",
      ports: "USB-C.",
    },
    os: "iOS 17.",
    additional: [
      "Ceramic Shield, IP68 water and dust resistance, Satellite SOS."
    ],
    images: {
      'Blue': fifplusblue,
      'Pink': fifpluspink,
      'Yellow': fifplusyellow,
    },
    inStock: true,
  },
  7: {
    id: 7,
    name: "iPhone 15",
    price: "LKR 219,900 - LKR 449,900",
    storageOptions: ["128GB", "256GB", "512GB"],
    colors: ["Blue", "Pink", "Yellow"],
    Design: {
      Dimensions: "Height: 146.7 mm; Width: 70.9 mm; Depth: 7.8 mm.",
      Weight: "171 grams.",
      Display: "6.1-inch Super Retina XDR OLED with a resolution of 2532 x 1170 pixels at 460 ppi.",
    },
    Performance: {
      Processor: "Powered by the Apple A16 Bionic chip.",
      Memory: "6GB of RAM.",
    },
    Camera: {
      Rear: ["48MP Main (f/1.78 aperture).",
        "12MP Ultra-Wide (f/2.2 aperture)."],
      Front: "12MP TrueDepth camera with f/1.9 aperture.",
      Features: "Night mode, Smart HDR 5, Cinematic Mode, and Action Mode for enhanced video stabilization.",
    },
    Battery: {
      life: "Up to 22 hours of video playback.",
      charging: "MagSafe, Qi 2 wireless charging, USB-C fast charging.",
    },
    connectivity: {
      network: "5G NR, 4G LTE.",
      wifi: "Wi-Fi 6.",
      bluetooth: "Bluetooth 5.3.",
      ports: "USB-C.",
    },
    os: "iOS 17.",
    additional: [
      "Ceramic Shield, IP68 water and dust resistance, Satellite SOS."
    ],
    images: {
      'Blue': fifplusblue,
      'Pink': fifpluspink,
      'Yellow': fifplusyellow,
    },
    inStock: false,
  },
  8: {
    id: 8,
    name: "iPhone 14 Plus",
    price: "LKR 249,900 - LKR 459,900",
    storageOptions: ["128GB", "256GB", "512GB"],
    colors: ["#191970", "Purple", "Red", "#faf7f2","Yellow"],
    Design: {
      Dimensions: "Height: 160.8 mm; Width: 78.1 mm; Depth: 7.8 mm.",
      Weight: "203 grams.",
      Display: "6.7-inch Super Retina XDR OLED with a resolution of 2778 x 1284 pixels at 458 ppi.",
    },
    Performance: {
      Processor: "Powered by the Apple A15 Bionic chip.",
      Memory: "6GB of RAM.",
    },
    Camera: {
      Rear: ["12MP Main (f/1.5 aperture).",
        "12MP Ultra-Wide (f/2.4 aperture)."],
      Front: "12MP TrueDepth camera with f/1.9 aperture.",
      Features: "Deep Fusion, Night mode, Smart HDR 4, and Cinematic Mode for professional-quality videos.",
    },
    Battery: {
      life: "Up to 26 hours of video playback.",
      charging: "MagSafe, Qi wireless charging, USB-C fast charging.",
    },
    connectivity: {
      network: "5G NR, 4G LTE.",
      wifi: "Wi-Fi 6.",
      bluetooth: "Bluetooth 5.0.",
      ports: "Lightning.",
    },
    os: "iOS 16.",
    additional: [
      "Ceramic Shield, IP68 water and dust resistance, Emergency SOS via Satellite."
    ],
    images: {
      '#191970': foplusmidnight,
      'Purple': fopluspurple,
      'Red': foplusred,
      '#faf7f2': foplusstarlight,
      'Yellow': foplusyellow,
    },
    inStock: true,
  },
  9: {
    id:9,
    name: "iPhone 14",
    price: "LKR 189,900 - LKR 409,900",
    storageOptions: ["128GB", "256GB", "512GB"],
    colors: ["#191970", "Purple", "Red", "#faf7f2","Yellow"],
    Design: {
      Dimensions: "Height: 146.7 mm; Width: 71.5 mm; Depth: 7.8 mm.",
      Weight: "172 grams.",
      Display: "6.1-inch Super Retina XDR OLED with a resolution of 2532 x 1170 pixels at 460 ppi.",
    },
    Performance: {
      Processor: "Powered by the Apple A15 Bionic chip.",
      Memory: "6GB of RAM.",
    },
    Camera: {
      Rear: ["12MP Main (f/1.5 aperture).",
        "12MP Ultra-Wide (f/2.4 aperture)."],
      Front: "12MP TrueDepth camera with f/1.9 aperture.",
      Features: "Night mode, Smart HDR 4, and Photographic Styles for personalized photo settings.",
    },
    Battery: {
      life: "Up to 20 hours of video playback.",
      charging: "MagSafe, Qi wireless charging, USB-C fast charging.",
    },
    connectivity: {
      network: "5G NR, 4G LTE.",
      wifi: "Wi-Fi 6.",
      bluetooth: "Bluetooth 5.0.",
      ports: "Lightningt.",
    },
    os: "iOS 16.",
    additional: [
      "Ceramic Shield, IP68 water and dust resistance, Emergency SOS via Satellite."
    ],
    images: {
     '#191970': foplusmidnight,
      'Purple': fopluspurple,
      'Red': foplusred,
      '#faf7f2': foplusstarlight,
      'Yellow': foplusyellow,
    },
    inStock: true,
  },
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productData[Number(id)];

  if (!product) {
    return <p>Product not found!</p>;
  }
  const { incrementFavorites, decrementFavorites } = useFavorites();
  const [favorites, setFavorites] = useState<{ [id: number]: number }>({});
  // State to track selected color
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState<string>(product.storageOptions[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleFavoriteClick = (productId: number) => {
    const isFavorited = favorites[productId] === 1;
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: isFavorited ? 0 : 1,
    }));

    if (isFavorited) {
      decrementFavorites();
    } else {
      incrementFavorites();
    }
  };

  const getImageForColor = (color: string) => {
    return product.images[color];
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to the cart`);
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to checkout with ${quantity} ${product.name}(s)`);
  };

  return (
    <div className="product-page">
      <Navbar />
      <div className="breadcrumb1">
        <Link to="/home">Home</Link>
        {" > "}
        <Link to="/apple">Apple</Link>
        {" > "}
        <strong>{product.name}</strong>
      </div>
      <div className="heart-icon2" onClick={() => handleFavoriteClick(product.id)}>
        <FontAwesomeIcon
          icon={favorites[product.id] ? faHeartFilled : faHeartEmpty}
          style={{ color: favorites[product.id] ? 'red' : 'black', cursor: 'pointer' }}
        />
      </div>

      <h1 className="productname">{product.name}</h1>
      <p className="productprice">
        {product.price}
        {!product.inStock && <p className="out-of-stock1">Out of Stock</p>}
      </p>

      <img
        src={getImageForColor(selectedColor)}
        alt={selectedColor}
        className="product-image1"
      />

      {/* Color Selection */}
      <h3 className="Colors">Colors:</h3>
      <ul className="color-selection">
        {product.colors.map((color, index) => (
          <li key={index} onClick={() => setSelectedColor(color)} className="color-option">
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: color.toLowerCase(),
                border: selectedColor === color ? "3px solid #243653" : "3px solid black",
              }}
            />
          </li>
        ))}
      </ul>

      {/* Storage Options */}
      <h3 className="storage">Storage Options:</h3>
      <div className="storage-options">
        {product.storageOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedStorage(option)}
            className={`storage-option-btn ${selectedStorage === option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Quantity */}
      <h3 className="quantity">Quantity:</h3>
      <div className="quantity-selector">
        <button onClick={decreaseQuantity} className="quantity-btn">-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity} className="quantity-btn">+</button>
      </div>

      <div className="action-buttons">
        <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
        <button onClick={handleBuyNow} className="buy-now-btn">Buy Now</button>
      </div>

      {/* Description */}
      <h3 className="description">Design and Display:</h3>
      <ul className="des1">
        {Object.entries(product.Design).map(([key, value], index) => (
          <li key={index}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
        ))}
      </ul>

      <h3 className="description">Performance:</h3>
      <ul className="des1">
        {Object.entries(product.Performance).map(([key, value], index) => (
          <li key={index}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
        ))}
      </ul>

      <h3 className="description">Camera System:</h3>
      <ul className="des1">
        <li><h4>Rear Cameras:</h4></li>
        <ul className='rear'>
          {product.Camera.Rear.map((cameraSpec, index) => (
            <li key={index}> {cameraSpec}</li>
          ))}
        </ul>
        <li><strong>Front Camera:</strong> {product.Camera.Front}</li>
        <li><strong>Features:</strong> {product.Camera.Features}</li>

      </ul>


      <h3 className="description">Battery and Charging:</h3>
      <ul className="des1">
        {Object.entries(product.Battery).map(([key, value], index) => (
          <li key={index}><strong>{key === 'life' ? 'Battery Life' : key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
        ))}
      </ul>

      <h3 className="description">Connectivity:</h3>
      <ul className="des1">
        {Object.entries(product.connectivity).map(([key, value], index) => (
          <li key={index}><strong>{key === 'network' ? 'Network Support' : key === 'wifi' ? 'Wi-Fi' : key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
        ))}
      </ul>


      <h3 className="description">Operating System:</h3>
      <p className="des1">{product.os}</p>

      <h3 className="description">Additional Features:</h3>
      <ul className="des1">
        {product.additional.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul><br />
      <hr />
      <Footer />
    </div>
  );
};

export default ProductPage;
