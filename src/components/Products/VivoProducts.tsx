import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import './Products.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../Header/FavoritesContext';

import V21blue from '../../assets/vivo/Vivo V21 5G Dusk Blue.jpg';
import V21sunset from '../../assets/vivo/Vivo V21 5G Sunset Dazzle.jpg';
import Y1s3GBblue from '../../assets/vivo/Vivo Y1s 3GB Aurora Blue.jpg';
import Y1s3GBblack from '../../assets/vivo/Vivo Y1s 3GB Olive Black.jpg';
import V20SEblack from '../../assets/vivo/Vivo V20 SE Gravity Black.jpg';
import V20SEblue from '../../assets/vivo/Vivo V20 SE Oxygen Blue.jpg';
import V20sunset from '../../assets/vivo/Vivo V20  Sunset Melody.webp';
import V20midnight from '../../assets/vivo/Vivo V20 Midnight Jazz.jpg';
import Y27sblack from '../../assets/vivo/Vivo Y27S Burgundy Black.jpg';
import Y27sgreen from '../../assets/vivo/Vivo Y27S Garden Green.png';
import Y22sblue from '../../assets/vivo/Vivo Y22s  Starlit Blue.jpg';
import Y22scyan from '../../assets/vivo/Vivo Y22s  Summer Cyan.jpg';
import Y17sgreen from '../../assets/vivo/Vivo Y17S Forest Green.png';
import Y17spurple from '../../assets/vivo/Vivo Y17S Glitter Purple.png';
import Y19sblack from '../../assets/vivo/Vivo Y19s Glossy Black.jpg';
import Y19ssilver from '../../assets/vivo/Vivo Y19s Pearl Silver.jpg';
import V295Gblack from '../../assets/vivo/Vivo V29 5G Forest Black.jpg';
import V295Gmagic from '../../assets/vivo/Vivo V29 5G Magic Maroon.jpeg';
import V295Gpink from '../../assets/vivo/Vivo V29 5G Rose Pink.jpg';
import V295Gice from '../../assets/vivo/Vivo V29 5G ice Creek Blue.jpg';

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
        name: "Vivo V21 5G",
        price: "LKR 89,900 - LKR 95,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["#57727f", "#0072B8"],
        Design: {
            Dimensions: "Height: 159.7 mm; Width: 73.9 mm; Depth: 7.3 mm.",
            Weight: "176 grams.",
            Display: "6.44-inch AMOLED display with a resolution of 2400 x 1080 pixels at 409 ppi. Features include HDR10+ support and a 90Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 800U with 7nm architecture for efficient performance.",
            Memory: "Equipped with 8GB of LPDDR4X RAM, with an additional 3GB extended RAM feature.",
        },
        Camera: {
            Rear: [
                "64MP OIS Wide (f/1.8 aperture) with advanced low-light performance.",
                "8MP Ultra-Wide (f/2.2 aperture) with 120° field of view.",
                "2MP Macro (f/2.4 aperture) for close-up shots."
            ],
            Front: ["44MP OIS Selfie camera (f/2.0 aperture) with dual LED flash and advanced AI features."],
            Features: "OIS for both front and rear cameras, 4K video recording at 30fps, Night Mode, and Super Macro.",
        },
        Battery: {
            life: "4000mAh battery supporting up to 18 hours of moderate usage.",
            charging: "Supports 33W FlashCharge for rapid recharging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and dual SIM.",
            wifi: "Wi-Fi 5 for stable connectivity.",
            bluetooth: "Bluetooth 5.1 for enhanced reliability.",
            ports: "Features a USB-C 2.0 port for charging and data transfer.",
        },
        os: "Ships with Funtouch OS 11.1 based on Android 11, with guaranteed updates for 2 years.",
        additional: [
            "AG Matte Glass for a fingerprint-resistant finish.",
            "Hybrid SIM slot with expandable storage up to 1TB.",
            "Dual microphone noise cancellation for clearer calls."
        ],
        images: {
            '#57727f': V21blue,
            '#0072B8': V21sunset
        },
        inStock: true,
    },
    2: {
        id: 2,
        name: "Vivo Y1s 3GB",
        price: "LKR 34,900 - LKR 38,000",
        storageOptions: ["32GB"],
        colors: ["#eaffff", "#3B3834"],
        Design: {
            Dimensions: "Height: 155.1 mm; Width: 75.1 mm; Depth: 8.3 mm.",
            Weight: "161 grams.",
            Display: "6.22-inch IPS LCD display with a resolution of 1520 x 720 pixels. Features include a FullView Display and a 19:9 aspect ratio.",
        },
        Performance: {
            Processor: "Powered by MediaTek Helio P35 for smooth everyday performance.",
            Memory: "Equipped with 3GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "13MP Wide (f/2.2 aperture) for clear and vivid photography."
            ],
            Front: ["5MP Selfie camera (f/1.8 aperture) with AI Face Beauty features."],
            Features: "HDR, Panorama mode, and Full HD video recording at 30fps.",
        },
        Battery: {
            life: "4030mAh battery for all-day usage.",
            charging: "Supports 10W charging via micro-USB.",
        },
        connectivity: {
            network: "Supports 4G LTE and 3G networks for reliable connectivity.",
            wifi: "Wi-Fi 802.11 b/g/n for stable internet connection.",
            bluetooth: "Bluetooth 5.0 for seamless wireless connectivity.",
            ports: "Features a micro-USB port for charging and data transfer.",
        },
        os: "Ships with Funtouch OS 10.5 based on Android 10, providing a clean and efficient user experience.",
        additional: [
            "Face Access for quick and secure unlocking.",
            "Eye Protection Mode for reduced blue light.",
            "Sleek and lightweight design for comfortable handling."
        ],
        images: {
            '#eaffff': Y1s3GBblue,
            '#3B3834': Y1s3GBblack
        },
        inStock: false,
    },

    3: {
        id: 3,
        name: "Vivo V20 SE",
        price: "LKR 80,000 - LKR 85,000",
        storageOptions: ["128GB"],
        colors: ["#454A53", "#90B5D4"],
        Design: {
            Dimensions: "Height: 161 mm; Width: 74.08 mm; Depth: 7.83 mm.",
            Weight: "171 grams.",
            Display: "6.44-inch AMOLED display with a resolution of 2400 x 1080 pixels at 409 ppi. Features include HDR10 support and Eye Care mode.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 665 for smooth multitasking and gaming.",
            Memory: "Equipped with 8GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "48MP Wide (f/1.8 aperture) for crisp and detailed photos.",
                "8MP Ultra-Wide (f/2.2 aperture) with 120° field of view.",
                "2MP Depth Sensor (f/2.4 aperture) for better portrait shots."
            ],
            Front: ["32MP Selfie camera (f/2.0 aperture) with Super Night Selfie mode."],
            Features: "AI Face Beauty, Super Night Mode, 4K video recording, and Ultra Stable Video.",
        },
        Battery: {
            life: "4100mAh battery supporting up to 18 hours of moderate usage.",
            charging: "Supports 33W FlashCharge for fast charging.",
        },
        connectivity: {
            network: "Supports 4G LTE and dual-band Wi-Fi for reliable connectivity.",
            wifi: "Wi-Fi 5 for stable connections.",
            bluetooth: "Bluetooth 5.0 for seamless pairing.",
            ports: "Features a USB-C port for charging and data transfer.",
        },
        os: "Ships with Funtouch OS 11 based on Android 10, with regular software updates.",
        additional: [
            "Corning Gorilla Glass 3 for enhanced durability.",
            "In-display fingerprint scanner for secure unlocking.",
            "Multi-Turbo for enhanced gaming performance."
        ],
        images: {
            '#454A53': V20SEblack,
            '#90B5D4': V20SEblue
        },
        inStock: true,
    },
    4: {
        id: 4,
        name: "Vivo V20",
        price: "LKR 89,900 - LKR 95,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["#4A90E2", "#272757"],
        Design: {
            Dimensions: "Height: 161.3 mm; Width: 74.2 mm; Depth: 7.38 mm.",
            Weight: "171 grams.",
            Display: "6.44-inch AMOLED display with a resolution of 2400 x 1080 pixels at 409 ppi. Features include HDR10 support and an ultra-slim bezel design.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 720G for smooth and efficient performance.",
            Memory: "Equipped with 8GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "64MP Wide (f/1.89 aperture) with advanced autofocus capabilities.",
                "8MP Ultra-Wide (f/2.2 aperture) with 120° field of view.",
                "2MP Mono (f/2.4 aperture) for detailed black-and-white photography."
            ],
            Front: ["44MP Eye Autofocus camera (f/2.0 aperture) with AI beautification and 4K video recording."],
            Features: "Super Night Mode, Ultra Stable Video, 4K recording, and Dual-View Video.",
        },
        Battery: {
            life: "4000mAh battery supporting all-day usage.",
            charging: "Supports 33W FlashCharge technology for quick refueling.",
        },
        connectivity: {
            network: "Supports 4G LTE and dual-SIM functionality.",
            wifi: "Wi-Fi 5 for reliable connectivity.",
            bluetooth: "Bluetooth 5.1 for efficient pairing and data transfer.",
            ports: "Features a USB-C 2.0 port for charging and data transfer.",
        },
        os: "Ships with Funtouch OS 11 based on Android 11, offering a clean and customizable user interface.",
        additional: [
            "AG Matte Glass finish for a stylish and fingerprint-resistant design.",
            "In-display fingerprint sensor for fast and secure unlocking.",
            "Ultra Game Mode for optimized gaming performance."
        ],
        images: {
            '#4A90E2': V20sunset,
            '#272757': V20midnight
        },
        inStock: false,
    },

    5: {
        id: 5,
        name: "Vivo Y27S",
        price: "LKR 77,990 - LKR 80,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["#660033", "#4CAF50"],
        Design: {
            Dimensions: "Height: 164.1 mm; Width: 76.2 mm; Depth: 8.1 mm.",
            Weight: "190 grams.",
            Display: "6.64-inch LCD display with a resolution of 2388 x 1080 pixels at 395 ppi. Features include Eye Protection Mode, HDR support, and a 120Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 6020 chipset for smooth performance.",
            Memory: "Equipped with up to 8GB of LPDDR4X RAM, with 8GB extended RAM support.",
        },
        Camera: {
            Rear: [
                "64MP Wide (f/1.8 aperture) for detailed photography.",
                "2MP Macro (f/2.4 aperture) for close-up shots."
            ],
            Front: ["16MP Selfie camera (f/2.0 aperture) with AI Beauty mode."],
            Features: "AI scene recognition, Night Mode, 4K video recording at 30fps, and Portrait Mode.",
        },
        Battery: {
            life: "5000mAh battery designed for all-day usage.",
            charging: "Supports 44W FlashCharge, delivering up to 70% charge in 30 minutes.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and dual-band Wi-Fi.",
            wifi: "Wi-Fi 6 for faster speeds and improved stability.",
            bluetooth: "Bluetooth 5.1 for reliable wireless connections.",
            ports: "Features a USB-C 2.0 port for data transfer and charging, along with a 3.5mm headphone jack.",
        },
        os: "Ships with Funtouch OS 13 based on Android 13, offering smooth and customizable user experience.",
        additional: [
            "Panda Glass for screen durability.",
            "IP54 splash and dust resistance.",
            "Side-mounted fingerprint scanner for quick unlocking."
        ],
        images: {
            '#660033': Y27sblack,
            '#4CAF50': Y27sgreen
        },
        inStock: true,
    },
    6: {
        id: 6,
        name: "Vivo Y22s",
        price: "LKR 62,500 - LKR 65,000",
        storageOptions: ["128GB"],
        colors: ["#4d5f7a", "#00FFFF"],
        Design: {
            Dimensions: "Height: 164.3 mm; Width: 76.1 mm; Depth: 8.4 mm.",
            Weight: "192 grams.",
            Display: "6.55-inch IPS LCD display with a resolution of 1612 x 720 pixels at 268 ppi. Features include 90Hz refresh rate and Eye Protection Mode.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 680 with a focus on power efficiency and smooth performance.",
            Memory: "Equipped with 6GB of RAM (extendable by 6GB via RAM expansion technology).",
        },
        Camera: {
            Rear: [
                "50MP Main Camera (f/1.8 aperture) for detailed shots.",
                "2MP Macro Camera (f/2.4 aperture) for close-up photography."
            ],
            Front: ["8MP Selfie Camera (f/2.0 aperture) with AI beautification features."],
            Features: "Super Night Mode, 1080p video recording at 30fps, and Multi-Style Portraits.",
        },
        Battery: {
            life: "5000mAh battery offering up to 2 days of moderate use.",
            charging: "Supports 18W Fast Charging via USB-C.",
        },
        connectivity: {
            network: "Supports 4G LTE for fast browsing and downloads.",
            wifi: "Wi-Fi 5 (802.11ac) for reliable connectivity.",
            bluetooth: "Bluetooth 5.0 for better range and compatibility.",
            ports: "Features a USB-C port for charging and data transfer and a 3.5mm headphone jack.",
        },
        os: "Ships with Funtouch OS 12 based on Android 12, offering a clean and customizable user experience.",
        additional: [
            "Side-mounted fingerprint sensor for fast unlocking.",
            "IP5X dust resistance and IPX4 water resistance.",
            "Multi-Turbo 5.5 for enhanced gaming and app performance."
        ],
        images: {
            '#4d5f7a': Y22sblue,
            '#00FFFF': Y22scyan
        },
        inStock: true,
    },

    7: {
        id: 7,
        name: "Vivo Y17S",
        price: "LKR 55,000 - LKR 60,000",
        storageOptions: ["128GB"],
        colors: ["#228B22", "#8E3FE2"],
        Design: {
            Dimensions: "Height: 164.1 mm; Width: 76.2 mm; Depth: 8.1 mm.",
            Weight: "186 grams.",
            Display: "6.56-inch IPS LCD display with a resolution of 1612 x 720 pixels at 267 ppi. Features include a waterdrop notch and 60Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Helio G85 for smooth performance in daily tasks and casual gaming.",
            Memory: "Equipped with 6GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Wide (f/1.8 aperture) for detailed and clear shots.",
                "2MP Depth (f/2.4 aperture) for bokeh effects."
            ],
            Front: ["8MP Selfie camera (f/2.0 aperture) with AI face beauty features."],
            Features: "Portrait Mode, Night Mode, Full HD video recording at 30fps, and AI scene recognition.",
        },
        Battery: {
            life: "5000mAh battery designed for up to 2 days of usage on a single charge.",
            charging: "Supports 18W fast charging via micro-USB.",
        },
        connectivity: {
            network: "Supports 4G LTE, 3G, and 2G networks.",
            wifi: "Wi-Fi 802.11 b/g/n (2.4GHz).",
            bluetooth: "Bluetooth 5.0 for reliable connections.",
            ports: "Features a micro-USB port and 3.5mm headphone jack.",
        },
        os: "Ships with Funtouch OS 13 based on Android 13, offering a user-friendly interface with regular updates.",
        additional: [
            "Side-mounted fingerprint sensor for quick unlocking.",
            "Face unlock for added convenience.",
            "Eye Protection Mode to reduce blue light strain."
        ],
        images: {
            '#228B22': Y17sgreen,
            '#8E3FE2': Y17spurple
        },
        inStock: false,
    },

    8: {
        id: 8,
        name: "Vivo Y19s",
        price: "LKR 49,990 - LKR 52,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["#252324", "#E0E3E1"],
        Design: {
            Dimensions: "Height: 162.15 mm; Width: 76.47 mm; Depth: 8.89 mm.",
            Weight: "190 grams.",
            Display: "6.5-inch IPS LCD display with a resolution of 2400 x 1080 pixels at 401 ppi. Features include Eye Protection Mode and 90Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by MediaTek Helio G85, optimized for gaming and everyday tasks.",
            Memory: "Equipped with up to 8GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Wide (f/1.8 aperture) with advanced autofocus.",
                "2MP Macro (f/2.4 aperture) for close-up shots.",
                "2MP Depth Sensor (f/2.4 aperture) for portrait effects."
            ],
            Front: ["16MP Selfie camera (f/2.0 aperture) with AI beautification and HDR support."],
            Features: "Super Night Mode, Full HD video recording at 30fps, and Dual-View Video mode.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 2 days of moderate usage.",
            charging: "Supports 18W fast charging via USB-C.",
        },
        connectivity: {
            network: "Supports 4G LTE and dual-SIM functionality.",
            wifi: "Wi-Fi 5 for reliable connectivity.",
            bluetooth: "Bluetooth 5.0 for efficient connections.",
            ports: "Features a USB-C 2.0 port for charging and data transfer.",
        },
        os: "Ships with Funtouch OS 13 based on Android 13, providing a smooth and customizable user experience.",
        additional: [
            "Corning Gorilla Glass 3 for basic screen protection.",
            "Side-mounted fingerprint scanner for fast unlocking.",
            "Face Unlock feature for additional convenience."
        ],
        images: {
            '#252324': Y19sblack,
            '#E0E3E1': Y19ssilver
        },
        inStock: false,
    },
    9: {
        id: 9,
        name: "Vivo V29 5G",
        price: "LKR 100,000 - LKR 130,000",
        storageOptions: ["256GB", "512GB"],
        colors: ["#4D4841", "#800000", "#F7879A", "#368BC1"],
        Design: {
            Dimensions: "Height: 164.18 mm; Width: 74.37 mm; Depth: 7.46 mm.",
            Weight: "186 grams.",
            Display: "6.78-inch AMOLED display with a resolution of 2800 x 1260 pixels at 452 ppi. Features include 120Hz refresh rate, HDR10+, and 1.07 billion colors.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 7200 with efficient AI processing and seamless multitasking.",
            Memory: "Equipped with up to 12GB of LPDDR4X RAM, expandable via Extended RAM technology.",
        },
        Camera: {
            Rear: [
                "50MP Wide (f/1.9 aperture) with advanced OIS for stability.",
                "8MP Ultra-Wide (f/2.2 aperture) with a 120° field of view.",
                "2MP Depth sensor (f/2.4 aperture) for detailed portraits."
            ],
            Front: ["50MP Selfie camera (f/2.0 aperture) with Eye Autofocus and AI beauty mode."],
            Features: "Aura Light Portrait, Ultra Stable Video, Night Mode, and 4K video recording at 30fps.",
        },
        Battery: {
            life: "4600mAh battery supporting all-day usage.",
            charging: "Supports 80W FlashCharge for ultra-fast recharging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for seamless connectivity.",
            wifi: "Wi-Fi 6 for improved speed and efficiency.",
            bluetooth: "Bluetooth 5.3 for enhanced connectivity and stability.",
            ports: "Features a USB-C port for data transfer and charging.",
        },
        os: "Ships with Funtouch OS 13 based on Android 13, with guaranteed updates for 3 years.",
        additional: [
            "IP54 dust and water resistance.",
            "Color-changing glass back on selected models.",
            "Advanced cooling system for optimal performance during gaming.",
        ],
        images: {
            '#4D4841': V295Gblack,
            '#800000': V295Gmagic,
            '#F7879A': V295Gpink,
            '#368BC1': V295Gice
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
        window.location.href = '/checkout'    };

    return (
        <div className="product-page">
            <Navbar />
            <div className="breadcrumb1">
                <Link to="/home">Home</Link>
                {" > "}
                <Link to="/pixel">Vivo</Link>
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
