package com.ayush.wallet.service;

import com.ayush.wallet.dto.UpdateUserRequest;
import com.ayush.wallet.model.User;
import com.ayush.wallet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(()->new RuntimeException("User not found"));
    }

    public User putUser(Long id, UpdateUserRequest updateUserRequest) {
        User user = userRepository.findById(id).orElseThrow(()->new RuntimeException("User not found"));
        user.setName(updateUserRequest.getName());
        user.setEmail(updateUserRequest.getEmail());
        return userRepository.save(user);
    }
}
