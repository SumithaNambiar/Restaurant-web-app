import React from "react";

const Footer=()=>{
    return(
    <footer>
        <div class="column">
        <img src="src/assets/icons_assets/Logo.svg" alt="Logo"></img>
        </div>
        <div class="column">
            <p>Doormat Navigation</p>
            <ul>
                 <li><a href="/home">Home</a></li>
                 <li><a href="/about">About</a></li>
                 <li><a href="/menu">Menu</a></li>
                 <li><a href="/reservation">Reservation</a></li>
                 <li><a href="/orderOnline">Order Online</a></li>
                 <li><a href="/login">Login</a></li>
            </ul>
        </div>
        <div class="column">
            <p>Contact</p>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li><a href="/email"/>Email</li>
            </ul>
        </div>
        <div class="column">
            <p>Social Media Links</p>
            <ul>
                <li><a href="/facebook" >Facebook</a></li>
                <li><a href="/instagram">Instagram</a></li>
            </ul>
        </div>
    </footer>
 )
 }

export default Footer;