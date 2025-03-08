package com.example.CRUD_BE_MDB.Service;

import com.example.CRUD_BE_MDB.Model.Order;

import java.util.List;

public interface OrderService {
    Order createOrder(Order order);
    List<Order> getAllOrders();
    Order getOrderById(String id);
    void deleteOrder(String id);
}





