package com.example.CRUD_BE_MDB.Service;

import com.example.CRUD_BE_MDB.Model.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    Order placeOrder(Order order);
    Optional<Order> getOrderById(String id);
    List<Order> getAllOrders();
    void deleteOrder(String id);
}
