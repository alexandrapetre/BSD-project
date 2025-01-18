import React, {useEffect, useState} from 'react';
import './Savings.css';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {addNewSaving, addNewSpending, contributeToSaving, getSavings, getSpendings, getUser} from "../api/ApiServices";
import {User} from "../api/budgetPlannerTypes";

interface Goal {
    goalName: string;
    id?: number;
    savedAmount: number;
    targetAmount: number;
}

export const Savings: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [goals, setGoals] = useState<Goal[]>([]);
    const [contribution, setContribution] = useState<number|string>('');
    const [newGoalName, setNewGoalName] = useState('');
    const [newGoalTarget, setNewGoalTarget] = useState<number | string>('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchSavings = async () => {
            try {
                if(user) {
                    const data = await getSavings(parseInt(user.id));
                    setGoals(data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchSavings();
    }, [user]);

    const handleAddGoal = async () => {
        if (newGoalName && newGoalTarget && user) {
            try {
                await addNewSaving(parseInt(user.id), newGoalName, Number(newGoalTarget));
                setGoals([...goals, { goalName: newGoalName, targetAmount: Number(newGoalTarget), savedAmount: 0 }]);
                setNewGoalName('');
                setNewGoalTarget('');
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }

        }
    };

    const handleContribute = async (index: number, amount: number) => {
        const updatedGoals = [...goals];
        updatedGoals[index].savedAmount += amount;
        await contributeToSaving(updatedGoals[index].id || index, amount);
        setContribution('');
    };

    return (
        <div className="savings-container">
        <Header/>
        <div className="savings-goals">
            <h1>Add New Savings Goal</h1>
            <div className="add-goal">
                <input
                    type="text"
                    placeholder="Enter goal name"
                    value={newGoalName}
                    onChange={(e) => setNewGoalName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter target amount"
                    value={newGoalTarget}
                    onChange={(e) => setNewGoalTarget(e.target.value)}
                />
                <button onClick={handleAddGoal}>+ Add Goal</button>
            </div>

            {goals.map((goal, index) => (
                <div key={index} className="goal">
                    <h2>{goal.goalName}</h2>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${(goal.savedAmount / goal.targetAmount) * 100}%` }}
                        ></div>
                    </div>
                    <p>
                        ${goal.savedAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)}
                    </p>
                    <div className="contribute">
                        <input
                            type="number"
                            placeholder="Contribute amount"
                            value={contribution}
                            onChange={(e) =>
                                setContribution(Number(e.target.value) || 0)
                            }
                        />
                        <button onClick={() => handleContribute(index, contribution as number)}>Contribute</button>
                    </div>
                </div>
            ))}

        </div>
    <Footer/>
    </div>
    );
};
