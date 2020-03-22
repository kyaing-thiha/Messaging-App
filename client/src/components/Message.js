import React from "react";
import "./Message.css";

/**
 * 
 * @param {String} content "Message to display on" 
 */

const Message = ({ content }) => {
    return (
        <div className="message-container">
            <span className="message">{content}</span>
        </div>)
}
export default Message;