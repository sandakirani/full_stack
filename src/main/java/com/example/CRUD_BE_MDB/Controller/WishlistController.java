package com.example.CRUD_BE_MDB.Controller;

import com.example.CRUD_BE_MDB.Model.WishlistItem;
import com.example.CRUD_BE_MDB.Service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {
    @Autowired
    private WishlistService wishlistService;

    @GetMapping("/{userId}")
    public List<WishlistItem> getWishlist(@PathVariable String username) {
        return wishlistService.getWishlist(username);
    }

    @PostMapping("/add")
    public WishlistItem addToWishlist(@RequestBody WishlistItem wishlistItem) {
        return wishlistService.addToWishlist(wishlistItem);
    }

    @DeleteMapping("/remove/{id}")
    public void removeFromWishlist(@PathVariable String id) {
        wishlistService.removeFromWishlist(id);
    }
}

