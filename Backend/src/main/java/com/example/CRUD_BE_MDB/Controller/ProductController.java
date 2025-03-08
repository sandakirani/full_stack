package com.example.CRUD_BE_MDB.Controller;

import com.example.CRUD_BE_MDB.Model.product;
import com.example.CRUD_BE_MDB.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")  // Admin-only access for getting all products
    public List<product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")  // Admin-only access for getting a product by ID
    public product getProductById(@PathVariable String id) {
        return productService.getProductById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")  // Admin-only access for adding a product
    public product addProduct(@RequestBody product product) {
        return productService.addProduct(product);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")  // Admin-only access for updating a product
    public product updateProduct(@PathVariable String id, @RequestBody product product) {
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")  // Admin-only access for deleting a product
    public String deleteProduct(@PathVariable String id) {
        productService.deleteProduct(id);
        return "Product deleted successfully with ID: " + id;
    }

    @GetMapping("/brand/{brand}")
    @PreAuthorize("hasRole('ADMIN')")  // Admin-only access for getting products by brand
    public List<product> getProductsByBrand(@PathVariable String brand) {
        return productService.findProductsByBrand(brand);
    }

    @GetMapping("/in-stock")
    @PreAuthorize("hasRole('ADMIN')")  // Admin-only access for getting products in stock
    public List<product> getProductsInStock() {
        return productService.findProductsInStock(true);
    }

    // Allow both customers and admins to search for products
    @GetMapping("/search")
    public ResponseEntity<List<product>> searchProducts(@RequestParam String keyword) {
        System.out.println("Searching with keyword: " + keyword);
        List<product> products = productService.searchProducts(keyword);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
