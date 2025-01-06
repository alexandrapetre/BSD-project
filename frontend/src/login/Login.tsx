import React, { useState } from 'react';
import './Login.css';
import {Header} from "../header/Header";
import {useLocation, useNavigate} from "react-router-dom";
import {Footer} from "../footer/Footer";

export const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const [_, setCurrentPage] = useState(useLocation().pathname);
    const navigate = useNavigate();

    const navigateRegister = () => {
        setCurrentPage('/register');
        navigate('/register');
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (username === '' || password === '') {
            setError('Please fill in both fields');
        } else {
            setError('');
            alert('Logged in successfully!');
        }
    };

    return (
        <div className="login-container">
        <Header/>
        <div className="input-container">
            <div className="login">
                <div className="title-login">Login</div>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </div>

                        {error && <p className="error-message">{error}</p>}

                        <button type="submit" className="login-button">Login</button>
                        <p className="register-link">
                            Don't have an account?
                            <button type="button" className="register-button-link" onClick={navigateRegister}>
                                Register
                            </button>
                        </p>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

