package com.ayush.wallet.exception;

/**
 * Exception thrown when a wallet is not found in the database.
 */
public class WalletNotFoundException extends WalletException {
    
    private static final long serialVersionUID = 1L;
    private static final String ERROR_CODE = "WALLET_NOT_FOUND";

    public WalletNotFoundException(String message) {
        super(message, ERROR_CODE);
    }

    public WalletNotFoundException(String message, Throwable cause) {
        super(message, ERROR_CODE, cause);
    }

    public WalletNotFoundException(Long walletId) {
        super("Wallet not found with ID: " + walletId, ERROR_CODE);
    }

    public WalletNotFoundException(Long userId, String reason) {
        super("Wallet not found for user " + userId + ". Reason: " + reason, ERROR_CODE);
    }
}
