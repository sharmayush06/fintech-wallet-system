package com.ayush.wallet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayush.wallet.dto.TransactionRequest;
import com.ayush.wallet.dto.TransferRequest;
import com.ayush.wallet.service.TransactionService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/transaction")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @PostMapping("/transfer")
    public ResponseEntity<?> transfer(@RequestBody TransferRequest transferRequest){
        return ResponseEntity.ok(transactionService.transfer(transferRequest));
    }

    @GetMapping("/history/{userId}")
    public ResponseEntity<?> history(@PathVariable Long userId){
        TransactionRequest transactionRequest = new TransactionRequest();
        transactionRequest.setUserId(userId);
        return ResponseEntity.ok(transactionService.history(transactionRequest));
    }
}
