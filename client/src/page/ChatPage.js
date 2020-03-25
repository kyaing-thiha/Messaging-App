import React, { Component } from 'react';
import "./ChatPage.css";

import ToolBar from "../components/ChatToolBar"
import SideBar from "../components/ChatSideBar"
import MessageScreen from "../components/MessageScreen"
import { postURL } from "../utils"

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
      /* LOGIC to handle if fetching user failed*/
    }
  }

  setSelectedReceiver = (receiver) => {
    this.setState({selectedReceiver: receiver})
  }

  render(){
    const { user } = this.state;
    return ( user &&
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
