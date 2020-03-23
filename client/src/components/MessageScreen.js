import React, {Component} from "react";
import Message from "./Message";
import "./MessageScreen.css";
import {fetchURL} from "../utils"

const Title = ({name}) => (
    <div className="message-screen-title">
        {name}
    </div>
)

class MessageScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        fetchURL("http://localhost:8080/mock/getMockMessages")
            .then(res => this.setState({messages: res}))
            .catch(err=>{/* LOGIC to handle if fetching message failed*/})
    }

    render(){
        const {user, selectedReceiver} = this.props;
        const {messages} = this.state;

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
                            sentByUser={message.sender === user._id}
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
}

export default MessageScreen;