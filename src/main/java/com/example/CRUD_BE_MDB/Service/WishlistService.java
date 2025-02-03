package com.example.CRUD_BE_MDB.Service;

import com.example.CRUD_BE_MDB.Model.WishlistItem;

import java.util.List;

public interface WishlistService {
    List<WishlistItem> getWishlist(String username); // Method to fetch wishlist by userId
    WishlistItem addToWishlist(WishlistItem wishlistItem); // Method to add item to wishlist
    void removeFromWishlist(String id); // Method to remove item from wishlist
}
