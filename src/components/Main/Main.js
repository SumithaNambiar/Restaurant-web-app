
function Main(){

    return(
        <div className="home">
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

        <main>
            <section>
                <div className="section-heading">
                    <h2>This Week's Specials!</h2>
                    <button className="order-online-btn">Online Order</button>
                </div>

                <div className="row">
                    <div className="dish-card">
                    <img src={require("./greek salad.jpg")} alt="Greek Salad"/>
                    <div className="dish-info">
                        <div className="dish-title">
                            <h2>Greek Salad</h2>
                            <span className="price">$10.00</span>
                        </div>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button className="order-btn">Order a Delivery</button>
                    </div>
                </div>

                <div className="dish-card">
                    <img src={require("./bruchetta.svg").default} alt="Bruchetta" sizes="100%"/>
                    <div className="dish-info">
                        <div className="dish-title">
                            <h2>Bruchetta</h2>
                            <span className="price">$12.00</span>
                        </div>
                        <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <button className="order-btn">Order a Delivery</button>
                    </div>
                </div>

                <div className="dish-card">
                    <img src={require("./lemon dessert.jpg")} alt="Lemon Dessert"/>
                    <div className="dish-info">
                        <div className="dish-title">
                            <h2>Lemon Dessert</h2>
                            <span className="price">$5.00</span>
                            </div>
                                <p>This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.</p>
                                <button className="order-btn">Order a Delivery</button>
                            </div>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div className="column">
                <img src={require("./Logo.svg").default} alt="Logo"></img>
            </div>
            <div className="column">
                <p>Doormat Navigation</p>
                <ul>
                 <li><a href="/home">Home</a></li>
                 <li><a href="/about">About</a></li>
                 <li><a href="/menu">Menu</a></li>
                 <li><a href="/bookingPage">Booking Page</a></li>
                 <li><a href="/orderOnline">Order Online</a></li>
                 <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className="column">
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li><a href="/email"/>Email</li>
                </ul>
            </div>
            <div className="column">
                <p>Social Media Links</p>
                <ul>
                    <li><a href="/facebook" >Facebook</a></li>
                    <li><a href="/instagram">Instagram</a></li>
                </ul>
            </div>
        </footer>
    </div>
    )
}

export default Main;