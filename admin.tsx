import React, { useState } from "react";
import "./AdminProduct.css";

import spromaxblack from "../../assets/Apple/iPhone 16 Pro Max Black Titanium.jpg";
import spromaxdesert from "../../assets/Apple/iPhone 16 Pro Max Desert Titanium.jpg";
import spluspink from "../../assets/Apple/iPhone 16 Plus Pink.jpg";
import ssilver from '../../assets/Samsung/Samsung Galaxy S24 Phantom Silver.jpg';
import zflip6cream from '../../assets/Samsung/Samsung Galaxy Z Flip6 Cream.jpg';
import A555Gwhite from '../../assets/Samsung/Samsung Galaxy A55 5G Awesome white.jpg';
import pro9XLobsidian from '../../assets/Pixel/Google Pixel 9 Pro XL Obsidian.jpg';
import V20SEblue from '../../assets/vivo/Vivo V20 SE Oxygen Blue.jpg';
import Note12propurple from '../../assets/Xiaomi/Xiaomi Redmi Note 12 Pro Stardust Purple.jpg';

type ProductType = {
  id: number;
  image: string;
  name: string;
  color: string;
  status: "available" | "not available";
  stock: number;
  price: number;
};

const allProducts: ProductType[] = [
  { id: 1, image: spromaxblack, name: "iPhone 16 Pro Max Black Titanium", color: "black", status: "available", stock: 12, price: 264900 },
  { id: 2, image: spromaxdesert, name: "iPhone 16 Pro Max Desert Titanium", color: "#FAD5A5", status: "not available", stock: 0, price: 264900 },
  { id: 3, image: spluspink, name: "iPhone 16 Plus", color: "pink", status: "available", stock: 10, price: 299900 },
  { id: 4, image: ssilver, name: "Samsung Galaxy S24 Phantom Silver", color: "#a3a4aa", status: "not available", stock: 0, price: 255000 },
  { id: 5, image: zflip6cream, name: "Samsung Galaxy Z Flip6 Cream", color: "#FFFDD0", status: "available", stock: 20, price: 289900 },
  { id: 6, image: A555Gwhite, name: "Samsung Galaxy A55 5G Awesome white", color: "White", status: "available", stock: 20, price: 289900 },
  { id: 7, image: pro9XLobsidian, name: "Google Pixel 9 Pro XL Obsidian", color: "#71627a", status: "available", stock: 15, price: 300000 },
  { id: 8, image: V20SEblue, name: "Vivo V20 SE Oxygen Blue", color: "#90B5D4", status: "not available", stock: 0, price: 234800 },
  { id: 9, image: Note12propurple, name: "Xiaomi Redmi Note 12 Pro Stardust Purple", color: "#6C3BAA", status: "available", stock: 18, price: 254800 },
];

const AdminProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>(allProducts);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedProduct, setEditedProduct] = useState<ProductType | null>(null);

  // State for Add Product form
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: 0,
    image: "",
    name: "",
    color: "",
    status: "available",
    stock: 0,
    price: 0,
  });

  const handleDelete = () => {
    if (selectedProductId !== null) {
      setProducts(products.filter((p) => p.id !== selectedProductId));
      setSelectedProductId(null);
    }
  };

  const handleEdit = () => {
    if (selectedProductId !== null) {
      setEditMode(true);
      const productToEdit = products.find((p) => p.id === selectedProductId);
      if (productToEdit) {
        setEditedProduct({ ...productToEdit });
      }
    }
  };

  const handleChange = (field: keyof ProductType, value: string | number) => {
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, [field]: value });
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, status: e.target.value as "available" | "not available" });
    }
  };

  const handleSave = () => {
    if (editedProduct) {
      setProducts(products.map((p) => (p.id === editedProduct.id ? editedProduct : p)));
      setEditMode(false);
      setEditedProduct(null);
    }
  };

  // Handle Add Product Form
  const handleAddProductChange = (field: keyof ProductType, value: string | number) => {
    setNewProduct({ ...newProduct, [field]: value });
  };

  const handleAddProduct = () => {
    const newId = products.length + 1;
    setProducts([...products, { ...newProduct, id: newId }]);
    setShowAddForm(false);
    setNewProduct({
      id: 0,
      image: "",
      name: "",
      color: "",
      status: "available",
      stock: 0,
      price: 0,
    });
  };

  return (
    <div className="admin-product">
      <h1 className="header">Admin Product Management</h1>

      <div className="actions">
        <button onClick={handleEdit} disabled={selectedProductId === null || editMode} className="edit-button">
          Edit Selected
        </button>
        <button onClick={handleDelete} disabled={selectedProductId === null || editMode} className="delete-button">
          Delete Selected
        </button>
        <button onClick={() => setShowAddForm(true)} className="add-product-button">
          Add Product
        </button>
      </div>

      {showAddForm && (
        <div className="add-product-form">
          <h2>Add New Product</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => handleAddProductChange("name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              type="text"
              value={newProduct.color}
              onChange={(e) => handleAddProductChange("color", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              value={newProduct.status}
              onChange={(e) => handleAddProductChange("status", e.target.value)}
            >
              <option value="available">Available</option>
              <option value="not available">Not Available</option>
            </select>
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input
              type="number"
              value={newProduct.stock}
              onChange={(e) => handleAddProductChange("stock", Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={newProduct.price}
              onChange={(e) => handleAddProductChange("price", Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={newProduct.image}
              onChange={(e) => handleAddProductChange("image", e.target.value)}
            />
          </div>
          <button onClick={handleAddProduct} className="add-product-btn">
            Add Product
          </button>
          <button onClick={() => setShowAddForm(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      )}

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
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <tr className={selectedProductId === product.id ? "selected" : ""}>
                <td>
                  <input
                    type="radio"
                    checked={selectedProductId === product.id}
                    onChange={() => setSelectedProductId(product.id)}
                    disabled={editMode}
                  />
                </td>
                <td>
                  <img src={product.image} alt={product.name} className="product-image" />
                </td>
                <td>
                  {editMode && selectedProductId === product.id ? (
                    <input
                      type="text"
                      value={editedProduct?.name || ""}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="edit-input"
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td>
                  <div className="color-circle" style={{ backgroundColor: product.color }}></div>
                </td>
                <td>
                  {editMode && selectedProductId === product.id ? (
                    <select
                      value={editedProduct?.status || product.status}
                      onChange={handleStatusChange}
                      className="edit-input"
                    >
                      <option value="available">Available</option>
                      <option value="not available">Not Available</option>
                    </select>
                  ) : (
                    product.status
                  )}
                </td>
                <td>
                  {editMode && selectedProductId === product.id ? (
                    <input
                      type="number"
                      value={editedProduct?.stock || ""}
                      onChange={(e) => handleChange("stock", Number(e.target.value))}
                      className="edit-input"
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td>
                  {editMode && selectedProductId === product.id ? (
                    <input
                      type="number"
                      value={editedProduct?.price || ""}
                      onChange={(e) => handleChange("price", Number(e.target.value))}
                      className="edit-input"
                    />
                  ) : (
                    product.price
                  )}
                </td>
              </tr>
              {editMode && selectedProductId === product.id && (
                <tr>
                  <td colSpan={7} className="ok-button-row">
                    <button onClick={handleSave} className="ok-button">
                      OK
                    </button>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProduct;
