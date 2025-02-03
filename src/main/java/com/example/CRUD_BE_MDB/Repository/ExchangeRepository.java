package com.example.CRUD_BE_MDB.Repository;

import com.example.CRUD_BE_MDB.Model.ExchangeRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ExchangeRepository extends MongoRepository<ExchangeRequest, String> {
    List<ExchangeRequest> findByUsername(String username);
}
