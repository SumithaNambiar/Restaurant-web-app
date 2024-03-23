import React from "react";

const Main = ()=>{
    return(
<main>
    <div>
    <h1>This Week's Specials!</h1>
    <button>Online Order</button>
    </div>
    <section>
        <article>
            <img src="src/assets/icons_assets/greek salad.jpg" alt="Greek Salad"/>
        <h2>Greek Salad</h2>
        <h4>$ 10.00</h4>
        <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <p><button>Order a delivery </button></p>
        </article>

        <article>
        <img src="src/assets/icons_assets/bruchetta.svg" alt="Bruchetta"/>
        <h2>Bruchetta</h2>
        <h4>$ 12.00</h4>
        <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        <p><button>Order a delivery </button></p>
        </article>

        <article>
        <img src="src/assets/icons_assets/lemon dessert.jpg" alt="Lemon Dessert"/>
        <ul>
          <li> <h2>Lemon Dessert</h2></li>
          <li><h4>$ 5.00</h4></li>
        </ul>
        <p>This comes straight from grandma’s recipe book. every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <p><button>Order a delivery </button></p>
        </article>
    </section>
</main>
    )
}

export default Main;