import React, { useState } from 'react';
import "./App.css";

import ChatPage from "./page/ChatPage";
import LoginPage from "./page/LoginPage";

const App = () => {
  const [token, setToken] = useState(null);
  return(
    // token ?
    //   (<ChatPage path="Chat"
    //     {...token} 
    //     resetToken={()=>setToken(null)}
    //   />) :
    //   (<LoginPage setToken={setToken} />)

    <ChatPage 
        token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdkZWE1Y2QxNWE1MjUzN2Y5MzcyOWMiLCJuYW1lIjoibWluaW9uMSIsImlhdCI6MTU4NTUzNTI1OCwiZXhwIjoxNTg1NTM4ODU4fQ.El82d6Kbi7RH8jIIKjmzaGczTiVyqepN6CCae309Z0w"
        resetToken={()=>console.log("reset token")}
      />
  )
}

export default App;