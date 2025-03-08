package com.example.CRUD_BE_MDB.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "wishlistItems")
@Data
@AllArgsConstructor

public class WishlistItem {
    @Id
    private String id;
    private String username;
    private String productId;

}

