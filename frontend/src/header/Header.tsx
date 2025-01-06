import React, {useState} from "react";
import logo from '../assets/logo.jpg';
import {useLocation, useNavigate} from "react-router-dom";
import './Header.css';

export const Header = () => {
    const [currentPage, setCurrentPage] = useState(useLocation().pathname);
    const [logged, setLogged] = useState(true);
    const navigate = useNavigate();

    const navigateHome = () => {
        setCurrentPage('/');
        navigate('/');
    };

    const navigateLogin = () => {
        setCurrentPage('/login');
        navigate('/login');
    };

   const navigateBudget = () => {
       setCurrentPage('/budget');
       navigate('/budget');
   }

    const navigateSavings = () => {
        setCurrentPage('/savings');
        navigate('/savings');
    }

    const navigateSpending = () => {
        setCurrentPage('/spending');
        navigate('/spending');
    }

    const Tab = (pageName: string, callFunction: any, path: string) => {
        return (
            <>
                <div
                    className={`tab ${currentPage === path ? 'tab-color' : '' }`}
                    onClick={callFunction}>
                    {pageName}
                </div>
            </>
        );
    };

    return (
        <>
            <nav className="navbar">
                <img className="logo" src={logo} alt="Logo" onClick={navigateHome}/>
                {!logged &&  <div className="nav-links">
                    <button className="login-button" onClick={navigateLogin}>Login</button>
                </div>}
                {logged &&
                    <div className='tabs'>
                        {Tab("Dashboard", navigateHome, '/')}
                        {Tab("Budget", navigateBudget, '/budget')}
                        {Tab("Spending", navigateSpending, '/spending')}
                        {Tab("Savings", navigateSavings, '/savings')}
                    </div>
                }
            </nav>
        </>)
}