import React, { Component } from "react";
import Message from "./Message";
import "./MessageScreen.css";
import { postURL } from "../utils"

const Title = ({ name }) => (
    <div className="message-screen-title">
        {name}
    </div>
)

class MessageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    fetchMessages = async () => {
        try{
            const options = {
                token: this.props.token,
                with: this.props.selectedReceiver._id
            }
            const messages = await postURL("http://localhost:8080/messages/conversation", options);
            this.setState({
                messages
            })
        }
        catch{/* To handle fetching messages failed */}
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedReceiver !== this.props.selectedReceiver){
            this.fetchMessages()
        }
    }

    async handleSendMessage(receiverId, content){
        const sendURL = "http://localhost:8080/messages/send"
        const options = {
            token: this.props.token,
            receiver: receiverId,
            content
        }
        const messageSent = await postURL(sendURL, options)
        console.log(messageSent);
    }

    render() {
        const { user, selectedReceiver } = this.props;
        const { messages } = this.state;

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

        return (
            <div className="message-screen">
                {selectedReceiver ?
                    <Title name={selectedReceiver.name} /> :
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
                    <input 
                        type="text" 
                        className="text-area"
                        onKeyUp = {(e)=>{
                            if (e.key==="Enter"){
                                const receiverId = this.props.selectedReceiver._id;
                                const content = e.target.value;
                                this.handleSendMessage(receiverId, content)
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default MessageScreen;