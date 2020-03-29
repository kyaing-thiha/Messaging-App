import React from "react";
import "./ChatToolBar.css"

/**
 * 
 * @param {profilePic} url to retrive the profile picture for the user 
 */

const ChatToolBar = ({profilePic}) => {
    return (
    <div className="toolbar" >
        <span className="application-name">Kyaing's Minions</span>
        <span className="profile-pic">
            <img 
                src={profilePic} 
                alt="minion"
            />
        </span>
    </div>
)}

export default ChatToolBar;