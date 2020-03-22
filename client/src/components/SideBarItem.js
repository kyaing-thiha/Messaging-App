import React from "react";
import "./ChatSideBar.css";

/**
 * SideBarItem is a component for displaying each user in sidebar
 * 
 * PropTypes
 * @param {String} name of user to display
 * @param {function} onSelect to invoke when item is selected
 * @param {String} profilePic uri to retrieve the profile picture
 */

const SideBarItem = ({name, onSelect, profilePic}) => (
    <div 
        className="container"
        onClick={onSelect}
    >
        {name}
    </div>
)

export default SideBarItem;