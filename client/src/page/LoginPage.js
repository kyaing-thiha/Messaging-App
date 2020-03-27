<<<<<<< HEAD
import React, {useState} from "react";
import "./LoginPage.css"
import {postURL} from "../utils"
=======
import React, { useState } from "react";
import "./LoginPage.css"
import { postURL } from "../utils"
import { Redirect } from "react-router-dom"
>>>>>>> 14f18697c29fbb2b678a021d2486f8f448fd5e51

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
<<<<<<< HEAD
    
    const handleLogin = async () =>{
        try{
            const url = "http://localhost:8080/minions/signIn";
=======
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginAttemptFailed, setLoginAttemptFailed] = useState(false);
    let token = "";

    const handleSignIn = async () => {
        try {
>>>>>>> 14f18697c29fbb2b678a021d2486f8f448fd5e51
            const options = {
                name: userName,
                password
            }
<<<<<<< HEAD
            const token = await postURL(url, options);
            props.setToken(token)
        }
        catch(error){
            //TODO: to display error message for failing to retrieve data 
=======
            token = await postURL("http://localhost:8080/minions/signIn", options);
            setLoginSuccess(true);
        }
        catch (error) {
            setLoginAttemptFailed(true);
>>>>>>> 14f18697c29fbb2b678a021d2486f8f448fd5e51
        }
    }

    return (
<<<<<<< HEAD
        <div className="login-page">
            <div className="login-container">
                <div className="logo">
                    Kyaing's Minions
                </div>
                <div className="input-container">
                    <input 
                        className="user-input" 
                        type="text"
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                </div>
                <div className="input-container">
                    <input 
                        className="user-input" 
                        type="password" 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <button 
                    className="login-button-container"
                    onClick={handleLogin}>
                        Login
                </button>
            </div>
        </div>
    )
}
=======
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


>>>>>>> 14f18697c29fbb2b678a021d2486f8f448fd5e51

export default Login;