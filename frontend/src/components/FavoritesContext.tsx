// FavoritesContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context type
interface FavoritesContextType {
  favoritesCount: number;
  incrementFavorites: () => void;
  decrementFavorites: () => void;
}

// Create the context
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Provider component
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritesCount, setFavoritesCount] = useState(0);

  const incrementFavorites = () => setFavoritesCount((prev) => prev + 1);
  const decrementFavorites = () => setFavoritesCount((prev) => Math.max(0, prev - 1)); // Ensure count doesn't go below 0

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
