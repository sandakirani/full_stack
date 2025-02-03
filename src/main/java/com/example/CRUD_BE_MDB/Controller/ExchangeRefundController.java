package com.example.CRUD_BE_MDB.Controller;

import com.example.CRUD_BE_MDB.Model.ExchangeRequest;
import com.example.CRUD_BE_MDB.Model.RefundRequest;
import com.example.CRUD_BE_MDB.Repository.ExchangeRepository;
import com.example.CRUD_BE_MDB.Repository.RefundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/service")
public class ExchangeRefundController {
    @Autowired
    private ExchangeRepository exchangeRepository;

    @Autowired
    private RefundRepository refundRepository;

    @PostMapping("/exchange")
    public ExchangeRequest requestExchange(@RequestBody ExchangeRequest request) {
        return exchangeRepository.save(request);
    }

    @PostMapping("/refund")
    public RefundRequest requestRefund(@RequestBody RefundRequest request) {
        return refundRepository.save(request);
    }
}
