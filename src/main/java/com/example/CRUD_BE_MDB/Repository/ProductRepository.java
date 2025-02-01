package com.example.CRUD_BE_MDB.Repository;

import com.example.CRUD_BE_MDB.Model.product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<product, String> {
}
