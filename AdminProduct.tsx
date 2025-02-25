import React, { useEffect, useState } from "react";
import "./AdminProduct.css";
import AddProduct from "./AddProduct.tsx";

import spromaxblack from "../assets/Apple/iPhone 16 Pro Max Black Titanium.jpg";
import spromaxdesert from "../assets/Apple/iPhone 16 Pro Max Desert Titanium.jpg";
import spluspink from "../assets/Apple/iPhone 16 Plus Pink.jpg";
import ssilver from '../assets/Samsung/Samsung Galaxy S24 Phantom Silver.jpg';
import zflip6cream from '../assets/Samsung/Samsung Galaxy Z Flip6 Cream.jpg';
import A555Gwhite from '../assets/Samsung/Samsung Galaxy A55 5G Awesome white.jpg';
import pro9XLobsidian from '../assets/Pixel/Google Pixel 9 Pro XL Obsidian.jpg';
import V20SEblue from '../assets/vivo/Vivo V20 SE Oxygen Blue.jpg';
import Note12propurple from '../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Stardust Purple.jpg';

type ProductType = {
  id: number;
  image: string;
  name: string;
  brand: string;
  color: string;
  inStock: boolean;
  stock: number;
  price: number;
};

const appleProducts: ProductType[] = [
  {
    id: 1,
    image: spromaxblack,
    name: "iPhone 16 Pro Max Black Titanium",
    brand: "apple",
    color: "black",
    inStock: true, 
    stock: 12,
    price: 264900,
  },
  {
    id: 2,
    image: spromaxdesert,
    name: "iPhone 16 Pro Max Desert Titanium",
    brand: "apple",
    color: "#FAD5A5",
    inStock: false, 
    stock: 0,
    price: 264900,
  },
  {
    id: 3,
    image: spluspink,
    name: "iPhone 16 Plus",
    brand: "apple",
    color: "pink",
    inStock: true, 
    stock: 10,
    price: 299900,
  },
];

const samsungProducts: ProductType[] = [
  {
    id: 4,
    image: ssilver,
    name: "Samsung Galaxy S24 Phantom Silver",
    brand: "samsung",
    color: "#a3a4aa",
    inStock: false, 
    stock: 0,
    price: 255000,
  },
  {
    id: 5,
    image: zflip6cream,
    name: "Samsung Galaxy Z Flip6 Cream",
    brand: "samsung",
    color: "#FFFDD0",
    inStock: true, 
    stock: 20,
    price: 289900,
  },
  {
    id: 6,
    image: A555Gwhite,
    name: "Samsung Galaxy A55 5G Awesome white",
    brand: "samsung",
    color: "White",
    inStock: true, 
    stock: 20,
    price: 289900,
  },
];

const pixelProducts: ProductType[] = [
  {
    id: 7,
    image: pro9XLobsidian,
    name: "Google Pixel 9 Pro XL Obsidian",
    brand: "pixel",
    color: "#71627a",
    inStock: true, 
    stock: 15,
    price: 300000,
  },
];

const vivoProducts: ProductType[] = [
  {
    id: 8,
    image: V20SEblue,
    name: "Vivo V20 SE Oxygen Blue",
    brand: "vivo",
    color: "#90B5D4",
    inStock: false, 
    stock: 0,
    price: 234800,
  },
];

const xiaomiProducts: ProductType[] = [
  {
    id: 9,
    image: Note12propurple,
    name: "Xiaomi Redmi Note 12 Pro Stardust Purple",
    brand: "xiaomi",
    color: "#6C3BAA",
    inStock: true, 
    stock: 18,
    price: 254800,
  },
];

// Merge arrays
const allProducts: ProductType[] = [...appleProducts, ...samsungProducts, ...pixelProducts, ...vivoProducts, ...xiaomiProducts];

const AdminProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([
    ...appleProducts,
    ...samsungProducts,
    ...pixelProducts,
    ...vivoProducts,
    ...xiaomiProducts,
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [category, setCategory] = useState("All Categories");
  const [availability, setAvailability] = useState("All Products");
  const [selectedAction, setSelectedAction] = useState("Actions");

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  //Prevent background scrolling when Add or Edit Product is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopupOpen]);
  

  const handleAddProduct = (newProduct: Omit<ProductType, "id" | "inStock">) => {
    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const newProductWithId: ProductType = {
      ...newProduct,
      id: newId,
      inStock: newProduct.stock > 0, // Set inStock based on stock count
    };
    setProducts((prev) => [...prev, newProductWithId]);
  };
  

  const handleUpdateProduct = (updatedProduct: ProductType) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  const handleSearch = () => {
    if (category === "All Categories" && availability === "All Products") {
      setFilteredProducts(products);
      return;
    }

    let filtered = products;

    if (category !== "All Categories") {
      filtered = filtered.filter((p) => p.brand.toLowerCase() === category.toLowerCase());
    }

    if (availability !== "All Products") {
      const isAvailable = availability === "available";
      filtered = filtered.filter((p) => p.inStock === isAvailable);
    }

    setFilteredProducts(filtered);
  };

  const handleStockChange = (id: number, updatedStock: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, stock: updatedStock } : product
      )
    );
  };

  const handleAction = (action: string) => {
    if (!selectedProducts || selectedProducts.length === 0) {
      alert("Please choose some products!");
    }
    setSelectedAction(action);

    if (action === "edit") {
      const productToEdit = products.find((p) => selectedProducts.includes(p.id));
      if (productToEdit) {
        setEditingProduct(productToEdit);
        setIsPopupOpen(true);
      }
    } else {
      const updatedProducts = products.map((p) => {
        if (selectedProducts.includes(p.id)) {
          switch (action) {
            case "available":
              return { ...p, inStock: true };
            case "not available":
              return { ...p, inStock: false, stock: 0 };
            default:
              return p;
          }
        }
        return p;
      });

      switch (action) {
        case "available":
        case "not available":
          setProducts(updatedProducts);
          break;
        case "delete":
          setProducts(products.filter((p) => !selectedProducts.includes(p.id)));
          setSelectedProducts([]);
          break;
        default:
          break;
      }
    }

    setSelectedAction("Actions");
  };

  const toggleSelect = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="admin-product">
      <h1 className="header">Admin Product Management</h1>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All Categories">All Categories</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="pixel">Pixel</option>
          <option value="xiaomi">Xiaomi</option>
          <option value="vivo">Vivo</option>
        </select>
        <select onChange={(e) => setAvailability(e.target.value)}>
          <option>All Products</option>
          <option value="available">Available</option>
          <option value="not available">Not available</option>
        </select>
        <button className="search-button" onClick={handleSearch}>
          Search for Product
        </button>
      </div>

      <div className="actions">
        <select value={selectedAction} onChange={(e) => handleAction(e.target.value)}>
          <option className="actions-inactive">Actions</option>
          <option value="available">Mark as Available</option>
          <option value="not available">Mark as Not Available</option>
          <option value="delete">Delete</option>
          <option value="edit">Edit</option>
        </select>
        <button
          className="add-button"
          onClick={() => {
            setEditingProduct(null); // Ensure fields are empty
            setIsPopupOpen(true);
          }}
        >
          Add Product
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Color</th>
            <th>Status</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => toggleSelect(product.id)}
                />
              </td>
              <td>
                <img src={product.image} alt={product.name} className="product-image" />
              </td>
              <td>
                <div className="product-name">
                  <strong>{product.name}</strong>
                </div>
              </td>
              <td>
                <div className="color-circle" style={{ backgroundColor: product.color }}></div>
              </td>
              <td>
                <span
                  className={`status-indicator ${product.inStock ? "green" : "red"}`}
                ></span>
                {product.inStock ? "Available" : "Not Available"}
              </td>
              <td>
                {product.inStock ? (
                  <input
                    type="number"
                    value={product.stock}
                    min="0"
                    onChange={(e) => {
                      const updatedStock = parseInt(e.target.value, 10) || 0;
                      handleStockChange(product.id, updatedStock);
                    }}
                    className="stock-input"
                  />
                ) : (
                  "-"
                )}
              </td>
              <td>{product.price > 0 ? `Rs. ${product.price.toLocaleString()}.00` : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for Adding or Editing Products */}
      {isPopupOpen && (
  <div className="modal-overlay">
    <AddProduct
      isOpen={isPopupOpen}
      onClose={() => {
        setIsPopupOpen(false);
        setEditingProduct(null);
      }}
      onSubmit={(product) => {
        if (editingProduct) {
          handleUpdateProduct({ ...editingProduct, ...product });
        } else {
          handleAddProduct(product);
        }
      }}
      editingProduct={editingProduct}
    />
  </div>
)}

    </div>
  );
};

export default AdminProduct;


