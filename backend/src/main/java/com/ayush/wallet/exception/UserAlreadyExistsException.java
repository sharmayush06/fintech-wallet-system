package com.ayush.wallet.exception;

/**
 * Exception thrown when attempting to register a user with an email that already exists.
 */
public class UserAlreadyExistsException extends WalletException {
    
    private static final long serialVersionUID = 1L;
    private static final String ERROR_CODE = "USER_ALREADY_EXISTS";

    public UserAlreadyExistsException(String message) {
        super(message, ERROR_CODE);
    }

    public UserAlreadyExistsException(String message, Throwable cause) {
        super(message, ERROR_CODE, cause);
    }

    public UserAlreadyExistsException(String fieldName, String fieldValue) {
        super(fieldName + " '" + fieldValue + "' is already registered", ERROR_CODE);
    }

    public UserAlreadyExistsException() {
        super("User already exists with this email", ERROR_CODE);
    }
}
