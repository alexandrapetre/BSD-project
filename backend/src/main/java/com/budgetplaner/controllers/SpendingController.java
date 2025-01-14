package com.budgetplaner.controllers;


import com.budgetplaner.entities.Spending;
import com.budgetplaner.services.SpendingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/spendings")
public class SpendingController {

    private SpendingService spendingService;

    public SpendingController(SpendingService spendingService) {
        this.spendingService = spendingService;
    }

    @PostMapping
    public Spending createSpending(@RequestBody Spending spending) {
        return spendingService.saveSpending(spending);
    }

    @GetMapping("/user/{userId}")
    public List<Spending> getSpendingsByUser(@PathVariable int userId) {
        return spendingService.findSpendingsByUser(userId);
    }

    @PutMapping("/{userId}")
    public Spending updateSpending(@PathVariable int userId, @RequestBody Spending spending) {
        return spendingService.updateSpending(userId, spending);
    }

    @DeleteMapping("/{userId}")
    public void deleteSpending(@PathVariable int userId) {
        spendingService.deleteSpending(userId);
    }


}

