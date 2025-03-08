package com.example.CRUD_BE_MDB.Controller;

import com.example.CRUD_BE_MDB.Model.CartItem;
import com.example.CRUD_BE_MDB.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/{username}")
    public List<CartItem> getCart(@PathVariable String username) {
        return cartService.getCartItems(username);
    }

    @PostMapping("/add")
    public CartItem addToCart(@RequestBody CartItem cartItem) {
        return cartService.addToCart(cartItem);
    }

    @DeleteMapping("/remove/{id}")
    public void removeFromCart(@PathVariable String id) {
        cartService.removeFromCart(id);
    }
}
