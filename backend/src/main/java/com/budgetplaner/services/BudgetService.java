package com.budgetplaner.services;

import com.budgetplaner.entities.Budget;
import com.budgetplaner.entities.User;
import com.budgetplaner.repositories.BudgetRepository;
import com.budgetplaner.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetService {
    private BudgetRepository budgetRepository;

    private UserRepository userRepository;

    public BudgetService(BudgetRepository budgetRepository, UserRepository userRepository) {
        this.budgetRepository = budgetRepository;
        this.userRepository = userRepository;
    }

    public Budget saveBudget(Budget budget) {
        return budgetRepository.save(budget);
    }

    public List<Budget> findBudgetsByUser(int userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return budgetRepository.findByUser(user);
    }

}