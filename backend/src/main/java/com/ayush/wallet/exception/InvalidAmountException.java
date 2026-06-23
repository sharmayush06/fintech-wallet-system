package com.ayush.wallet.exception;

/**
 * Exception thrown when an invalid amount is provided for a transaction.
 * This includes zero, negative, or very large amounts.
 */
public class InvalidAmountException extends WalletException {
    
    private static final long serialVersionUID = 1L;
    private static final String ERROR_CODE = "INVALID_AMOUNT";

    private Long amount;

    public InvalidAmountException(String message) {
        super(message, ERROR_CODE);
    }

    public InvalidAmountException(String message, Throwable cause) {
        super(message, ERROR_CODE, cause);
    }

    public InvalidAmountException(Long amount) {
        super("Invalid amount: " + amount + ". Amount must be greater than zero", ERROR_CODE);
        this.amount = amount;
    }

    public InvalidAmountException(Long amount, String reason) {
        super("Invalid amount: " + amount + ". Reason: " + reason, ERROR_CODE);
        this.amount = amount;
    }

    public Long getAmount() {
        return amount;
    }
}
