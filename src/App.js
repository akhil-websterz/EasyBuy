import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import shopping from "./images/shopping.jpg";
 function  App(){
    const background={
        height:800,
        width:1400,
         backgroundSize: 'cover',
         backgroundImage: "url(" + shopping + ")"
          };
          const style={
            color:"blue"
          }
     return(
         <div style={background}> 
    <marquee style={style}>Welcome To <span style={{color:"red"}}>EasyBuy</span></marquee>
             <Welcome />
       </div>
     )
 }
 export default App;