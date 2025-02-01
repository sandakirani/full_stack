package com.example.CRUD_BE_MDB.Service;

import com.example.CRUD_BE_MDB.Model.product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<product> getAllProducts();
    Optional<product> getProductById(String id);
    product addProduct(product product);
    product updateProduct(String id, product product);
    void deleteProduct(String id);

    
    List<product> findProductsByBrand(String brand);
    List<product> findProductsInStock(boolean inStock);
}
