import React from 'react';
import Register from "./Register";
import Login from "./Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
Link
  } from "react-router-dom";
function Welcome() {
  
  return (
    <div>
    
    <Router style={{backgroundColor:"blue"}}> 
   <ul> <li><Link to="/user/Register">New User?</Link>
  </li>
  <li><Link to="/user/Login">Existing user</Link></li> 
  </ul>
    <Switch>
           
        <Route path="/user/Register" component={Register} />
        <Route path="/user/Login" component={Login} />
        
    
      </Switch>
    </Router>
    </div>
    )
}

export default Welcome;
