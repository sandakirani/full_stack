package com.example.CRUD_BE_MDB.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Document(collection = "orders")
@Data
@AllArgsConstructor
public class Order {
    @Id
    private String id;
    private String username;
    private List<String> productIds;
    private double totalAmount;
    private String status; // Pending, Shipped, Delivered, Canceled
    private Date orderDate;
    private String address;

}
