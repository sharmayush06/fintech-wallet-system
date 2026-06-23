package com.ayush.wallet.service;

import com.ayush.wallet.dto.LoginRequest;
import com.ayush.wallet.dto.RegisterRequest;
import com.ayush.wallet.model.User;
import com.ayush.wallet.repository.UserRepository;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public @Nullable Object register(RegisterRequest registerRequest) {
        if(userRepository.findByEmail(registerRequest.getEmail()).isPresent()){
            return "Email is already used";
        }
        User user=new User();
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword());
        user.setPhone(registerRequest.getPhone());
        userRepository.save(user);
        return "User Registered Successfully";
    }

    public @Nullable Object login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(()-> new RuntimeException("User not found"));
        if(!user.getPassword().equals(loginRequest.getPassword())){
            throw new RuntimeException("Invalid Password");
        }
        return "Login Successful";
    }
}
