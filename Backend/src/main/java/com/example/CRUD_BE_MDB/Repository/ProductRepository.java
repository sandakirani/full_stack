package com.example.CRUD_BE_MDB.Repository;

import com.example.CRUD_BE_MDB.Model.product;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProductRepository extends MongoRepository<product, String> {

    @Query("SELECT p from Product p WHERE " +
            "LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(p.brand) LIKE LOWER(CONCAT'%', :keyword, '%')) OR " +
            "LOWER(p.price) LIKE LOWER(CONCAT'%', :keyword, '%')) OR " +
            "LOWER(p.inStock) LIKE LOWER(CONCAT'%', :keyword, '%')) OR " +
            "LOWER(p.color) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<product> searchProducts(String keyword);

    List<product> findByNameContainingIgnoreCaseOrBrandContainingIgnoreCase(String name, String brand);
}
