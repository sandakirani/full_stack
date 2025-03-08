package com.example.CRUD_BE_MDB.Repository;

import com.example.CRUD_BE_MDB.Model.CartItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CartRepository extends MongoRepository<CartItem, String> {
    List<CartItem> findByUsername(String username);
}
