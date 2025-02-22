import React, { useState, useEffect } from "react";
import "./AddProduct.css"

interface AddProductProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: {
    name: string;
    brand: string;
    price: number;
    storage: string;
    color: string;
    stock: number;
    design: string;
    performance: string;
    features: string;
    camera: string;
    connectivity: string;
    battery: string;
    os: string;
    image: string;
  }) => void;
  editingProduct?: any;
}

const AddProduct: React.FC<AddProductProps> = ({ isOpen, onClose, onSubmit, editingProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: 0,
    storage: "",
    color: "",
    stock: 0,
    design: "",
    performance: "",
    features: "",
    camera: "",
    connectivity: "",
    battery: "",
    os: "",
    image: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData({
        name: "",
        brand: "",
        price: 0,
        storage: "",
        color: "",
        stock: 0,
        design: "",
        performance: "",
        features: "",
        camera: "",
        connectivity: "",
        battery: "",
        os: "",
        image: "",
      });
    }
  }, [editingProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="add-product-container">
      <div className="modal-content">
        <div className="back-button" onClick={onClose}>←</div>
  
        {/* Image Upload Section */}
        <div className="image-upload-container">
          <div className="image-upload-box">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <p>Drag an image here or <span style={{ color: "blue" }}>upload a file</span></p>
          </div>
        </div>
  
        {formData.image && <img src={formData.image} alt="Preview" className="preview" />}
  
        {/* Form Fields */}
        <div className="form-grid">
          <div className="form-group">
            <label>Phone Name</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Design and Display</label>
            <input name="design" value={formData.design} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Brand</label>
            <input name="brand" value={formData.brand} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Performance</label>
            <input name="performance" value={formData.performance} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Price</label>
            <input name="price" value={formData.price} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Additional Features</label>
            <input name="features" value={formData.features} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Storage</label>
            <input name="storage" value={formData.storage} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Camera System</label>
            <input name="camera" value={formData.camera} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Color</label>
            <input name="color" value={formData.color} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Connectivity</label>
            <input name="connectivity" value={formData.connectivity} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Stock</label>
            <input name="stock" type="number" value={formData.stock} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Battery and Charging</label>
            <input name="battery" value={formData.battery} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Operating System</label>
            <input name="os" value={formData.os} onChange={handleChange} />
          </div>
        </div>
  
        {/* Add Button */}
        <div className="add-button1-container">
          <button className="add-button1" onClick={handleSubmit}>ADD</button>
        </div>
      </div>
    </div>
  );
  
};

export default AddProduct;

