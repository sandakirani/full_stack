package com.example.CRUD_BE_MDB.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.CRUD_BE_MDB.Model.ERole;
import com.example.CRUD_BE_MDB.Model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
  }
