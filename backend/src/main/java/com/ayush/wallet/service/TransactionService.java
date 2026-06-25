package com.ayush.wallet.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.wallet.dto.TransactionRequest;
import com.ayush.wallet.dto.TransferRequest;
import com.ayush.wallet.model.Transaction;
import com.ayush.wallet.model.Wallet;
import com.ayush.wallet.repository.TransactionRepository;
import com.ayush.wallet.repository.WalletRepository;

@Service
public class TransactionService {

    @Autowired
    private WalletRepository walletRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    public String transfer(TransferRequest request) {

        Wallet sender = walletRepository.findByUserId(request.getSourceUserId())
                .orElseThrow(() -> new RuntimeException("Sender wallet not found"));

        Wallet receiver = walletRepository.findByUserId(request.getDestinationUserId())
                .orElseThrow(() -> new RuntimeException("Receiver wallet not found"));

        if(sender.getBalance() < request.getAmount()){
            throw new RuntimeException("Insufficient Balance");
        }

        sender.setBalance(sender.getBalance() - request.getAmount());
        receiver.setBalance(receiver.getBalance() + request.getAmount());

        walletRepository.save(sender);
        walletRepository.save(receiver);

        Transaction transaction = new Transaction();
        transaction.setSourceWallet(sender);
        transaction.setDestinationWallet(receiver);
        transaction.setAmount(BigDecimal.valueOf(request.getAmount()));
        transaction.setStatus("SUCCESS");
        transaction.setCreatedAt(LocalDateTime.now());

        transactionRepository.save(transaction);

        return "Transfer Successful";
    }

    public List<Transaction> history(TransactionRequest request) {
        Wallet wallet = walletRepository.findByUserId(request.getUserId())
                .orElseThrow(() -> new RuntimeException("Wallet not found"));

        return transactionRepository
                .findBySourceWalletIdOrDestinationWalletId(wallet.getId(), wallet.getId());
    }
}