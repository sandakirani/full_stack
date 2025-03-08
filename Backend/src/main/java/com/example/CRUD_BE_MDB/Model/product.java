package com.example.CRUD_BE_MDB.Model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class product {
    @Id
    private String id;
    private String name;
    private String brand;
    private String color;
    private String imageUrl;
    private String price;
    private boolean inStock;
    
}
