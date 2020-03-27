import React, { useState } from 'react';
import "./App.css";

import ChatPage from "./page/ChatPage";
import LoginPage from "./page/LoginPage";

const App = () => {
  const [token, setToken] = useState(null);
  return(
    token ?
      (<ChatPage path="Chat"
        {...token} 
        resetToken={()=>setToken(null)}
      />) :
      (<LoginPage setToken={setToken} />)
  )
}

export default App;
