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
 */

const ChatSideBar = ({allReceivers, onSelectReceiver}) => {
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