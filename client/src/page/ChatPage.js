import React, { Component } from 'react';
import "./ChatPage.css";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

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
      const user = await postURL("http://localhost:8080/minions/getMinionData",
                            {token: this.props.token});
      this.setState({user});
    }
    catch(error){
      this.setState({user: null})
    }
  }

  setSelectedReceiver = (receiver) => {
    this.setState({selectedReceiver: receiver})
  }

  render(){
    const { user } = this.state;
    
    return ( user? 
      (<div className="chat-screen-container">
        <ToolBar profilePic={this.state.user.profilePic}/>
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
      </div>):(<Redirect to="/Login"/>)
    );
  }
}

ChatPage.propType = {
  token: PropTypes.String
}

export default ChatPage;
