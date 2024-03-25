import React from "react";

const Main = () => {
    return (
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
    );
};

export default Main;
