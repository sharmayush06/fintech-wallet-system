package com.ayush.wallet.controller;

import com.ayush.wallet.dto.TransactionRequest;
import com.ayush.wallet.dto.TransferRequest;
import com.ayush.wallet.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @PostMapping("/transfer")
    public ResponseEntity<?> transfer(@RequestBody TransferRequest transferRequest){
        return ResponseEntity.ok(transactionService.transfer(transferRequest));
    }

    @GetMapping("/history")
    public ResponseEntity<?> history(@RequestBody TransactionRequest transactionRequest){
        return ResponseEntity.ok(transactionService.history(transactionRequest));
    }
}
