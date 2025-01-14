package com.budgetplaner.controllers;

import com.budgetplaner.entities.Savings;
import com.budgetplaner.services.SavingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/savings")
public class SavingController {

    private SavingService savingService;

    public SavingController(SavingService savingService) {
        this.savingService = savingService;
    }

    @PostMapping
    public Savings createSaving(@RequestBody Savings saving) {
        return savingService.saveSaving(saving);
    }

    @GetMapping("/user/{userId}")
    public List<Savings> getSavingsByUser(@PathVariable int userId) {
        return savingService.findSavingsByUser(userId);
    }

    @PostMapping("/contribute/{userId}")
    public Savings contributeToSavings(@PathVariable int userId, @RequestBody Double contribution) {
        return savingService.addContribution(userId, contribution);
    }

}
