import React from 'react';
import "./App.css";

import ChatPage from "./page/ChatPage"


//TODO: retrieve token from server
const App = () => (
  <ChatPage 
    token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdhZjJjMmNjOTVkNTAyNTdlZmRjOWMiLCJuYW1lIjoibWluaW9uMSIsImlhdCI6MTU4NTI3MzY4OSwiZXhwIjoxNTg1Mjc3Mjg5fQ.e23KZy_tKNjP97yyB9Ig5_uyrdo-1Cmlp--Ev8GDHFw"
  />
)

export default App;
