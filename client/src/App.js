import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ChatPage from "./page/ChatPage";
import LoginPage from "./page/LoginPage";

//TODO: retrieve token from server
const App = () => (
  <Router>
    <Switch>
      <Route path="/Login">
        <LoginPage path="Login"/>
      </Route>

      <Route path="/Chat">
        <ChatPage path="Chat"
          token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdhZjJjMmNjOTVkNTAyNTdlZmRjOWMiLCJuYW1lIjoibWluaW9uMSIsImlhdCI6MTU4NTI3MzY4OSwiZXhwIjoxNTg1Mjc3Mjg5fQ.e23KZy_tKNjP97yyB9Ig5_uyrdo-1Cmlp--Ev8GDHFw"
        />
      </Route>
      
    </Switch>
  </Router>

    // <LoginPage path="Login"/>
    // <ChatPage path="Chat"
    //   token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdhZjJjMmNjOTVkNTAyNTdlZmRjOWMiLCJuYW1lIjoibWluaW9uMSIsImlhdCI6MTU4NTI3MzY4OSwiZXhwIjoxNTg1Mjc3Mjg5fQ.e23KZy_tKNjP97yyB9Ig5_uyrdo-1Cmlp--Ev8GDHFw"
    // />
)

export default App;
