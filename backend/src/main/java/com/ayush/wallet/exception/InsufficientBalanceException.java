package com.ayush.wallet.exception;

/**
 * Exception thrown when a user attempts a transaction but has insufficient balance.
 */
public class InsufficientBalanceException extends WalletException {
    
    private static final long serialVersionUID = 1L;
    private static final String ERROR_CODE = "INSUFFICIENT_BALANCE";

    private Long currentBalance;
    private Long requiredAmount;

    public InsufficientBalanceException(String message) {
        super(message, ERROR_CODE);
    }

    public InsufficientBalanceException(String message, Throwable cause) {
        super(message, ERROR_CODE, cause);
    }

    public InsufficientBalanceException(Long currentBalance, Long requiredAmount) {
        super("Insufficient balance. Current: " + currentBalance + ", Required: " + requiredAmount, ERROR_CODE);
        this.currentBalance = currentBalance;
        this.requiredAmount = requiredAmount;
    }

    public Long getCurrentBalance() {
        return currentBalance;
    }

    public Long getRequiredAmount() {
        return requiredAmount;
    }
}
