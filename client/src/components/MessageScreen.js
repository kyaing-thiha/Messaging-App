import React from "react";
import "./MessageScreen.css"

const MessageScreen = () => {
    const Title = () => (
        <div className="message-screen-title">
            Minion1
        </div>
    )

    return(
    <div className="message-screen">
        <Title />
        <div className="message-display-area">

        </div>
        <div className="text-area-container">
            <input type="text" className="text-area">
            </input>
        </div>
    </div>)
}

export default MessageScreen;