import React from "react";
import "./LoginPage.css"

const Login = () => (
    <div className="login-page">
        <div className="login-container">
            <div className="logo">
                Kyaing's Minions
            </div>
            <div className="input-container">
                <input 
                    className="user-input" 
                    type="text"/>
            </div>
            <div className="input-container">
                <input 
                    className="user-input" 
                    type="password" />
            </div>
            <button className="login-button-container">
                Login
            </button>
        </div>
    </div>
)

export default Login;