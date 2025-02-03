package com.example.CRUD_BE_MDB.Service.impl;

import com.example.CRUD_BE_MDB.Model.ExchangeRequest;
import com.example.CRUD_BE_MDB.Model.RefundRequest;
import com.example.CRUD_BE_MDB.Repository.ExchangeRepository;
import com.example.CRUD_BE_MDB.Repository.RefundRepository;
import com.example.CRUD_BE_MDB.Service.ExchangeRefundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExchangeRefundServiceImpl implements ExchangeRefundService {
    @Autowired
    private ExchangeRepository exchangeRepository;

    @Autowired
    private RefundRepository refundRepository;

    @Override
    public ExchangeRequest requestExchange(ExchangeRequest request) {
        request.setStatus("Pending"); // Default status
        return exchangeRepository.save(request);
    }

    @Override
    public RefundRequest requestRefund(RefundRequest request) {
        request.setStatus("Pending"); // Default status
        return refundRepository.save(request);
    }

    @Override
    public List<ExchangeRequest> getExchangeRequestsByUser(String username) {
        return exchangeRepository.findByUsername(username);
    }

    @Override
    public List<RefundRequest> getRefundRequestsByUser(String username) {
        return refundRepository.findByUsername(username);
    }

    @Override
    public ExchangeRequest updateExchangeStatus(String requestId, String status) {
        ExchangeRequest exchangeRequest = exchangeRepository.findById(requestId).orElse(null);
        if (exchangeRequest != null) {
            exchangeRequest.setStatus(status);
            return exchangeRepository.save(exchangeRequest);
        }
        return null;
    }

    @Override
    public RefundRequest updateRefundStatus(String requestId, String status) {
        RefundRequest refundRequest = refundRepository.findById(requestId).orElse(null);
        if (refundRequest != null) {
            refundRequest.setStatus(status);
            return refundRepository.save(refundRequest);
        }
        return null;
    }
}
