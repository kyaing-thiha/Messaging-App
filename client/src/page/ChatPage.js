import React, { Component } from 'react';
import "./ChatPage.css";
import PropTypes from "prop-types";

import ToolBar from "../components/ChatToolBar"
import SideBar from "../components/ChatSideBar"
import MessageScreen from "../components/MessageScreen"
import { postURL } from "../utils"

/**
 * ChatPage is a component for rendering ChatPage
 * 
 * PropTypes
 * @param {String} token verified token to request user data from server
 */

class ChatPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      selectedReceiver: null,
    }
  }
  
  async componentDidMount(){
    try {
      const user = await postURL("minions/getMinionData",
                            {token: this.props.token});
      this.setState({user});
    }
    catch(error){
      this.props.resetToken();
    }
  }

  setSelectedReceiver = (receiver) => {
    this.setState({selectedReceiver: receiver})
  }

  handleLogout = () =>{
    let options = {
      token: this.props.token
    }
    postURL("minions/signIn", options)
      .then(success=>{
        this.props.resetToken();
      })
      .catch(failure=>{
        console.log("failed to logout")
      })
  }

  render(){
    const { user } = this.state;
    
    return ( user ? 
      (<div className="chat-screen-container">
        <ToolBar 
          profilePic={this.state.user.profilePic}
          name={this.state.user.name}
          handleLogout = {this.handleLogout}
        />
        <div className="chat-main-body-container">
          <SideBar 
            allReceivers = {user && user.minionPals} 
            onSelectReceiver = {this.setSelectedReceiver}
            selectedReceiver= {this.state.selectedReceiver}
          />
          <MessageScreen 
            {...this.state}
            token={this.props.token}
          />
        </div>
      </div>):(<div>Failed to fetch data</div>)
    );
  }
}

ChatPage.propType = {
  token: PropTypes.String
}

export default ChatPage;
