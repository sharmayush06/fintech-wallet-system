package com.ayush.wallet.exception;

/**
 * Base exception class for all wallet-related exceptions.
 * This is the parent exception for the wallet application.
 */
public class WalletException extends RuntimeException {
    
    private static final long serialVersionUID = 1L;
    private String errorCode;

    public WalletException(String message) {
        super(message);
    }

    public WalletException(String message, Throwable cause) {
        super(message, cause);
    }

    public WalletException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public WalletException(String message, String errorCode, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }
}
