import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context type with parameters for increment/decrement functions
interface FavoritesContextType {
  favoritesCount: number;
  incrementFavorites: (count?: number) => void; // Accepts optional count
  decrementFavorites: (count?: number) => void; // Accepts optional count
}

// Create the context
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Provider component
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritesCount, setFavoritesCount] = useState(0);

  const incrementFavorites = (count: number = 1) => 
    setFavoritesCount((prev) => prev + count);
  
  const decrementFavorites = (count: number = 1) => 
    setFavoritesCount((prev) => Math.max(0, prev - count)); // Ensure count doesn't go below 0

  return (
    <FavoritesContext.Provider value={{ favoritesCount, incrementFavorites, decrementFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the FavoritesContext
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

