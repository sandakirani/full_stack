import React, { createContext, useState, useContext } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);  //  Store full objects

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => (prev.some((product) => product.id === item.id) ? prev : [...prev, item]));
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
