import React from "react";

const Header=()=>{
    return(
        <header className="header-section">
                <div className="header-content">
                    <div className="text-content">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Welcome to Little Lemon, where every dish tells a story of sun-soak ed shores and centuries-old culinary traditions. Situated in the heart of the city, our Mediterranean restaurant is a haven for food lovers seeking a taste of the vibrant flavours and warm hospitality of the region.</p>
                        <button className="reserve-table">Reserve a Table</button>
                    </div>
                    <div class="image-content">
                        <img src={require("./restauranfood.jpg")} alt="Restaurant"></img>
                    </div>
                </div>
        </header>
    )
}
export default Header;