import React, { Component } from "react";
import Message from "./Message";
import "./MessageScreen.css";
import { postURL } from "../utils"
import TextArea from "./TextArea"
import io from "socket.io-client"

/**
 * propTypes
 * @param {String} token value of the verified token 
 * @param {Object} user  that signed in
 * @param {Object} selectedReceiver to make a coversation with
 */

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

    componentDidMount(){
        const socketOptions = {
            query: `token=${this.props.token}`
        };
        const clientSocket = io("http://localhost:8080", socketOptions);
        clientSocket.on("connect", ()=>{
            console.log("sockets connected");
        });
        clientSocket.on("newMessage", (message)=>{
            console.log(message);
        })
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
        catch{
            /** TODO: to display error message failing to retrieve messages */
            throw new Error("Failed to retrieve messages")
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedReceiver !== this.props.selectedReceiver){
            this.fetchMessages()
        }
    }

    handleSendMessage = async (content)=>{
        const sendURL = "http://localhost:8080/messages/send"
        const options = {
            token: this.props.token,
            receiver: this.props.selectedReceiver._id,
            content
        }
        try{
            const messageSent = await postURL(sendURL, options)
            this.setState({
                messages: [...this.state.messages, messageSent]
            })
        }
        catch(error){
            throw new Error("message failed to send");
        }
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
                
                {selectedReceiver &&
                    (<TextArea 
                    onClickEnter = {this.handleSendMessage}
                    />)
                }
            </div>
        )
    }
}

export default MessageScreen;