import React,  {useState} from "react";
import "./ChatSideBar.css"
import PropTypes from "prop-types";

import SideBarItem from "./SideBarItem";
import SearchBar from "./SearchBar";
import {filterArrayBasedOnInputString} from "../utils"

/**
 * SideBar is a component for displaying other users on the side
 * 
 * PropTypes
 * @param {UserObject[]} list of users to display
 * @param {(UserObject)=>()} onSelectReceiver takes the user Object and set as active receiver
 * @param {UserObject} selectedReceiver UserObject that is currently selected in sidebar
 */

const ChatSideBar = ({allReceivers, onSelectReceiver, selectedReceiver}) => {
    const [filteredReceivers, setFilteredReceivers] = useState(allReceivers);
    const USERNAME_KEY = "name";

    const filterReceivers = (input) => {
        setFilteredReceivers(
            filterArrayBasedOnInputString(
                [...allReceivers], 
                input, 
                USERNAME_KEY
            )
        )
    }

    return (
        <div className="side-bar">
            <SearchBar handleChange={filterReceivers} />
            {filteredReceivers.map(receiver => (
                <SideBarItem 
                    key= {receiver._id} 
                    onSelect= {()=>onSelectReceiver(receiver)} 
                    name = {receiver.name}
                    profilePic={receiver.profilePic}
                    isSelected={ selectedReceiver && receiver._id === selectedReceiver._id}
                />    
            ))}
        </div>
    )
}

ChatSideBar.propTypes = {
    allReceivers: PropTypes.array,
    onSelectReceiver: PropTypes.func
}

export default ChatSideBar