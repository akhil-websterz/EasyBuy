import React from 'react';
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";
function Register(){
    return (
<div>
 
<form action ="Register.php" method="post">
  <label>
     Name :</label>
    <input type="text" name="name1" />
  <label>Email:</label>
  <input type="text" name="name"id="mail" />
  <label>Enter password:</label>
  <input type="password"id="pass" ></input>
  <label>Confirm Password</label>
  <input type="password"id="pass" ></input>
  
  <input type="submit" value="Submit" />
</form>
</div>
    )

}
export default  Register ;