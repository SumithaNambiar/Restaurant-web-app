import React from "react";

const Navigation=()=>{
return(
    <nav>
       <img src="little lemon.jpg" alt="Logo Little Lemon"></img>
    <ul>
        //href= "link to the page"
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/orderOnline">Order Online</a></li>
        <li><a href="/login">Login</a></li>
    </ul>
    </nav>
)
}
export default Navigation;