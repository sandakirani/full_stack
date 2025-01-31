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

import ultra14black from '../assets/Xiaomi/Xiaomi 14 Ultra black.jpg';
import ultra14white from '../assets/Xiaomi/Xiaomi 14 Ultra white.jpg';
import Note13proplusblack from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Midnight Black.jpg';
import Note13proplusgreen from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Mint Green.jpg';
import Note13proplusblue from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro+ Ice Blue.jpg';
import Note13problack from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Midnight Black.jpg';
import Note13proWhite from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Arctic White.jpg';
import Note13propurple from '../assets/Xiaomi/Xiaomi Redmi Note 13 Pro Lavender Purple.jpg';
import Note13black from '../assets/Xiaomi/Xiaomi Redmi Note 13  Midnight Black.jpg';
import Note13green from '../assets/Xiaomi/Xiaomi Redmi Note 13  Mint Green.jpg';
import Note13blue from '../assets/Xiaomi/Xiaomi Redmi Note 13  Ice Blue.jpg';
import Note13sunset from '../assets/Xiaomi/Xiaomi Redmi Note 13  Ocean Sunset.webp';
import Note12sblack from '../assets/Xiaomi/Xiaomi Redmi Note 12S Onyx Black.jpg';
import Note12sgreen from '../assets/Xiaomi/Xiaomi Redmi Note 12S Pearl Green.jpg';
import Note12sblue from '../assets/Xiaomi/Xiaomi Redmi Note 12S ice blue.png';
import Note12proplusblack from '../assets/Xiaomi/Xiaomi Redmi Note 12 pro+  Midnight Black.jpg';
import Note12propluswhite from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro+ Polar White.jpg';
import Note12proplusblue from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro+ Sky Blue.jpg';
import Note12problack from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Onyx Black.png';
import Note12problue from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Frosted Blue.jpg';
import Note12propurple from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Stardust Purple.jpg';
import Note14proplusblack from '../assets/Xiaomi/Xiaomi Redmi Note 14 Pro+ Titan Black.jpg';
import Note14propluspurple from '../assets/Xiaomi/Xiaomi Redmi Note 14 Pro+ phantom Purple.jpg';
import Note14proplusblue from '../assets/Xiaomi/Xiaomi Redmi Note 14 Pro+ spectre Blue.jpg';

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
            Front: string[];
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
        name: "Xiaomi 14 Ultra",
        price: "LKR 389,900 - LKR 399,900",
        storageOptions: ["256GB", "512GB", "1TB"],
        colors: ["Black", "White"],
        Design: {
            Dimensions: "Height: 163.8 mm; Width: 75.7 mm; Depth: 9.1 mm.",
            Weight: "234 grams.",
            Display: "6.73-inch AMOLED display with a resolution of 3200 x 1440 pixels at 522 ppi. Features include Always-On Display, HDR10+ support, Dolby Vision, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 3 with advanced AI capabilities for enhanced performance.",
            Memory: "Equipped with up to 16GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Wide (f/1.9 aperture) with advanced Leica optics.",
                "48MP Ultra-Wide (f/2.2 aperture) with 128° field of view.",
                "48MP Telephoto (f/4.1 aperture) with 10x optical zoom and 120x digital zoom."
            ],
            Front: ["32MP Selfie camera (f/2.0 aperture) with AI portrait enhancements."],
            Features: "Leica color science, Night Mode, 8K video recording at 24fps, and AI motion tracking.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 24 hours of heavy usage.",
            charging: "Supports 120W HyperCharge wired charging, 50W wireless charging, and 10W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 for seamless connectivity.",
            wifi: "Wi-Fi 7 for ultra-fast speeds.",
            bluetooth: "Bluetooth 5.4 for better range and reliability.",
            ports: "Features a USB-C 3.2 port for fast data transfer and charging.",
        },
        os: "Ships with MIUI 15 based on Android 14, featuring exclusive Xiaomi optimizations and regular updates for 4 years.",
        additional: [
            "Corning Gorilla Glass Victus 2 for superior durability.",
            "IP68 dust and water resistance.",
            "Xiaomi Surge P2 chip for advanced battery management and security."
        ],
        images: {
            'Black': ultra14black,
      'White': ultra14white
        },
        inStock: true,

    },
    2:{
        id: 2,
        name: "Xiaomi Redmi Note 13 Pro+",
        price: "LKR 89,990 - LKR 104,990",
        storageOptions: ["256GB", "512GB"],
        colors: ["Black", "#98ff98", "#dcf3ff"],
        Design: {
            Dimensions: "Height: 162.8 mm; Width: 74.2 mm; Depth: 9.0 mm.",
            Weight: "204 grams.",
            Display: "6.67-inch AMOLED display with a resolution of 2712 x 1220 pixels at 446 ppi. Features include Always-On Display, Dolby Vision, HDR10+, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 7200-Ultra chip, delivering efficient performance for gaming and multitasking.",
            Memory: "Equipped with up to 16GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "200MP Main (f/1.65 aperture) with advanced computational photography and OIS.",
                "8MP Ultra-Wide (f/2.2 aperture) with a 120° field of view.",
                "2MP Macro (f/2.4 aperture) for close-up shots."
            ],
            Front: ["16MP Selfie camera (f/2.5 aperture) with AI beauty and HDR support."],
            Features: "4K video recording at 30fps, Night Mode, Vlog Mode, and Pro Mode.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 20 hours of video playback.",
            charging: "Supports 120W HyperCharge fast charging, reaching 100% in approximately 19 minutes.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and dual-band Wi-Fi 6 for superior connectivity.",
            wifi: "Wi-Fi 6 for high-speed internet access.",
            bluetooth: "Bluetooth 5.3 for stable and energy-efficient connections.",
            ports: "Features a USB-C 2.0 port for data transfer and charging.",
        },
        os: "Ships with MIUI 14 based on Android 13, with 3 years of OS updates and 4 years of security updates.",
        additional: [
            "Corning Gorilla Glass Victus for display durability.",
            "IP68 dust and water resistance for rugged performance.",
            "Xiaomi's advanced security features for data protection."
        ],
        images: {
           'Black': Note13proplusblack,
      '#98ff98': Note13proplusgreen,
      '#dcf3ff': Note13proplusblue
        },
        inStock: false,
    },
    
    3:{
        id: 3,
        name: "Xiaomi Redmi Note 13 Pro",
        price: "LKR 61,490 - LKR 74,990",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["Black", "#F8F9FA", "#E6E6FA"],
        Design: {
            Dimensions: "Height: 162.9 mm; Width: 76 mm; Depth: 8 mm.",
            Weight: "187 grams.",
            Display: "6.67-inch AMOLED display with a resolution of 2712 x 1220 pixels at 446 ppi. Features include HDR10+ support, Dolby Vision, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 7s Gen 2 chip for efficient multitasking and gaming.",
            Memory: "Equipped with up to 12GB of LPDDR5 RAM.",
        },
        Camera: {
            Rear: [
                "200MP Main (f/1.7 aperture) with advanced AI and OIS.",
                "8MP Ultra-Wide (f/2.2 aperture) with a 120° field of view.",
                "2MP Macro (f/2.4 aperture) for close-up shots."
            ],
            Front: ["16MP Selfie camera (f/2.45 aperture) with AI beautification and HDR."],
            Features: "AI-powered Night Mode, 4K video recording at 30fps, and Pro mode for manual adjustments.",
        },
        Battery: {
            life: "5100mAh battery supporting up to 24 hours of continuous video playback.",
            charging: "Supports 67W turbo fast charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for high-speed connectivity.",
            wifi: "Wi-Fi 6 for stable and fast internet access.",
            bluetooth: "Bluetooth 5.2 for seamless connections.",
            ports: "Features a USB-C 2.0 port for data transfer and charging, with a 3.5mm headphone jack.",
        },
        os: "Ships with MIUI 14 based on Android 13, with regular updates for 3 years.",
        additional: [
            "Corning Gorilla Glass 5 for screen protection.",
            "IP54 splash and dust resistance.",
            "Side-mounted fingerprint sensor for quick unlocking."
        ],
        images: {
            'Black': Note13problack,
      '#F8F9FA': Note13proWhite,
      '#E6E6FA': Note13propurple
        },
        inStock: true,
    },
    
    4:{
        id: 4,
        name: "Xiaomi Redmi Note 13",
        price: "LKR 48,990 - LKR 59,990",
        storageOptions: ["128GB", "256GB"],
        colors: ["Black", "#98ff98", "#dcf3ff","#FF7F50 "], 
        Design: {
            Dimensions: "Height: 165.2 mm; Width: 76.6 mm; Depth: 7.6 mm.",
            Weight: "188 grams.",
            Display: "6.67-inch AMOLED display with a resolution of 2400 x 1080 pixels at 395 ppi. Features include Always-On Display, HDR10+, and a 120Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 6080 processor with 5G support and AI optimizations.",
            Memory: "Equipped with up to 8GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "100MP Main (f/1.9 aperture) with advanced AI imaging features.",
                "8MP Ultra-Wide (f/2.2 aperture).",
                "2MP Macro (f/2.4 aperture) for close-up photography."
            ],
            Front: ["16MP Selfie camera (f/2.5 aperture) with AI beautification and HDR support."],
            Features: "AI-enhanced photography, 4K video recording at 30fps, Night Mode, and Portrait Mode.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 22 hours of video playback.",
            charging: "Supports 33W fast wired charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for fast and stable connectivity.",
            wifi: "Wi-Fi 6 for high-speed internet access.",
            bluetooth: "Bluetooth 5.2 for reliable wireless connections.",
            ports: "Features a USB-C 2.0 port for data transfer and charging.",
        },
        os: "Ships with MIUI 14 based on Android 13, offering Xiaomi-exclusive features and regular updates.",
        additional: [
            "Corning Gorilla Glass 5 for screen protection.",
            "IP54 splash and dust resistance.",
            "Side-mounted fingerprint sensor for quick access."
        ],
        images: {
            'Black': Note13black,
      '#98ff98': Note13green,
      '#dcf3ff': Note13blue,
      '#FF7F50 ':Note13sunset
        },
        inStock: false,
    },
    
    5:  {
        id: 5,
        name: "Xiaomi Redmi Note 12S",
        price: "LKR 60,500 - LKR 69,500'",
        storageOptions: ["128GB", "256GB"],
        colors: ["Black", "#45644A", "#dcf3ff"],
        Design: {
            Dimensions: "Height: 159.9 mm; Width: 73.9 mm; Depth: 8.1 mm.",
            Weight: "176 grams.",
            Display: "6.43-inch AMOLED display with a resolution of 2400 x 1080 pixels at 409 ppi. Features include Always-On Display, HDR10 support, and a 90Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Helio G96 chip optimized for gaming and multitasking.",
            Memory: "Equipped with up to 8GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "108MP Main (f/1.9 aperture) for ultra-clear photography.",
                "8MP Ultra-Wide (f/2.2 aperture) for capturing wider scenes.",
                "2MP Macro (f/2.4 aperture) for close-up shots."
            ],
            Front: ["16MP Selfie camera (f/2.5 aperture) with AI beauty mode and HDR."],
            Features: "Night Mode, AI Scene Detection, 4K video recording at 30fps, and Pro Mode.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 23 hours of continuous video playback.",
            charging: "Supports 33W fast wired charging.",
        },
        connectivity: {
            network: "Supports 4G LTE and dual SIM functionality.",
            wifi: "Wi-Fi 5 for stable speeds.",
            bluetooth: "Bluetooth 5.1 for efficient connections.",
            ports: "Features a USB-C 2.0 port for data transfer and charging, along with a 3.5mm headphone jack.",
        },
        os: "Ships with MIUI 14 based on Android 13, with regular updates.",
        additional: [
            "Corning Gorilla Glass 3 for screen durability.",
            "IP53 splash resistance.",
            "Side-mounted fingerprint sensor for fast unlocking."
        ],
        images: {
            'Black': Note12sblack,
      '#45644A': Note12sgreen,
      '#dcf3ff': Note12sblue
        },
        inStock: true,
    },
    
    6:{
        id: 6,
        name: "Xiaomi Redmi Note 12 Pro+",
        price: "LKR 104,990 - LKR 120,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["#00040D", "#eef4f4", "#87CEEB"], 
        Design: {
            Dimensions: "Height: 162.9 mm; Width: 76 mm; Depth: 8.9 mm.",
            Weight: "210 grams.",
            Display: "6.67-inch AMOLED display with a resolution of 2400 x 1080 pixels at 395 ppi. Features include HDR10+ support, Dolby Vision, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 1080 chip, delivering a balance of performance and efficiency.",
            Memory: "Equipped with up to 12GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "200MP Main (f/1.65 aperture) with OIS and advanced low-light performance.",
                "8MP Ultra-Wide (f/2.2 aperture) with a 120° field of view.",
                "2MP Macro (f/2.4 aperture) for close-up photography."
            ],
            Front: ["16MP Selfie camera (f/2.45 aperture) with AI portrait mode and beauty enhancements."],
            Features: "ProCut, Long Exposure, 4K video recording at 30fps, and Super Night Mode 2.0.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 22 hours of video playback.",
            charging: "Supports 120W HyperCharge for full charge in approximately 19 minutes.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for enhanced connectivity.",
            wifi: "Wi-Fi 6 for high-speed and reliable performance.",
            bluetooth: "Bluetooth 5.2 for seamless connections.",
            ports: "Features a USB-C 2.0 port for data transfer and charging.",
        },
        os: "Ships with MIUI 14 based on Android 13, featuring Xiaomi-exclusive optimizations and updates.",
        additional: [
            "Corning Gorilla Glass 5 for screen protection.",
            "IP53-rated splash and dust resistance.",
            "Side-mounted fingerprint scanner for quick unlocking."
        ],
        images: {
            '#00040D': Note12proplusblack,
      '#eef4f4': Note12propluswhite,
      '#87CEEB': Note12proplusblue
        },
        inStock: true,
    },
    
    7:{
        id: 7,
        name: "Xiaomi Redmi Note 12 Pro",
        price: "LKR 79,490 - LKR 89,900",
        storageOptions: ["128GB", "256GB"],
        colors: ["#353935", "#ACD5F3", "#6C3BAA"], 
        Design: {
            Dimensions: "Height: 162.9 mm; Width: 76 mm; Depth: 7.9 mm.",
            Weight: "187 grams.",
            Display: "6.67-inch AMOLED display with a resolution of 2400 x 1080 pixels at 395 ppi. Features include Dolby Vision, HDR10+ support, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 1080 chip for enhanced performance and power efficiency.",
            Memory: "Equipped with up to 8GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.9 aperture) with advanced night mode and AI enhancements.",
                "8MP Ultra-Wide (f/2.2 aperture) with 120° field of view.",
                "2MP Macro (f/2.4 aperture) for close-up shots."
            ],
            Front: ["16MP Selfie camera (f/2.5 aperture) with AI beautification and portrait mode."],
            Features: "4K video recording at 30fps, Vlog mode, Night mode, and Pro mode.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 20 hours of video playback.",
            charging: "Supports 67W turbo fast charging (fully charges in under 50 minutes).",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for high-speed connectivity.",
            wifi: "Wi-Fi 6 for enhanced performance in crowded networks.",
            bluetooth: "Bluetooth 5.2 for stable connections.",
            ports: "Features a USB-C 2.0 port for data transfer and charging, plus a 3.5mm headphone jack.",
        },
        os: "Ships with MIUI 14 based on Android 13, offering smooth and customizable user experiences.",
        additional: [
            "Corning Gorilla Glass 5 for front protection.",
            "IP53 splash and dust resistance.",
            "Side-mounted fingerprint scanner for quick unlocking.",
            "Dual stereo speakers with Dolby Atmos support for immersive audio."
        ],
        images: {
            '#353935': Note12problack,
      '#ACD5F3': Note12problue,
      '#6C3BAA': Note12propurple
        },
        inStock: false,
    },    
    8:{
        id: 8,
        name: "Xiaomi Redmi Note 14 Pro+",
        price: "LKR 90,000 - LKR 120,000",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["Black", "#E3E0EA", "#98bfc9"],
        Design: {
            Dimensions: "Height: 164.3 mm; Width: 76.4 mm; Depth: 8.5 mm.",
            Weight: "204 grams.",
            Display: "6.73-inch AMOLED display with a resolution of 3200 x 1440 pixels at 521 ppi. Features include HDR10+ support and a 120Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 3 chipset for a powerful, smooth performance.",
            Memory: "Equipped with up to 12GB of LPDDR5 RAM.",
        },
        Camera: {
            Rear: [
                "200MP Main (f/1.7 aperture) for high-quality photography.",
                "50MP Ultra-Wide (f/2.2 aperture) with a 120° field of view.",
                "12MP Telephoto (f/2.4 aperture) with 3x optical zoom."
            ],
            Front: ["16MP Selfie camera (f/2.5 aperture) with AI beautification and Night Mode."],
            Features: "Pro mode, AI Scene Detection, 4K video recording at 30fps, and Super Night Mode.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 22 hours of continuous video playback.",
            charging: "Supports 67W fast wired charging, 50W wireless charging, and 10W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for high-speed internet access.",
            wifi: "Wi-Fi 6 for faster speeds and better performance.",
            bluetooth: "Bluetooth 5.3 for reliable connectivity.",
            ports: "USB-C 2.0 port for fast data transfer and charging.",
        },
        os: "Ships with MIUI 15 based on Android 14, with regular updates for 3 years.",
        additional: [
            "Corning Gorilla Glass 5 for protection.",
            "IP53 splash-proof resistance.",
            "In-display fingerprint scanner for secure unlocking."
        ],
        images: {
            'Black': Note14proplusblack,
      '#E3E0EA': Note14propluspurple,
      '#98bfc9': Note14proplusblue
        },
        inStock: false,
    }
    
    
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
                <Link to="/pixel">Xiaomi</Link>
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
