import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api"; // Adjust based on your backend

// Function to get JWT Token from localStorage
const getToken = () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);  // Debugging line
    return token;
};

// Function to make GET requests
export const getRequest = async (endpoint: string) => {
    const token = getToken();
    if (!token) {
        console.error("No token found! User may not be authenticated.");
        return null;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` //  Ensures valid token is used
        },
    });

    return response.json();
};


export const postRequest = async (endpoint: string, body: any) => {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    const token = getToken();
    if (token && endpoint !== "/auth/login") {  //  Don't add Authorization for login
        headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    });

    return response.json();
};



// Function to make PUT requests
export const putRequest = async (endpoint: string, body: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`, // Token added for secured endpoints
        },
        body: JSON.stringify(body),
    });
    return response.json();
};

// Function to make DELETE requests
export const deleteRequest = async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`, // Token added for secured endpoints
        },
    });
    return response.json();
};

// Function to login user
export const loginUser = async (username: string, password: string) => {
    try {
        const data = await postRequest("/auth/login", { username, password });
        console.log("Login Response:", data); // Debugging
        
        if (data.accessToken) {  
            localStorage.setItem("token", data.accessToken);  //  Store the correct token
            return data;  
        } else {
            console.error("Access token not found in response:", data);
            alert("Login failed. Please try again.");
            return null;
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login. Please try again.");
        return null;
    }
};

// Function to register user (No token needed in headers)
export const registerUser = async (username: string, email: string, password: string) => {
    return postRequest("/auth/signup", { username, email, password }); // No token required for signup
};

// Fetch all products
export const getProducts = async () => {
    return getRequest("/products");
};

// Fetch a single product by ID
export const getProductById = async (productId: string) => {
    return getRequest(`/products/${productId}`);
};

// Create a new product (Admin use case)
export const createProduct = async (productData: any) => {
    return postRequest("/products", productData);
};

// Update a product (Admin use case)
export const updateProduct = async (productId: string, updatedData: any) => {
    return putRequest(`/products/${productId}`, updatedData);
};

// Delete a product (Admin use case)
export const deleteProduct = async (productId: string) => {
    return deleteRequest(`/products/${productId}`);
};

// Fetch products by brand
export const getProductsByBrand = async (brand: string) => {
    return getRequest(`/products/brand/${brand}`);
};

// Fetch only products that are in stock
export const getProductsInStock = async () => {
    return getRequest("/products/in-stock");
};


// Create Order
export const createOrder = async (order: { [key: string]: any }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/orders`, order);
      return response.data; // Return created order data
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };
  
  // Get All Orders
  export const getAllOrders = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/orders`);
      return response.data; // Return list of orders
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  };
  
  // Get Order by ID
  export const getOrderById = async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
      return response.data; // Return order data
    } catch (error) {
      console.error('Error fetching order by id:', error);
      throw error;
    }
  };
  
  // Delete Order
  export const deleteOrder = async (id: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/orders/${id}`);
    } catch (error) {
      console.error('Error deleting order:', error);
      throw error;
    }
  };

// Function to fetch wishlist items for a user
export const getWishlist = async (username: string) => {
    return getRequest(`/wishlist/${username}`);
};

// Function to add an item to the wishlist
export const addToWishlist = async (wishlistItem: any) => {
    return postRequest("/wishlist/add", wishlistItem);
};

// Function to remove an item from the wishlist
export const removeFromWishlist = async (id: string) => {
    return deleteRequest(`/wishlist/remove/${id}`);
};

// Function to fetch cart items for a user
export const getCart = async (username: string) => {
    return getRequest(`/cart/${username}`);
};

// Function to add an item to the cart
export const addToCart = async (cartItem: any) => {
    return postRequest("/cart/add", cartItem);
};

// Function to remove an item from the cart
export const removeFromCart = async (id: string) => {
    return deleteRequest(`/cart/remove/${id}`);
};
