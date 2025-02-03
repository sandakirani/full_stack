package com.example.CRUD_BE_MDB.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "refundRequests")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class RefundRequest {
    @Id
    private String id;
    private String username;
    private String orderId;
    private String reason;
    private String status; // Pending, Approved, Rejected

}
