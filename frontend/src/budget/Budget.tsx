import React, { useState } from "react";
import "./Budget.css";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

export const Budget: React.FC = () => {
    const [budgets, setBudgets] = useState({
        total: "",
        food: "",
        transportation: "",
        entertainment: "",
        utilities: "",
        other: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudgets({ ...budgets, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Budget set successfully!");
    };

    return (
        <div>
            <Header/>
            <div className="budget-container">
                <div className="budget-form-container">
                    <h2>Set Your Monthly Budget</h2>
                    <form onSubmit={handleSubmit} className="budget-form">
                        <div className="input-group">
                            <label htmlFor="total">Total Monthly Budget</label>
                            <input
                                type="text"
                                id="total"
                                name="total"
                                value={budgets.total}
                                onChange={handleChange}
                                placeholder="Enter total budget"
                            />
                        </div>
                        <h3>Category Budgets</h3>
                        {["Food", "Transportation", "Entertainment", "Utilities", "Other"].map(
                            (category) => (
                                <div key={category} className="input-group">
                                    <label htmlFor={category.toLowerCase()}>{category}</label>
                                    <input
                                        type="text"
                                        id={category.toLowerCase()}
                                        name={category.toLowerCase()}
                                        value={(budgets as any)[category.toLowerCase()]}
                                        onChange={handleChange}
                                        placeholder={`Enter ${category.toLowerCase()} budget`}
                                    />
                                </div>
                            )
                        )}
                        <button type="submit" className="budget-button">
                            Set Budget
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

