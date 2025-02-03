package com.example.CRUD_BE_MDB.Service;

import com.example.CRUD_BE_MDB.Model.CartItem;
import java.util.List;

public interface CartService {
    List<CartItem> getCartItems(String username);
    CartItem addToCart(CartItem cartItem);
    void removeFromCart(String id);
}
