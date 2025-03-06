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

import s24ultrablack from '../../assets/Samsung/samsung galaxy s24 ultra phantom black.jpg';
import s24ultrasilver from '../../assets/Samsung/samsung galaxy s24 ultra Phantom Silver.jpg';
import s24ultragreen from '../../assets/Samsung/samsung galaxy s24 ultra Phantom Green.jpg';
import sblack from '../../assets/Samsung/samsung galaxy s24 phantom black.jpg';
import ssilver from '../../assets/Samsung/Samsung Galaxy S24 Phantom Silver.jpg';
import syellow from '../../assets/Samsung/Samsung Galaxy S24 titanium yellow .jpg';
import Zfold6black from '../../assets/Samsung/Samsung Galaxy Z Fold6 Phantom Black.jpg';
import zfold6beige from '../../assets/Samsung/Samsung Galaxy Z Fold6 Beige.jpg';
import zfold6Burgundy from '../../assets/Samsung/Samsung Galaxy Z Fold6 Burgundy.jpg';
import zflip6mint from '../../assets/Samsung/Samsung Galaxy Z Flip6 mint.jpg';
import zflip6borapurple from '../../assets/Samsung/Samsung Galaxy Z Flip6 Bora Purple.jpg';
import zflip6cream from '../../assets/Samsung/Samsung Galaxy Z Flip6 Cream.jpg';
import s23ultrablack from '../../assets/Samsung/Samsung Galaxy S23 Ultra Phantom Black.jpg';
import s23ultrasilver from '../../assets/Samsung/Samsung Galaxy S23 Ultra Phantom Silver.jpg';
import s23ultralavender from '../../assets/Samsung/Samsung Galaxy S23 Ultra Phantom lavender.webp';
import s23FEgraphite from '../../assets/Samsung/Samsung Galaxy S23 FE Graphite.jpg';
import s23FElavender from '../../assets/Samsung/Samsung Galaxy S23 FE Lavender.jpg';
import s23FEolive from '../../assets/Samsung/Samsung Galaxy S23 FE Olive.jpg';
import A555Gblack from '../../assets/Samsung/Samsung Galaxy A55 5G Awesome Black.jpg';
import A555Gviolet from '../../assets/Samsung/Samsung Galaxy A55 5G Awesome violet.jpg';
import A555Gwhite from '../../assets/Samsung/Samsung Galaxy A55 5G Awesome white.jpg';
import M555GIcyblue from '../../assets/Samsung/Samsung Galaxy M55 5G Icy Blue.jpg';
import M555GBlazing from '../../assets/Samsung/Samsung Galaxy M55 5G Blazing Black.jpg';

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
        name: "Samsung Galaxy S24 Ultra",
        price: "LKR 350,000 - LKR 450,000'",
        storageOptions: ["256GB", "512GB", "1TB"],
        colors: ["#242725", "#E3E4E5", "#dce4d7"],
        Design: {
            Dimensions: "Height: 162.9 mm; Width: 79.8 mm; Depth: 8.8 mm.",
            Weight: "234 grams.",
            Display: "6.8-inch Dynamic AMOLED 2X display with a resolution of 3088 x 1440 pixels at 500 ppi. Features include Vision Booster, Always-On Display, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 3 processor with 4nm architecture, offering unmatched performance and efficiency.",
            Memory: "Equipped with up to 12GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "200MP Main (f/1.7 aperture) with Adaptive Pixel technology.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "10MP Telephoto (f/2.4 aperture) with 3x optical zoom.",
                "10MP Periscope Telephoto (f/4.9 aperture) with 10x optical zoom and up to 100x Space Zoom."
            ],
            Front: ["12MP Selfie camera (f/2.2 aperture) with advanced AI-driven enhancements."],
            Features: "Nightography, 8K video recording at 30fps, Super Steady mode, and Expert RAW support for professional-level photography.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 25 hours of continuous video playback.",
            charging: "Supports 45W super-fast wired charging, 15W wireless charging, and 4.5W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 with enhanced dual-band connectivity.",
            wifi: "Wi-Fi 7 for ultra-fast wireless performance.",
            bluetooth: "Bluetooth 5.3 for seamless connections.",
            ports: "Features a USB-C 3.2 Gen 2 port for ultra-fast data transfer and charging.",
        },
        os: "Ships with One UI 6 based on Android 14, offering an intuitive user experience and enhanced multitasking features.",
        additional: [
            "Corning Gorilla Glass Victus 2 for unmatched durability.",
            "IP68 dust and water resistance.",
            "Integrated S Pen for productivity and creativity."
        ],
        images: {
            '#242725': s24ultrablack,
            '#E3E4E5': s24ultrasilver,
            '#dce4d7': s24ultragreen
        },
        inStock: true,
    },

    2: {
        id: 2,
        name: "Samsung Galaxy S24",
        price: "LKR 250,000 - LKR 300,000",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["#242725", "#a3a4a", "#FAEE4D"],
        Design: {
            Dimensions: "Height: 158.2 mm; Width: 76.8 mm; Depth: 7.6 mm.",
            Weight: "195 grams.",
            Display: "6.6-inch Dynamic AMOLED 2X display with a resolution of 2340 x 1080 pixels at 400 ppi. Features include Vision Booster, Always-On Display, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 3 processor with 4nm architecture, delivering fast and efficient performance.",
            Memory: "Equipped with up to 8GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.8 aperture) with optical image stabilization.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "10MP Telephoto (f/2.4 aperture) with 3x optical zoom."
            ],
            Front: ["12MP Selfie camera (f/2.2 aperture) with advanced AI-driven enhancements."],
            Features: "Nightography, 4K video recording at 60fps, Super Steady mode, and Single Take photography.",
        },
        Battery: {
            life: "4700mAh battery supporting up to 20 hours of continuous video playback.",
            charging: "Supports 25W super-fast wired charging, 15W wireless charging, and 4.5W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 for faster and more reliable connectivity.",
            wifi: "Wi-Fi 7 dual-band support for high-speed wireless performance.",
            bluetooth: "Bluetooth 5.3 for smooth connections.",
            ports: "Features a USB-C 3.2 Gen 1 port for fast data transfer and charging.",
        },
        os: "Ships with One UI 6 based on Android 14, offering an enhanced and intuitive user experience.",
        additional: [
            "Corning Gorilla Glass Victus 2 for added durability.",
            "IP68 dust and water resistance.",
            "Compact design with premium build quality."
        ],
        images: {
            '#242725': sblack,
            '#a3a4a': ssilver,
            '#FAEE4D': syellow
        },
        inStock: false,
    },

    3: {
        id: 3,
        name: "Samsung Galaxy Z Fold6",
        price: "LKR 600,000 - LKR 700,000",
        storageOptions: ["256GB", "512GB", "1TB"],
        colors: ["#242725", "#F5F5DC", "#800020"],
        Design: {
            Dimensions: "Unfolded: Height: 158.2 mm; Width: 128.1 mm; Depth: 6.4 mm. Folded: Height: 158.2 mm; Width: 67.1 mm; Depth: 14.2 mm.",
            Weight: "263 grams.",
            Display: "Unfolded: 7.8-inch QXGA+ Dynamic AMOLED 2X display with 2176 x 1812 resolution at 372 ppi. Folded: 6.2-inch HD+ Dynamic AMOLED 2X display with 2316 x 904 resolution at 387 ppi. Both support 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 3 processor with 4nm architecture, ensuring cutting-edge performance.",
            Memory: "Equipped with 12GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.8 aperture) with Dual Pixel AF and OIS.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "10MP Telephoto (f/2.4 aperture) with 3x optical zoom."
            ],
            Front: [
                "4MP Under-Display Camera (f/1.8 aperture) for the main display.",
                "10MP Cover Camera (f/2.2 aperture) for the outer display."
            ],
            Features: "Flex mode camera features, 8K video recording at 30fps, Super Steady video, and Expert RAW support for professional-grade photography.",
        },
        Battery: {
            life: "4400mAh dual-cell battery designed for all-day performance.",
            charging: "Supports 45W wired charging, 15W wireless charging, and 4.5W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 with advanced dual-band connectivity.",
            wifi: "Wi-Fi 7 for ultra-fast and stable connections.",
            bluetooth: "Bluetooth 5.3 for seamless pairing.",
            ports: "Features a USB-C 3.2 Gen 2 port for high-speed data transfer and charging.",
        },
        os: "Ships with One UI 6 based on Android 14, optimized for multitasking and foldable screens.",
        additional: [
            "Armor Aluminum frame and hinge for enhanced durability.",
            "IPX8 water resistance for protection against water immersion.",
            "Optimized app continuity and Flex mode for better multitasking."
        ],
        images: {
            '#242725': Zfold6black,
            '#F5F5DC': zfold6beige,
            '#800020': zfold6Burgundy
        },
        inStock: true,
    },

    4: {
        id: 4,
        name: "Samsung Galaxy Z Flip6",
        price: "LKR 350,000 - LKR 420,000",
        storageOptions: ["128GB", "256GB", "512GB"],
        colors: ["#3EB489", "#bccfdb", "#FFFDD0"],
        Design: {
            Dimensions: "Unfolded: Height: 165.2 mm; Width: 71.9 mm; Depth: 6.9 mm. Folded: Height: 85.1 mm; Width: 71.9 mm; Depth: 15.9 mm.",
            Weight: "188 grams.",
            Display: "Main: 6.7-inch Dynamic AMOLED 2X with 120Hz adaptive refresh rate and a resolution of 2640 x 1080 pixels at 425 ppi. Cover: 3.4-inch AMOLED with a resolution of 748 x 720 pixels.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 3 chipset with advanced 4nm technology.",
            Memory: "Equipped with up to 8GB of LPDDR5X RAM.",
        },
        Camera: {
            Rear: [
                "12MP Wide (f/1.8 aperture) with OIS.",
                "12MP Ultra-Wide (f/2.2 aperture) with a 123-degree field of view."
            ],
            Front: ["10MP Selfie camera (f/2.4 aperture) located on the main display."],
            Features: "FlexCam for creative photography, 4K video recording at 60fps, and advanced AI-driven portrait mode.",
        },
        Battery: {
            life: "3700mAh dual-cell battery capable of lasting a full day with moderate usage.",
            charging: "Supports 25W fast wired charging, 15W wireless charging, and 4.5W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 7 with advanced connectivity.",
            wifi: "Wi-Fi 7 for ultra-fast speeds.",
            bluetooth: "Bluetooth 5.3 for enhanced wireless connections.",
            ports: "USB-C 3.2 port for fast charging and data transfer.",
        },
        os: "Ships with One UI 6 based on Android 14, offering an optimized foldable experience and multitasking features.",
        additional: [
            "Corning Gorilla Glass Victus 2 and Armor Aluminum frame for enhanced durability.",
            "IPX8 water resistance for added protection.",
            "Flex Mode for hands-free functionality and split-screen multitasking."
        ],
        images: {
            '#3EB489': zflip6mint,
            '#bccfdb': zflip6borapurple,
            '#FFFDD0': zflip6cream
        },
        inStock: false,
    },


    5: {
        id: 5,
        name: "Samsung Galaxy S23 Ultra",
        price: "LKR 300,000 - LKR 400,000",
        storageOptions: ["256GB", "512GB", "1TB"],
        colors: ["Black", "#C7C9D3", "#E6E6FA"],
        Design: {
            Dimensions: "Height: 163.4 mm; Width: 78.1 mm; Depth: 8.9 mm.",
            Weight: "234 grams.",
            Display: "6.8-inch Dynamic AMOLED 2X display with a resolution of 3088 x 1440 pixels at 500 ppi. Features include Vision Booster, Always-On Display, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 2 processor with 4nm architecture for excellent performance and efficiency.",
            Memory: "Equipped with up to 12GB of LPDDR5 RAM.",
        },
        Camera: {
            Rear: [
                "200MP Main (f/1.7 aperture) with Adaptive Pixel technology.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "10MP Telephoto (f/2.4 aperture) with 3x optical zoom.",
                "10MP Periscope Telephoto (f/4.9 aperture) with 10x optical zoom and up to 100x Space Zoom."
            ],
            Front: ["12MP Selfie camera (f/2.2 aperture) with advanced AI-driven enhancements."],
            Features: "Nightography, 8K video recording at 30fps, Super Steady mode, and Pro Mode support for RAW photography.",
        },
        Battery: {
            life: "5000mAh battery offering extended use for up to 22 hours of video playback.",
            charging: "Supports 45W super-fast wired charging, 15W wireless charging, and 4.5W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6E for faster wireless connectivity.",
            wifi: "Wi-Fi 6E for reliable performance and reduced latency.",
            bluetooth: "Bluetooth 5.3 for seamless and efficient connections.",
            ports: "Features a USB-C 3.2 Gen 1 port for data transfer and charging.",
        },
        os: "Ships with One UI 5.1 based on Android 13, providing a smooth and customizable user experience.",
        additional: [
            "Corning Gorilla Glass Victus+ for enhanced durability.",
            "IP68 dust and water resistance.",
            "Integrated S Pen with added air gesture functionalities."
        ],
        images: {
            'Black': s23ultrablack,
            '#C7C9D3': s23ultrasilver,
            '#E6E6FA': s23ultralavender
        },
        inStock: true,
    },
    6: {
        id: 6,
        name: "Samsung Galaxy S23 FE",
        price: "LKR 150,000 - LKR 200,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["#251607", "#E6E6FA", "#808000"],
        Design: {
            Dimensions: "Height: 159.8 mm; Width: 76.5 mm; Depth: 8.4 mm.",
            Weight: "200 grams.",
            Display: "6.4-inch Dynamic AMOLED 2X display with a resolution of 2340 x 1080 pixels at 403 ppi. Features include Vision Booster, Always-On Display, and a 120Hz adaptive refresh rate.",
        },
        Performance: {
            Processor: "Powered by Qualcomm Snapdragon 8 Gen 1 processor with 4nm architecture, offering high performance and efficiency.",
            Memory: "Equipped with up to 8GB of LPDDR5 RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.8 aperture) with Super Steady OIS.",
                "12MP Ultra-Wide (f/2.2 aperture).",
                "8MP Telephoto (f/2.4 aperture) with 3x optical zoom."
            ],
            Front: ["32MP Selfie camera (f/2.2 aperture) with AI enhancements for high-quality selfies."],
            Features: "Night mode, 4K video recording at 30fps, Super Steady mode, and AI-driven photography enhancements.",
        },
        Battery: {
            life: "4500mAh battery supporting up to 20 hours of continuous video playback.",
            charging: "Supports 25W super-fast wired charging, 15W wireless charging, and 4.5W reverse wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for fast and stable internet connectivity.",
            wifi: "Wi-Fi 6 for high-speed wireless performance.",
            bluetooth: "Bluetooth 5.2 for seamless connections.",
            ports: "Features a USB-C 3.1 port for efficient data transfer and charging.",
        },
        os: "Ships with One UI 5.1 based on Android 13, offering an intuitive user interface and enhanced multitasking features.",
        additional: [
            "Corning Gorilla Glass Victus+ for added durability.",
            "IP68 dust and water resistance.",
            "Enhanced gaming performance with Game Booster mode."
        ],
        images: {
            '#251607': s23FEgraphite,
            '#E6E6FA': s23FElavender,
            '#808000': s23FEolive
        },
        inStock: true,
    },
    7: {
        id: 7,
        name: "Samsung Galaxy A55 5G",
        price: "LKR 90,000 - LKR 120,000",
        storageOptions: ["128GB", "256GB"],
        colors: ["Black", "#8F00FF", "White"],
        Design: {
            Dimensions: "Height: 161.6 mm; Width: 74.6 mm; Depth: 8.4 mm.",
            Weight: "187 grams.",
            Display: "6.5-inch Super AMOLED display with a resolution of 2400 x 1080 pixels at 405 ppi. Features include Always-On Display and 90Hz refresh rate.",
        },
        Performance: {
            Processor: "Powered by Exynos 1280 processor with 5nm architecture, offering great efficiency for everyday use.",
            Memory: "Equipped with up to 6GB of RAM.",
        },
        Camera: {
            Rear: [
                "50MP Main (f/1.8 aperture) with Optical Image Stabilization.",
                "5MP Ultra-Wide (f/2.2 aperture).",
                "2MP Depth (f/2.4 aperture)."
            ],
            Front: ["13MP Selfie camera (f/2.2 aperture) for clear and vibrant selfies."],
            Features: "AI-enhanced photography, Super Steady mode, and 4K video recording.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 20 hours of continuous video playback.",
            charging: "Supports 25W fast charging and 15W wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for fast internet speeds.",
            wifi: "Wi-Fi 6 for enhanced wireless performance.",
            bluetooth: "Bluetooth 5.2 for stable connections.",
            ports: "Features a USB-C 2.0 port for fast charging and data transfer.",
        },
        os: "Ships with One UI 5.1 based on Android 13, providing a smooth and intuitive experience.",
        additional: [
            "Corning Gorilla Glass 5 for durability.",
            "IP67 water and dust resistance.",
            "Fingerprint scanner under the display for security."
        ],
        images: {
            'Black': A555Gblack,
            '#8F00FF': A555Gviolet,
            'White': A555Gwhite
        },
        inStock: false,
    },
    8: {
        id: 8,
        name: "Samsung Galaxy A35 5G",
        price: "LKR 80,000 - LKR 100,000",
        storageOptions: ["64GB", "128GB", "256GB"],
        colors: ["Black", "#8F00FF", "White"],
        Design: {
            Dimensions: "Height: 161.6 mm; Width: 77.0 mm; Depth: 8.1 mm.",
            Weight: "186 grams.",
            Display: "6.4-inch Super AMOLED display with a resolution of 2400 x 1080 pixels at 411 ppi. Features include 90Hz refresh rate and Always-On Display.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 1080 processor with 6nm architecture, providing balanced performance for everyday tasks.",
            Memory: "Equipped with up to 8GB of RAM.",
        },
        Camera: {
            Rear: [
                "48MP Main (f/1.8 aperture) with Night Mode.",
                "8MP Ultra-Wide (f/2.2 aperture).",
                "5MP Macro (f/2.4 aperture)."
            ],
            Front: ["13MP Selfie camera (f/2.2 aperture) with AI enhancements for better low-light selfies."],
            Features: "Night Mode, Super Steady video, and 4K video recording at 30fps.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 20 hours of video playback.",
            charging: "Supports 25W fast charging and 15W wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 6 for ultra-fast internet speeds.",
            wifi: "Wi-Fi 6 for faster internet and better connectivity.",
            bluetooth: "Bluetooth 5.2 for reliable and efficient wireless connections.",
            ports: "Features a USB-C 2.0 port for quick charging and data transfer.",
        },
        os: "Ships with One UI 5 based on Android 13, offering smooth multitasking and a user-friendly experience.",
        additional: [
            "Corning Gorilla Glass 5 for improved durability.",
            "IP67 water and dust resistance.",
            "Side-mounted fingerprint scanner for easy and secure unlocking."
        ],
        images: {
            'Black': A555Gblack,
            '#8F00FF': A555Gviolet,
            'White': A555Gwhite
        },
        inStock: true,
    },
    9: {
        id: 9,
        name: "Samsung Galaxy M55 5G",
        price: "LKR 130,000 - LKR 170,000",
        storageOptions: ["64GB", "128GB", "256GB"],
        colors: ["#739BD0", "#0C090A"],
        Design: {
            Dimensions: "Height: 164.5 mm; Width: 76.4 mm; Depth: 8.9 mm.",
            Weight: "190 grams.",
            Display: "6.6-inch FHD+ Super AMOLED display with a resolution of 2400 x 1080 pixels at 400 ppi. Features include 120Hz refresh rate and Gorilla Glass protection.",
        },
        Performance: {
            Processor: "Powered by MediaTek Dimensity 920 5G processor with a 6nm architecture, delivering excellent performance and power efficiency.",
            Memory: "Equipped with up to 8GB of LPDDR4X RAM.",
        },
        Camera: {
            Rear: [
                "64MP Main (f/1.8 aperture) with OIS (Optical Image Stabilization).",
                "8MP Ultra-Wide (f/2.2 aperture).",
                "2MP Depth Sensor (f/2.4 aperture)."
            ],
            Front: ["32MP Selfie camera (f/2.2 aperture) with AI enhancements for clear photos."],
            Features: "Super Steady Video, Night Mode, and 4K video recording.",
        },
        Battery: {
            life: "5000mAh battery supporting up to 22 hours of continuous video playback.",
            charging: "Supports 25W fast charging and 15W wireless charging.",
        },
        connectivity: {
            network: "Supports 5G, 4G LTE, and Wi-Fi 5 for reliable and fast connectivity.",
            wifi: "Wi-Fi 5 for solid wireless performance.",
            bluetooth: "Bluetooth 5.2 for seamless connections with devices.",
            ports: "USB Type-C 2.0 port for fast data transfer and charging.",
        },
        os: "Ships with One UI 5 based on Android 13, offering a smooth and customizable user interface.",
        additional: [
            "Corning Gorilla Glass 5 for enhanced durability.",
            "IP67 dust and water resistance.",
            "Side-mounted fingerprint scanner for added security."
        ],
        images: {
            '#739BD0': M555GIcyblue,
            '#0C090A': M555GBlazing
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
        window.location.href = '/checkout'    };

    return (
        <div className="product-page">
            <Navbar />
            <div className="breadcrumb1">
                <Link to="/home">Home</Link>
                {" > "}
                <Link to="/samsung">Samsung</Link>
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
