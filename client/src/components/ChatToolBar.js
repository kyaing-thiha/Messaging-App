import React from "react";
import "./ChatToolBar.css"

/**
 * 
 * @param {profilePic} url to retrive the profile picture for the user 
 */

const ChatToolBar = ({profilePic}) => (
    <div className="toolbar" >
        <span className="application-name">Kyaing's Minions</span>
        <span className="profile-pic"></span>
    </div>
)

export default ChatToolBar;