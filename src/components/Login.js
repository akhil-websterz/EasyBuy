import React from 'react';
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";
function Login(){
return(
  <div>
     <form action="login.php"method="post">
      <h4>Welcome Back </h4>
        <label>Email:</label>
        <input type="text"id="name2"></input>
        <label>Password</label>
        <input type="Password" id="pass1"></input>
        <input type="Button"id="Button1"value="Log In"></input>
   
    </form>

  </div>
   
)

} 
export default Login;