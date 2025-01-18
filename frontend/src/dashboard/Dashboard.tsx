import React from 'react';
import './FinancialOverview.css';

export const Dashboard: React.FC = () => {
    return (
        <div className="financial-overview">
            <h1>Your Financial Overview</h1>
            <div className="overview-cards">
                <div className="card">
                    <h2>Monthly Budget</h2>
                    <p className="amount">$2,500 / $3,000</p>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '83%' }}></div>
                    </div>
                    <p className="remaining">17% remaining</p>
                </div>
                <div className="card">
                    <h2>Total Spending</h2>
                    <p className="amount">$1,840</p>
                    <p className="subtext">12% increase from last month</p>
                </div>
                <div className="card">
                    <h2>Savings Goal</h2>
                    <p className="amount">$5,000 / $10,000</p>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '50%' }}></div>
                    </div>
                    <p className="subtext">50% achieved</p>
                </div>
            </div>

            <div className="spending-breakdown">
                <h2>Spending Breakdown</h2>
                <div className="bar-chart">
                    <div className="bar">
                        <div className="bar-inner" style={{ height: '80%' }}></div>
                        <p>Food</p>
                    </div>
                    <div className="bar">
                        <div className="bar-inner" style={{ height: '60%' }}></div>
                        <p>Transport</p>
                    </div>
                    <div className="bar">
                        <div className="bar-inner" style={{ height: '40%' }}></div>
                        <p>Entertainment</p>
                    </div>
                    <div className="bar">
                        <div className="bar-inner" style={{ height: '70%' }}></div>
                        <p>Utilities</p>
                    </div>
                    <div className="bar">
                        <div className="bar-inner" style={{ height: '50%' }}></div>
                        <p>Other</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

