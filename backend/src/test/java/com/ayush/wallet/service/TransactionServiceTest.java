package com.ayush.wallet.service;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ayush.wallet.dto.TransactionRequest;
import com.ayush.wallet.model.Transaction;
import com.ayush.wallet.model.Wallet;
import com.ayush.wallet.repository.TransactionRepository;
import com.ayush.wallet.repository.WalletRepository;

@ExtendWith(MockitoExtension.class)
class TransactionServiceTest {

    @Mock
    private WalletRepository walletRepository;

    @Mock
    private TransactionRepository transactionRepository;

    @InjectMocks
    private TransactionService transactionService;

    @Test
    void historyShouldUseWalletIdForUser() {
        Long userId = 7L;
        Long walletId = 5L;

        Wallet wallet = new Wallet();
        wallet.setId(walletId);

        when(walletRepository.findByUserId(userId)).thenReturn(Optional.of(wallet));
        when(transactionRepository.findBySourceWalletIdOrDestinationWalletId(walletId, walletId))
                .thenReturn(List.of(new Transaction()));

        TransactionRequest request = new TransactionRequest();
        request.setUserId(userId);

        List<Transaction> result = transactionService.history(request);

        assertEquals(1, result.size());
        verify(transactionRepository).findBySourceWalletIdOrDestinationWalletId(walletId, walletId);
    }
}
