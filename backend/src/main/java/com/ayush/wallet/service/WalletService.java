package com.ayush.wallet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.wallet.model.Wallet;
import com.ayush.wallet.repository.WalletRepository;

@Service
public class WalletService {
    @Autowired
    private WalletRepository walletRepository;
    
    public Wallet getWallet(Long userId) {
        return walletRepository.findByUserId(userId).orElseThrow(()->new RuntimeException("Wallet not found"));
    }

    public Long getBalance(Long userId) {
        Wallet wallet = walletRepository.findByUserId(userId).orElseThrow(()->new RuntimeException("Wallet not found"));
        return wallet.getBalance();
    }
}
