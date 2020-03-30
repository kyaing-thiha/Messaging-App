import React from "react";
import "./ChatToolBar.css"

/**
 * 
 * @param {profilePic} url to retrive the profile picture for the user 
 */

const ChatToolBar = ({name, profilePic, handleLogout}) => {
    
    return (
    <div className="toolbar" >
        <span className="minion-name">Welcome, {name}</span>
        <span className="application-name">Kyaing's Minions</span>
        <div>
            <span className="profile-pic">
                <img 
                    src={profilePic} 
                    alt="minion"
                />
            </span>
            <span 
                className="logout-button"
                onClick={handleLogout}
            >
                Log out
            </span>
        </div>
    </div>
)}

export default ChatToolBar;