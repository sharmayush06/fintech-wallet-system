package com.ayush.wallet.exception;

/**
 * Exception thrown when a user is not found in the database.
 */
public class UserNotFoundException extends WalletException {
    
    private static final long serialVersionUID = 1L;
    private static final String ERROR_CODE = "USER_NOT_FOUND";

    public UserNotFoundException(String message) {
        super(message, ERROR_CODE);
    }

    public UserNotFoundException(String message, Throwable cause) {
        super(message, ERROR_CODE, cause);
    }

    public UserNotFoundException(Long userId) {
        super("User not found with ID: " + userId, ERROR_CODE);
    }

    public UserNotFoundException(String fieldName, String fieldValue) {
        super("User not found with " + fieldName + ": " + fieldValue, ERROR_CODE);
    }
}
