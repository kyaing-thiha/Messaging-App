import React, { Component } from 'react';
import "./ChatPage.css";

import ToolBar from "../components/ChatToolBar"
import SideBar from "../components/ChatSideBar"
import MessageScreen from "../components/MessageScreen"

/**
  Mock Data
*/
import {user1, user2} from "../mocks/mockUsers"

class ChatPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: user1,
      selectedReceiver: null,
    }
  }

  setSelectedReceiver = (receiver) => {
    this.setState({selectedReceiver: receiver})
  }

  render(){
    const { user } = this.state;
    return (
      <div className="chat-screen-container">
        <ToolBar profilePic={this.state.user.profilePic}/>
        <div className="chat-main-body-container">
          <SideBar 
            allReceivers = {user.minionPals} 
            onSelectReceiver = {this.setSelectedReceiver}
            selectedReceiver= {this.state.selectedReceiver}
          />
          <MessageScreen {...this.state} />
        </div>
      </div>
    );
  }
}

export default ChatPage;
