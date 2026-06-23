package com.ayush.wallet.exception;

/**
 * Exception thrown when a transaction is invalid or cannot be processed.
 */
public class InvalidTransactionException extends WalletException {
    
    private static final long serialVersionUID = 1L;
    private static final String ERROR_CODE = "INVALID_TRANSACTION";

    public InvalidTransactionException(String message) {
        super(message, ERROR_CODE);
    }

    public InvalidTransactionException(String message, Throwable cause) {
        super(message, ERROR_CODE, cause);
    }

    public InvalidTransactionException(Long transactionId, String reason) {
        super("Transaction " + transactionId + " is invalid. Reason: " + reason, ERROR_CODE);
    }

    public InvalidTransactionException() {
        super("Transaction is invalid", ERROR_CODE);
    }
}
