import React from "react";
import "./SideBarItem.css";

/**
 * SideBarItem is a component for displaying each user in sidebar
 * 
 * PropTypes
 * @param {String} name of user to display
 * @param {function} onSelect to invoke when item is selected
 * @param {String} profilePic uri to retrieve the profile picture
 * @param {Boolean} isSelected indicate if the current item is selected in sidebar
 */

const SideBarItem = ({name, onSelect, profilePic, isSelected}) => (
    <div 
        className= {`container ${isSelected? "selected-container":""}`}
        onClick={onSelect}
    >
        <div className="profile-picture">
            
        </div>

        <div className="user-name">
            {name}
        </div>
    </div>
)

export default SideBarItem;