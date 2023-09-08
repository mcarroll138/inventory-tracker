import React from "react";
import Header from "./Header"; 
import CoffeeControl from "./CoffeeControl";

function App(){
    
    return (
        <React.Fragment>
            <Header />
            
          <CoffeeControl />
        </React.Fragment>
    );
}

export default App;



// const coffeeName = "Colombia Viviana Realpe";
// const coffeeRoast = "light";
// const coffeeFlavor = "Peach, Grapefruit, Rose";
// const coffeeFarm = "Los Nogales";
// const coffeeOrigin = "Colombia";
// const coffeeMethod = "Fully Washed & Dried on Raised Beds";
// const coffeePrice = "$16.00";
// const qty = 130;
// <h3>Availible Beans:</h3>
// <hr/>
// <h3>Name: {coffeeName}</h3>
// <h3>Roast Level: {coffeeRoast}</h3>
// <h3>Flavor Notes: {coffeeFlavor}</h3>
// <h3>Farm: {coffeeFarm}</h3>
// <h3>Origin: {coffeeOrigin}</h3>
// <h3>Processing Method: {coffeeMethod}</h3>
// <h3>Price: {coffeePrice}</h3>
// <h3>Quantity: {qty}</h3>