package com.ayush.wallet.dto;

import lombok.Data;
@Data
public class TransferRequest {
    private Long sourceUserId;
    private Long destinationUserId;
    private Long amount;
}
