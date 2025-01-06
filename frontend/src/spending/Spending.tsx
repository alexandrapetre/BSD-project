import React, { useState } from "react";
import "./Spending.css";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

interface Transaction {
    date: string;
    category: string;
    amount: number;
}

export const Spending: React.FC = () => {
    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [transactions, setTransactions] = useState<Transaction[]>([
        { date: "2023-05-01", category: "Food", amount: 50 },
        { date: "2023-05-02", category: "Transportation", amount: 30 },
        { date: "2023-05-03", category: "Entertainment", amount: 100 },
    ]);

    const handleAddTransaction = (e: React.FormEvent) => {
        e.preventDefault();
        if (amount && category) {
            const newTransaction: Transaction = {
                date: new Date().toISOString().split("T")[0],
                category,
                amount: parseFloat(amount),
            };
            setTransactions((prev) => [...prev, newTransaction]);
            setAmount("");
            setCategory("");
        }
    };

    return (
        <div>
            <Header/>
            <div className="spending-page">
                <h2 className="title">Record Your Spending</h2>
                <form className="spending-form" onSubmit={handleAddTransaction}>
                    <div className="form-group">
                        <label htmlFor="amount">Amount Spent</label>
                        <input
                            type="number"
                            id="amount"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select category</option>
                            <option value="Food">Food</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">
                        Record Spending
                    </button>
                </form>
                <h3 className="subtitle">Recent Transactions</h3>
                <table className="transactions-table">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.category}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

