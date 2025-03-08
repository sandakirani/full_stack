package com.example.CRUD_BE_MDB.Repository;

import com.example.CRUD_BE_MDB.Model.WishlistItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface WishlistRepository extends MongoRepository<WishlistItem, String> {
    List<WishlistItem> findByUsername(String username);
}
