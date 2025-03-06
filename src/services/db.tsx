const API_BASE_URL = "http://localhost:8080/api"; // Adjust based on your backend

// Function to get JWT Token from localStorage
const getToken = () => localStorage.getItem("token");

// Function to make GET requests
export const getRequest = async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.json();
};

// Function to make POST requests
export const postRequest = async (endpoint: string, body: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
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
            Authorization: `Bearer ${getToken()}`,
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
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return response.json();
};

// Function to login user
export const loginUser = async (email: string, password: string) => {
    const data = await postRequest("/auth/login", { email, password });
    if (data.token) {
        localStorage.setItem("token", data.token);
    }
    return data;
};

// Function to register user
export const registerUser = async (name: string, email: string, password: string) => {
    return postRequest("/auth/signup", { name, email, password });
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

// Function to fetch all orders
export const getOrders = async () => {
    return getRequest("/orders/all"); // Updated to match backend
};

// Function to fetch a single order by ID
export const getOrderById = async (orderId: string) => {
    return getRequest(`/orders/${orderId}`);
};

// Function to place a new order
export const createOrder = async (orderData: any) => {
    return postRequest("/orders/place", orderData); // Updated to match backend
};

// Function to delete an order (Admin use case)
export const deleteOrder = async (orderId: string) => {
    return deleteRequest(`/orders/${orderId}`);
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

// Function to request an exchange
export const requestExchange = async (exchangeData: any) => {
    return postRequest("/service/exchange", exchangeData);
};

// Function to request a refund
export const requestRefund = async (refundData: any) => {
    return postRequest("/service/refund", refundData);
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