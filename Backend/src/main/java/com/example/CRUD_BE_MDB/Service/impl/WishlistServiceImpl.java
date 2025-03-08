package com.example.CRUD_BE_MDB.Service.impl;

import com.example.CRUD_BE_MDB.Model.WishlistItem;
import com.example.CRUD_BE_MDB.Repository.WishlistRepository;
import com.example.CRUD_BE_MDB.Service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistServiceImpl implements WishlistService {
    @Autowired
    private WishlistRepository wishlistRepository;

    @Override
    public List<WishlistItem> getWishlist(String username) {
        return wishlistRepository.findByUsername(username);
    }

    @Override
    public WishlistItem addToWishlist(WishlistItem wishlistItem) {
        return wishlistRepository.save(wishlistItem);
    }

    @Override
    public void removeFromWishlist(String id) {
        wishlistRepository.deleteById(id);
    }
}
