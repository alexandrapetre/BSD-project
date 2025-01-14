package com.budgetplaner.controllers;

import com.budgetplaner.entities.Budget;
import com.budgetplaner.services.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/budgets")
public class BudgetController {

    private BudgetService budgetService;

    public BudgetController(BudgetService budgetService) {
        this.budgetService = budgetService;
    }

    @PostMapping
    public Budget createBudget(@RequestBody Budget budget) {
        return budgetService.saveBudget(budget);
    }

    @GetMapping("/user/{userId}")
    public List<Budget> getBudgetsByUser(@PathVariable int userId) {
        return budgetService.findBudgetsByUser(userId);
    }

}