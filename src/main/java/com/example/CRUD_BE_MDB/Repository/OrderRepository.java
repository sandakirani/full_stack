package com.example.CRUD_BE_MDB.Repository;

import com.example.CRUD_BE_MDB.Model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}
