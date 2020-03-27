import React, {useState} from "react";
import "./LoginPage.css"
import {postURL} from "../utils"

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async () =>{
        try{
            const url = "http://localhost:8080/minions/signIn";
            const options = {
                name: userName,
                password
            }
            const token = await postURL(url, options);
            props.setToken(token)
        }
        catch(error){
            //TODO: to display error message for failing to retrieve data 
        }
    }

    return (
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

export default Login;