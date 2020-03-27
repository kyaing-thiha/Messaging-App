import React, { useState } from "react";
import "./LoginPage.css"
import { postURL } from "../utils"
import { Redirect } from "react-router-dom"

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginAttemptFailed, setLoginAttemptFailed] = useState(false);
    let token = "";

    const handleSignIn = async () => {
        try {
            const options = {
                name: userName,
                password
            }
            token = await postURL("http://localhost:8080/minions/signIn", options);
            setLoginSuccess(true);
        }
        catch (error) {
            setLoginAttemptFailed(true);
        }
    }

    return (
        loginSuccess ?
            (<Redirect to="/Chat" />) :
            (<div className="login-page">
                <div className="login-container">
                    <div className="logo">
                        Kyaing's Minions
                            </div>
                    <div className="input-container">
                        <input
                            className="user-input"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            className="user-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="login-button-container"
                        onClick={handleSignIn} >
                        Login
                            </button>
                </div>
            </div>
        )
    )
}



export default Login;