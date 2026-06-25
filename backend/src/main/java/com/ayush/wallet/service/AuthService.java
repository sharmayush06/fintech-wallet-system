package com.ayush.wallet.service;

import java.util.HashMap;
import java.util.Map;

import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.wallet.dto.LoginRequest;
import com.ayush.wallet.dto.RegisterRequest;
import com.ayush.wallet.model.User;
import com.ayush.wallet.model.Wallet;
import com.ayush.wallet.repository.UserRepository;
import com.ayush.wallet.repository.WalletRepository;

@Service
public class AuthService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final WalletRepository walletRepository;

    public AuthService(UserRepository userRepository ,WalletRepository walletRepository) {
        this.userRepository = userRepository;
        this.walletRepository=walletRepository;
    }

    public @Nullable Object register(RegisterRequest registerRequest) {
        if(userRepository.findByEmail(registerRequest.getEmail()).isPresent()){
            return Map.of("message", "Email is already used");
        }
        User user=new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword());
        user.setPhone(registerRequest.getPhone());
        userRepository.save(user);
        Wallet wallet=new Wallet();
        wallet.setBalance(1000L);
        wallet.setUser(user);
        walletRepository.save(wallet);
        return buildUserResponse(user);
    }

    public @Nullable Object login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(()-> new RuntimeException("User not found"));
        if(!user.getPassword().equals(loginRequest.getPassword())){
            throw new RuntimeException("Invalid Password");
        }
        return buildUserResponse(user);
    }

    private Map<String, Object> buildUserResponse(User user) {
        Map<String, Object> response = new HashMap<>();
        response.put("id", user.getId());
        response.put("name", user.getName());
        response.put("email", user.getEmail());
        response.put("phone", user.getPhone());
        return response;
    }
}
