import React from "react";
import "./Message.css";

/**
 * 
 * @param {String} content "Message to display on" 
 */

const Message = ({ content, sentByUser }) => {
    return (
        <div className={`message-container ${sentByUser? "user-sent-message": "user-received-message"}`}>
            <span className="message" >
                {content}
            </span>
        </div>)
}
export default Message;