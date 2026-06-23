package com.ayush.wallet.exception;

/**
 * Exception thrown when user credentials (email/password) are invalid.
 */
public class InvalidCredentialsException extends WalletException {

    private static final long serialVersionUID = 1L;
    private static final String ERROR_CODE = "INVALID_CREDENTIALS";

    public InvalidCredentialsException(String message) {
        super(message, ERROR_CODE);
    }

    public InvalidCredentialsException(String message, Throwable cause) {
        super(message, ERROR_CODE, cause);
    }

    public InvalidCredentialsException() {
        super("Invalid email or password", ERROR_CODE);
    }
}
