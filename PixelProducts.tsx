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

import pro9XLobsidian from '../assets/Pixel/Google Pixel 9 Pro XL Obsidian.jpg';
import pro9XLporcelain from '../assets/Pixel/Google Pixel 9 Pro XL Porcelain.jpg';
import pro9XLhazel from '../assets/Pixel/Google Pixel 9 Pro XL Hazel.jpg';
import pro9FoldObsidian from '../assets/Pixel/Google Pixel 9 Pro Fold Obsidian.jpg';
import pro9Foldporcelain from '../assets/Pixel/Google Pixel 9 Pro Fold Porcelain.jpg';
import pro8obsidian from '../assets/Pixel/Google Pixel 8 Pro Obsidian.jpg';
import pro8bay from '../assets/Pixel/Google Pixel 8 Pro bay.jpg';
import Lemongrass8 from '../assets/Pixel/Google Pixel 8 Lemongrass.jpg';
import Obsidian8 from '../assets/Pixel/Google Pixel 8 Obsidian.jpg';
import porcelain8 from '../assets/Pixel/Google Pixel 8 porcelain.jpg';
import A8Obsidian from '../assets/Pixel/Google Pixel 8A Obsidian.jpg';
import A8porcelain from '../assets/Pixel/Google Pixel 8A porcelain.avif';
import pro7obsidian from '../assets/Pixel/google pixel 7 pro obsidian.jpg';
import pro7hazel from '../assets/Pixel/Google Pixel 7 Pro hazel.jpg';
import pro7snow from '../assets/Pixel/Google Pixel 7 Pro snow.jpg';

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
        name: "Google Pixel 9 Pro XL",
        price: "LKR 254,500 - LKR 455,000",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["#71627a", "#e9e0d5", "#D4CEC3"],
        Design: {
            Dimensions: "Height: 163.2 mm; Width: 76.6 mm; Depth: 8.8 mm.",
            Weight: "220 grams.",
            Display: "6.7-inch LTPO OLED display with a resolution of 3120 x 1440 pixels at 512 ppi. Features include Always-On Display, HDR10+ support, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Google Tensor G4 chip with custom AI optimizations for efficiency and performance.",
            Memory: "Equipped with up to 12GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.9 aperture) with advanced computational photography.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "48MP Telephoto (f/3.5 aperture) with 5x optical zoom and 30x Super Res Zoom."
            ],
            Front: ["11MP Selfie camera (f/2.0 aperture) with auto-focus and AI enhancements."],
            Features: "Magic Eraser, Real Tone, Cinematic Pan, 4K video recording at 60fps, and Astrophotography mode.",
        },
        Battery: {
            life: "5100mAh battery supporting up to 26 hours of continuous video playback.",
            charging: "Supports 30W fast wired charging, 23W wireless charging, and reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 for superior connectivity.",
            wifi: "Wi-Fi 7 for ultra-fast speeds.",
            bluetooth: "Bluetooth 5.3 for stable connections.",
            ports: "Features a USB-C 3.1 port for data transfer and charging.",
        },
        os: "Ships with Android 14, featuring Pixel-exclusive software enhancements and regular updates for 5 years.",
        additional: [
            "Corning Gorilla Glass Victus for enhanced durability.",
            "IP68 dust and water resistance.",
            "Google's Titan M3 security chip for robust data protection."
        ],
        images: {
            '#71627a': pro9XLobsidian,
      '#e9e0d5': pro9XLporcelain,
      '#D4CEC3': pro9XLhazel
        },
        inStock: true,
    },
    2:{
        id: 2,
        name: "Google Pixel 9 Pro",
        price: "LKR 261,900 - LKR 287,900",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["#71627a", "#e9e0d5", "#D4CEC3"],
        Design: {
            Dimensions: "Height: 162.2 mm; Width: 76.6 mm; Depth: 8.9 mm.",
            Weight: "212 grams.",
            Display: "6.7-inch LTPO OLED display with a resolution of 3120 x 1440 pixels at 512 ppi. Features include Always-On Display, HDR support, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Google Tensor G3 processor with AI-enhanced performance.",
            Memory: "Equipped with up to 12GB of LPDDR5 RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.8 aperture) with OIS and Super Res Zoom.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "48MP Telephoto (f/3.5 aperture) with 5x optical zoom and up to 30x Super Res Zoom."
            ],
            Front: ["11MP Selfie camera (f/2.2 aperture) with Face Unblur and Real Tone technology."],
            Features: "Magic Eraser, Cinematic Blur, 4K video recording at 60fps, and Night Sight for low-light photography.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 24 hours of typical use and Extreme Battery Saver mode extending up to 72 hours.",
            charging: "Supports 30W fast wired charging, 23W wireless charging, and reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6E.",
            wifi: "Wi-Fi 6E for fast and reliable connectivity.",
            bluetooth: "Bluetooth 5.2 for advanced audio and connectivity.",
            ports: "Features a USB-C 3.1 Gen 1 port for fast data transfer and charging.",
        },
        os: "Ships with Android 14, ensuring the latest features and regular updates directly from Google.",
        additional: [
            "Corning Gorilla Glass Victus for superior durability.",
            "IP68 dust and water resistance.",
            "Titan M2 chip for enhanced security and privacy.",
            "Includes Google Pixel-exclusive features like Call Screen, Hold for Me, and Live Translate."
        ],
        images: {
            '#71627a': pro9XLobsidian,
      '#e9e0d5': pro9XLporcelain,
      '#D4CEC3': pro9XLhazel
        },
        inStock: false,
    },
    3:{
        id: 3,
        name: "Google Pixel 9",
        price: "LKR 199,000 - LKR 264,999",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["#71627a", "#e9e0d5", "#D4CEC3"],
        Design: {
            Dimensions: "Height: 161.6 mm; Width: 75.2 mm; Depth: 8.9 mm.",
            Weight: "213 grams.",
            Display: "6.7-inch LTPO OLED display with a resolution of 3120 x 1440 pixels at 518 ppi. Features include Always-On Display, HDR10+ support, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Google Tensor G3 chip designed for AI and machine learning tasks, ensuring seamless performance.",
            Memory: "Up to 12GB of LPDDR5X RAM for multitasking efficiency.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.9 aperture) with Super Res Zoom and OIS.",
                "12MP Ultra-Wide (f/2.2 aperture) with a 114° field of view.",
                "48MP Telephoto (f/3.5 aperture) with 5x optical zoom and up to 30x Super Res Zoom."
            ],
            Front: ["11MP Selfie camera (f/2.2 aperture) with enhanced AI capabilities."],
            Features: "Real Tone, Magic Eraser, Cinematic Blur, 4K video recording at 60fps, and advanced Night Sight for exceptional low-light photography.",
        },
        Battery: {
            life: "5000mAh battery offering up to 30 hours of usage and up to 72 hours with Extreme Battery Saver.",
            charging: "Supports 30W wired charging, 23W wireless charging, and Battery Share for reverse charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 with tri-band capabilities.",
            wifi: "Wi-Fi 7 for superior connectivity speeds.",
            bluetooth: "Bluetooth 5.3 for high-performance wireless connections.",
            ports: "USB-C 3.2 Gen 2 for rapid data transfer and fast charging.",
        },
        os: "Runs on Android 14 with Pixel-exclusive features and 5 years of software updates.",
        additional: [
            "Corning Gorilla Glass Victus for premium durability.",
            "IP68 dust and water resistance.",
            "Pixel-exclusive AI features for smarter performance.",
            "Supports Google One cloud storage integration."
        ],
        images: {
            '#71627a': pro9XLobsidian,
      '#e9e0d5': pro9XLporcelain,
      '#D4CEC3': pro9XLhazel
        },
        inStock: true,
    },
    4:{
        id: 4,
        name: "Google Pixel 9 Pro Fold",
        price: "LKR 439,000 - LKR 560,000",
        storageOptions: ["256GB", "512GB", "1TB"],
        colors: ["#71627a", "#e9e0d5"],
        Design: {
            Dimensions: "Folded: Height: 140.2 mm; Width: 72.1 mm; Depth: 15.8 mm. Unfolded: Height: 140.2 mm; Width: 144.2 mm; Depth: 7.6 mm.",
            Weight: "283 grams.",
            Display: "Main Display: 7.6-inch LTPO OLED with 2208 x 1840 resolution at 380 ppi. Cover Display: 5.8-inch OLED with 2092 x 1080 resolution at 443 ppi. Both support a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Google Tensor G3 processor with advanced AI capabilities and energy efficiency.",
            Memory: "Equipped with up to 12GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.85 aperture) with advanced HDR and OIS.",
                "12MP Ultra-Wide (f/2.2 aperture) with 125.8° field of view.",
                "48MP Telephoto (f/3.5 aperture) with 5x optical zoom and up to 30x Super Res Zoom."
            ],
            Front: [
                "Outer Cover: 9.5MP Selfie camera (f/2.2 aperture).",
                "Inner Display: 8MP Selfie camera (f/2.0 aperture)."
            ],
            Features: "Night Sight, Magic Eraser, Real Tone, 4K video recording at 60fps, and Motion Mode for creative video shots.",
        },
        Battery: {
            life: "4821mAh battery supporting up to 24 hours of typical usage and up to 72 hours in Extreme Battery Saver mode.",
            charging: "Supports 30W fast wired charging, 15W wireless charging, and reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 with advanced multi-link operation.",
            wifi: "Wi-Fi 7 for faster and more reliable connections.",
            bluetooth: "Bluetooth 5.3 with enhanced audio support.",
            ports: "USB-C 3.2 Gen 2 for fast data transfer and charging.",
        },
        os: "Ships with Android 15 and exclusive Pixel features, including Pixel Launcher and Adaptive Battery.",
        additional: [
            "Titan M3 security chip for enhanced data protection.",
            "Foldable design with ultra-thin glass for durability.",
            "IPX8 water resistance."
        ],
        images: {
            '#71627a': pro9FoldObsidian,
      '#e9e0d5': pro9Foldporcelain
        },
        inStock: false,
    },
    5:    {
        id: 5,
        name: "Google Pixel 8 Pro",
        price: "LKR 196,000 - LKR 212,950",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["#71627a", "#576D72"],
        Design: {
            Dimensions: "Height: 162.6 mm; Width: 76.5 mm; Depth: 8.7 mm.",
            Weight: "213 grams.",
            Display: "6.7-inch LTPO OLED display with a resolution of 2992 x 1344 pixels at 490 ppi. Features include Always-On Display, HDR10+, and a 120Hz adaptive refresh rate."
        },
        Performance: {
            Processor: "Powered by Google Tensor G3 processor for cutting-edge AI capabilities and efficient performance.",
            Memory: "Equipped with up to 12GB of LPDDR5X RAM."
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.68 aperture) with Octa PD technology.",
                "48MP Ultra-Wide (f/2.2 aperture) with a 125.8-degree field of view.",
                "48MP Telephoto (f/3.5 aperture) with 5x optical zoom and Super Res Zoom up to 30x."
            ],
            Front: ["11MP Selfie camera (f/2.2 aperture) with advanced computational photography."],
            Features: "Magic Eraser, Real Tone, Night Sight, 4K video recording at 60fps, and Photo Unblur for enhanced clarity."
        },
        Battery: {
            life: "4950mAh battery supporting up to 24 hours of usage.",
            charging: "Supports 30W fast wired charging, 23W wireless charging, and Battery Share for reverse wireless charging."
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 for exceptional connectivity.",
            wifi: "Wi-Fi 7 with enhanced dual-band performance.",
            bluetooth: "Bluetooth 5.3 for reliable wireless connections.",
            ports: "USB-C 3.2 Gen 2 port for fast data transfer and charging."
        },
        os: "Ships with Android 14, providing a clean and smart user interface with exclusive Pixel features.",
        additional: [
            "Corning Gorilla Glass Victus for robust durability.",
            "IP68 dust and water resistance.",
            "Pixel-exclusive AI features for productivity and photography."
        ],
        images: {
            '#71627a': pro8obsidian,
      '#576D72': pro8bay
        },
        inStock: true
    },
    6:{
        id: 6,
        name: "Google Pixel 8",
        price: "LKR 199,900 - LKR 279,900",
        storageOptions: ["128GB", "256GB"],
        colors: ["#969580", "#71627a", "#F2F2F2"],
        Design: {
            Dimensions: "Height: 150.5 mm; Width: 70.8 mm; Depth: 8.9 mm.",
            Weight: "187 grams.",
            Display: "6.2-inch Actua AMOLED display with a resolution of 2400 x 1080 pixels at 428 ppi. Features include HDR support, Always-On Display, and a 120Hz adaptive refresh rate."
        },
        Performance: {
            Processor: "Google Tensor G3 with custom AI optimization and 4nm architecture.",
            Memory: "Equipped with 8GB of LPDDR5 RAM."
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.9 aperture) with Octa PD technology.",
                "12MP Ultra-Wide (f/2.2 aperture) with a 125.8° field of view."
            ],
            Front: ["10.5MP Selfie camera (f/2.2 aperture) with AI enhancements."],
            Features: "Magic Editor, Night Sight, Real Tone, 4K video recording at 60fps, and Live HDR+."
        },
        Battery: {
            life: "4575mAh battery supporting up to 24 hours of standard usage and up to 72 hours in Extreme Battery Saver mode.",
            charging: "Supports 27W wired charging, 18W wireless charging, and reverse wireless charging."
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6E.",
            wifi: "Wi-Fi 6E for high-speed wireless connections.",
            bluetooth: "Bluetooth 5.3 for enhanced device connectivity.",
            ports: "Features a USB-C 3.2 Gen 2 port."
        },
        os: "Ships with Android 14, featuring exclusive Pixel tools and 7 years of OS updates.",
        additional: [
            "Corning Gorilla Glass Victus for durability.",
            "IP68 dust and water resistance.",
            "Pixel-exclusive AI features such as Call Screening, Assistant Typing, and Photo Unblur."
        ],
        images: {
            '#969580': Lemongrass8,
      '#71627a': Obsidian8,
      '#F2F2F2': porcelain8
        },
        inStock: true
    },
    7:{
        id: 7,
        name: "Google Pixel 8A",
        price: "LKR 135,000 - LKR 150,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["#71627a", "#EFF2F3"],
        Design: {
            Dimensions: "Height: 152 mm; Width: 72.1 mm; Depth: 8.9 mm.",
            Weight: "178 grams.",
            Display: "6.1-inch OLED display with a resolution of 2400 x 1080 pixels at 429 ppi. Features include Always-On Display and a 90Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Google Tensor G3 processor, offering smooth AI-driven performance.",
            Memory: "Equipped with 8GB of LPDDR5 RAM.",
        },
        Camera: {
            Rear: [
                "64MP Main (f/1.8 aperture) with OIS and advanced computational photography.",
                "12MP Ultra-Wide (f/2.2 aperture)."
            ],
            Front: ["10.8MP Selfie camera (f/2.0 aperture) with HDR support."],
            Features: "Real Tone, Magic Eraser, Photo Unblur, 4K video recording at 60fps, and Night Sight for stunning low-light photography.",
        },
        Battery: {
            life: "4500mAh battery supporting up to 22 hours of usage.",
            charging: "Supports 18W wired charging and 12W wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6E for fast and reliable connectivity.",
            wifi: "Wi-Fi 6E for enhanced wireless performance.",
            bluetooth: "Bluetooth 5.2 for reliable device pairing.",
            ports: "USB-C 3.1 for efficient data transfer and charging.",
        },
        os: "Ships with Android 14, offering a clean and secure user experience with guaranteed updates for 5 years.",
        additional: [
            "Corning Gorilla Glass Victus for display protection.",
            "IP67 dust and water resistance.",
            "Titan M2 security chip for enhanced device security."
        ],
        images: {
            '#71627a': A8Obsidian,
      '#EFF2F3': A8porcelain
        },
        inStock: false,
    },
    8:{
        id: 8,
        name: "Google Pixel 7 Pro",
        price: "LKR 180,000 - LKR 220,000",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["#71627a", "#C8B575", "#FFFAFA"],
        Design: {
            Dimensions: "Height: 162.9 mm; Width: 76.6 mm; Depth: 8.7 mm.",
            Weight: "212 grams.",
            Display: "6.7-inch LTPO OLED display with a resolution of 3120 x 1440 pixels at 512 ppi. Features include Always-On Display and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Google Tensor G2 processor with 5nm architecture for optimized performance and AI capabilities.",
            Memory: "Equipped with up to 12GB of LPDDR5 RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.9 aperture) with Quad Bayer technology.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "48MP Telephoto (f/3.5 aperture) with 5x optical zoom and up to 30x Super Res Zoom."
            ],
            Front: ["10.8MP Selfie camera (f/2.2 aperture) with advanced AI and wide-angle capabilities."],
            Features: "Cinematic Blur, Real Tone, Magic Eraser, 4K video recording at 60fps, and advanced Night Sight.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 24 hours of typical usage and Extreme Battery Saver for up to 72 hours.",
            charging: "Supports 30W wired charging, 23W wireless charging, and Battery Share for reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6E for fast and reliable connections.",
            wifi: "Wi-Fi 6E for enhanced wireless performance.",
            bluetooth: "Bluetooth 5.2 for efficient connectivity.",
            ports: "Features a USB-C 3.1 Gen 2 port for fast data transfer and charging.",
        },
        os: "Ships with Android 14, offering the latest features and security updates.",
        additional: [
            "Corning Gorilla Glass Victus for superior durability.",
            "IP68 dust and water resistance.",
            "Includes Titan M2 security chip for enhanced protection.",
            "Adaptive Battery technology for extended efficiency."
        ],
        images: {
            '#71627a': pro7obsidian,
      '#C8B575': pro7hazel,
      '#FFFAFA': pro7snow
        },
        inStock: true,
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
                <Link to="/pixel">Pixel</Link>
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
