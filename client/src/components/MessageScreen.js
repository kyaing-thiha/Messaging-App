import React from "react";
import Message from "./Message";
import "./MessageScreen.css";

//Mocks
import {messages} from "../mocks/mockUsers"

const Title = ({name}) => (
    <div className="message-screen-title">
        {name}
    </div>
)

const MessageScreen = (props) => {
    const {user, selectedReceiver} = props;

    const filteredMessage = selectedReceiver &&
        messages.filter(message =>
            (
                message.sender === user._id &&
                message.receiver === selectedReceiver._id
            ) ||
            (
                message.sender === selectedReceiver._id &&
                message.receiver === user._id
            )
        )

    return(
        <div className="message-screen">
            { selectedReceiver? 
                <Title name={selectedReceiver.name} />: 
                null
            }

            <div className="message-display-area">
                {filteredMessage && filteredMessage.map(message => (
                    <Message 
                        key={message._id} 
                        content={message.content}
                    />
                ))}
            </div>

            <div className="text-area-container">
                <input type="text" className="text-area">
                </input>
            </div>
        </div>
    )
}

export default MessageScreen;