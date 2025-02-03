package com.example.CRUD_BE_MDB.Service.impl;

import com.example.CRUD_BE_MDB.Model.CartItem;
import com.example.CRUD_BE_MDB.Repository.CartRepository;
import com.example.CRUD_BE_MDB.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;

    @Override
    public List<CartItem> getCartItems(String username) {
        return cartRepository.findByUsername(username);
    }

    @Override
    public CartItem addToCart(CartItem cartItem) {
        return cartRepository.save(cartItem);
    }

    @Override
    public void removeFromCart(String id) {
        cartRepository.deleteById(id);
    }
}

