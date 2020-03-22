import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* For Page Layout */}
      <div className = "chat-screen-container">
        <div className = "toolbar" >
          <span className="application-name">Kyaing's Minions</span>
          <span className="profile-pic"></span>
        </div>
        <div className="chat-main-body-container">
            <div className="side-bar">
              
            </div>
            <div className="message-screen">
              <div className="message-screen-title">
              Minion1
              </div>
              <div className="message-display-area">
                
              </div>
              <div className="text-area-container">
                <input type="text" className="text-area">
                </input>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
