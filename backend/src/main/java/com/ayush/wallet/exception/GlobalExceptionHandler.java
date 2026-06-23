package com.ayush.wallet.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * Global exception handler for all wallet application exceptions.
 * Provides centralized exception handling and consistent error responses.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handle UserNotFoundException
     */
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleUserNotFoundException(UserNotFoundException ex) {
        return buildErrorResponse(ex.getMessage(), ex.getErrorCode(), HttpStatus.NOT_FOUND);
    }

    /**
     * Handle WalletNotFoundException
     */
    @ExceptionHandler(WalletNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleWalletNotFoundException(WalletNotFoundException ex) {
        return buildErrorResponse(ex.getMessage(), ex.getErrorCode(), HttpStatus.NOT_FOUND);
    }

    /**
     * Handle InvalidCredentialsException
     */
    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<Map<String, Object>> handleInvalidCredentialsException(InvalidCredentialsException ex) {
        return buildErrorResponse(ex.getMessage(), ex.getErrorCode(), HttpStatus.UNAUTHORIZED);
    }

    /**
     * Handle UserAlreadyExistsException
     */
    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<Map<String, Object>> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {
        return buildErrorResponse(ex.getMessage(), ex.getErrorCode(), HttpStatus.CONFLICT);
    }

    /**
     * Handle InsufficientBalanceException
     */
    @ExceptionHandler(InsufficientBalanceException.class)
    public ResponseEntity<Map<String, Object>> handleInsufficientBalanceException(InsufficientBalanceException ex) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("message", ex.getMessage());
        response.put("errorCode", ex.getErrorCode());
        response.put("currentBalance", ex.getCurrentBalance());
        response.put("requiredAmount", ex.getRequiredAmount());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    /**
     * Handle InvalidTransactionException
     */
    @ExceptionHandler(InvalidTransactionException.class)
    public ResponseEntity<Map<String, Object>> handleInvalidTransactionException(InvalidTransactionException ex) {
        return buildErrorResponse(ex.getMessage(), ex.getErrorCode(), HttpStatus.BAD_REQUEST);
    }

    /**
     * Handle InvalidAmountException
     */
    @ExceptionHandler(InvalidAmountException.class)
    public ResponseEntity<Map<String, Object>> handleInvalidAmountException(InvalidAmountException ex) {
        return buildErrorResponse(ex.getMessage(), ex.getErrorCode(), HttpStatus.BAD_REQUEST);
    }

    /**
     * Handle generic WalletException
     */
    @ExceptionHandler(WalletException.class)
    public ResponseEntity<Map<String, Object>> handleWalletException(WalletException ex) {
        return buildErrorResponse(ex.getMessage(), ex.getErrorCode(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Handle generic RuntimeException (fallback)
     */
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, Object>> handleRuntimeException(RuntimeException ex) {
        return buildErrorResponse(ex.getMessage(), "INTERNAL_ERROR", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Helper method to build consistent error responses
     */
    private ResponseEntity<Map<String, Object>> buildErrorResponse(String message, String errorCode, HttpStatus status) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("message", message);
        response.put("errorCode", errorCode);
        response.put("status", status.value());
        return new ResponseEntity<>(response, status);
    }
}
