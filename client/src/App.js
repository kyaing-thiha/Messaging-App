import React from 'react';
import "./App.css";

import ChatPage from "./page/ChatPage"


//TODO: retrieve token from server
const App = () => (
  <ChatPage 
    token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc5ZDk5NzExODc3YWY1MWUxZTNlMjciLCJuYW1lIjoibWluaW9uMyIsImlhdCI6MTU4NTE5NjM0MywiZXhwIjoxNTg1MTk5OTQzfQ.7G3h6PhRmKUcVULOoq-LM0FKWtKMTkcsSumQuIU4u-w"
  />
)

export default App;
