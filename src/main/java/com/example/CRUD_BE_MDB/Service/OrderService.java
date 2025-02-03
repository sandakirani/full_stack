package com.example.CRUD_BE_MDB.Service;

import com.example.CRUD_BE_MDB.Model.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    Order placeOrder(Order order); // Method to place an order and check stock
    Optional<Order> getOrderById(String id); // Method to fetch order by ID
    List<Order> getAllOrders(); // Method to fetch all orders
    void deleteOrder(String id); // Method to delete an order
}
