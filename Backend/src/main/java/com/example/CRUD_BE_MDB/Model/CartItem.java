package com.example.CRUD_BE_MDB.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "cartItems")
@Data
@AllArgsConstructor

public class CartItem {
    @Id
    private String id;
    private String username;
    private String productId;
    private int quantity;

}
