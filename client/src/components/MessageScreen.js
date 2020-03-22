import React from "react";
import "./MessageScreen.css"

const Title = ({name}) => (
    <div className="message-screen-title">
        {name}
    </div>
)

const MessageScreen = (props) => {
    
    const {selectedReceiver} = props;
    
    return(
        <div className="message-screen">
            
            { selectedReceiver? 
                <Title name={selectedReceiver.name} />: 
                null
            }

            <div className="message-display-area">

            </div>
            <div className="text-area-container">
                <input type="text" className="text-area">
                </input>
            </div>
        </div>
    )
}

export default MessageScreen;