import React, { Component } from 'react';
import "./App.css";

import ToolBar from "./components/ChatToolBar"
import SideBar from "./components/ChatSideBar"
import MessageScreen from "./components/MessageScreen"

/**
  Mock Data
*/
import {user1, user2, messages} from "./mocks/mockUsers"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: user1,
      selectedReceiver: null
    }
  }

  setSelectedReceiver = (receiver) => {
    this.setState({selectedReceiver: receiver})
  }

  render(){
    const { user } = this.state;
    return (
      <div className="chat-screen-container">
        <ToolBar />
        <div className="chat-main-body-container">
          <SideBar 
            allReceivers = {user.minionPals} 
            onSelectReceiver = {this.setSelectedReceiver}
          />
          <MessageScreen/>
        </div>
      </div>
    );
  }
}

export default App;
