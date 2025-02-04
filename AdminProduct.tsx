import React, { useState } from "react";
import "./AdminProduct.css";

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
  color: string;
  status: "available" | "not available";
  stock: number;
  price: number;
};

const appleProducts: ProductType[] = [
  {
    id: 1,
    image: spromaxblack,
    name: "iPhone 16 Pro Max Black Titanium",
    color: "black",
    status: "available", 
    stock: 12,
    price: 264900,
  },
  {
    id: 2,
    image: spromaxdesert,
    name: "iPhone 16 Pro Max Desert Titanium",
    color: "#FAD5A5",
    status: "not available", 
    stock: 0,
    price: 264900,
  },
  {
    id: 3,
    image: spluspink,
    name: "iPhone 16 Plus",
    color: "pink",
    status: "available", 
    stock: 10,
    price: 299900,
  },
];

const samsungProducts: ProductType[] = [
  {
    id: 4,
    image: ssilver,
    name: "Samsung Galaxy S24 Phantom Silver",
    color: "#a3a4aa",
    status: "not available", 
    stock: 0,
    price: 255000,
  },
  {
    id: 5,
    image: zflip6cream,
    name: "Samsung Galaxy Z Flip6 Cream",
    color: "#FFFDD0",
    status: "available", 
    stock: 20,
    price: 289900,
  },
  {
    id: 6,
    image: A555Gwhite,
    name: "Samsung Galaxy A55 5G Awesome white",
    color: "White",
    status: "available", 
    stock: 20,
    price: 289900,
  },
];

const pixelProducts: ProductType[] = [
  {
    id: 7,
    image: pro9XLobsidian,
    name: "Google Pixel 9 Pro XL Obsidian",
    color: "#71627a",
    status: "available", 
    stock: 15,
    price: 300000,
  },
];

const vivoProducts: ProductType[] = [
  {
    id: 8,
    image: V20SEblue,
    name: "Vivo V20 SE Oxygen Blue",
    color: "#90B5D4",
    status: "not available", 
    stock: 0,
    price: 234800,
  },
];

const xiaomiProducts: ProductType[] = [
  {
    id: 9,
    image: Note12propurple,
    name: "Xiaomi Redmi Note 12 Pro Stardust Purple",
    color: "#6C3BAA",
    status: "available", 
    stock: 18,
    price: 254800,
  },
];

// Merge arrays
const allProducts: ProductType[] = [...appleProducts, ...samsungProducts, ...pixelProducts, ...vivoProducts, ...xiaomiProducts];

const AdminProduct: React.FC = () => {
  
  const [products, setProducts] = useState<ProductType[]>([...appleProducts, ...samsungProducts, ...pixelProducts, ...vivoProducts, ...xiaomiProducts]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [category, setCategory] = useState("All Categories");
  const [availability, setAvailability] = useState("All Products");

  const handleSearch = () => {
    let filtered = products;
    if (category !== "All Categories") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(category.toLowerCase())
      );
    }
    if (availability !== "All Products") {
      filtered = filtered.filter((p) => p.status === availability);
    }
    setFilteredProducts(filtered);
  };

  const handleAction = (action: string) => {
    switch (action) {
      case "available":
        setProducts((prev) =>
          prev.map((p) =>
            selectedProducts.includes(p.id) ? { ...p, status: "available" } : p
          )
        );
        break;
      case "not available":
        setProducts((prev) =>
          prev.map((p) =>
            selectedProducts.includes(p.id) ? { ...p, status: "not available" } : p
          )
        );
        break;
      case "delete":
        setProducts((prev) => prev.filter((p) => !selectedProducts.includes(p.id)));
        setSelectedProducts([]);
        break;
      case "edit":
        const productToEdit = products.find((p) => selectedProducts.includes(p.id));
        if (productToEdit) setEditingProduct(productToEdit);
        break;
      default:
        break;
    }
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
          <option value="">All Categories</option>
          <option value="iphone">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="pixel">Pixel</option>
          <option value="xiaomi">Xiaomi</option>
          <option value="vivo">Vivo</option>
        </select>
        <select onChange={(e) => setAvailability(e.target.value)}>
          <option>All Products</option>
          <option>available</option>
          <option>not available</option>
        </select>
        <button className="search-button" onClick={handleSearch}>Search for Product</button>
      </div>

      <div className="actions">
        <select onChange={(e) => handleAction(e.target.value)}>
          <option>Actions</option>
          <option value="available">Mark as Available</option>
          <option value="not available">Mark as Not Available</option>
          <option value="delete">Delete</option>
          <option value="edit">Edit</option>
        </select>
        <button onClick={() => setIsAdding(true)}>Add Product</button>
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
                <div className="product-name"><strong>{product.name}</strong></div>
              </td>
              <td>
                <div
                  className="color-circle"
                  style={{ backgroundColor: product.color }}
                ></div>
              </td>
              <td>
                <span
                  className={`status-indicator ${
                    product.status === "available" ? "green" : "red"
                  }`}
                ></span>
                {product.status}
              </td>
              <td>{product.stock > 0 ? product.stock : "-"}</td>
              <td>
                {product.price > 0
                  ? `Rs. ${product.price.toLocaleString()}.00`
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Uncomment when AddProductPopup and EditProductPopup components are available */}
      {/* {isAdding && <AddProductPopup onClose={() => setIsAdding(false)} onAdd={setProducts} />}
      {editingProduct && <EditProductPopup product={editingProduct} onClose={() => setEditingProduct(null)} onUpdate={setProducts} />} */}
    </div>
  );
};

export default AdminProduct;

