package com.example.CRUD_BE_MDB.Service;

import com.example.CRUD_BE_MDB.Model.ExchangeRequest;
import com.example.CRUD_BE_MDB.Model.RefundRequest;

import java.util.List;

public interface ExchangeRefundService {
    ExchangeRequest requestExchange(ExchangeRequest request);
    RefundRequest requestRefund(RefundRequest request);
    List<ExchangeRequest> getExchangeRequestsByUser(String username);
    List<RefundRequest> getRefundRequestsByUser(String username);
    ExchangeRequest updateExchangeStatus(String requestId, String status);
    RefundRequest updateRefundStatus(String requestId, String status);
}

