import React from 'react';
import "./App.css";

import ChatPage from "./page/ChatPage"


//TODO: retrieve token from server
const App = () => (
  <ChatPage 
    token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc5ZDk5NzExODc3YWY1MWUxZTNlMjciLCJuYW1lIjoibWluaW9uMyIsImlhdCI6MTU4NTE4ODk1NCwiZXhwIjoxNTg1MTkyNTU0fQ.mFOtGX4uKyrQS_bkiWeQxJKY3XH0lbOkgAgte4P0ET0"
  />
)

export default App;
