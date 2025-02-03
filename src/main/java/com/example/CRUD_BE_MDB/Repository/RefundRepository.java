package com.example.CRUD_BE_MDB.Repository;

import com.example.CRUD_BE_MDB.Model.RefundRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface RefundRepository extends MongoRepository<RefundRequest, String> {
    List<RefundRequest> findByUsername(String username);
}

