package com.example.CRUD_BE_MDB.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;


@Document(collection = "orders")
@Data
@AllArgsConstructor
public class Order {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String streetAddress;
    private String city;
    private String phone;
    private String email;
    private String country = "Sri Lanka";

    public Order() {}

    public Order(String firstName, String lastName, String streetAddress, String city, String phone, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.streetAddress = streetAddress;
        this.city = city;
        this.phone = phone;
        this.email = email;
    }

}

