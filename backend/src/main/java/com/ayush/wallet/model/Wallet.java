package com.ayush.wallet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@Table(name = "wallet")
@NoArgsConstructor
@Data
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long balance;
    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
    @OneToMany(mappedBy = "sourceWallet")
    @JsonIgnore
    private List<Transaction> sentTransactions;
    @OneToMany(mappedBy = "destinationWallet")
    @JsonIgnore
    private List<Transaction> receivedTransactions;
}
