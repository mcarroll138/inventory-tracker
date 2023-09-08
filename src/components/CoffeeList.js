import React from "react";
import Coffee from "./Coffee";

const mainCoffeeList = [
    {
        coffeeName :"Colombia Viviana Realpe",
        coffeeRoast: "light",
        coffeeFlavor: "Peach, Grapefruit, Rose",
        coffeeFarm: "Los Nogales",
        coffeeOrigin: "Colombia",
        coffeeMethod: "Fully Washed & Dried on Raised Beds",
        coffeePrice: "$16.00",
        qty: 130
        },
    {
        coffeeName :"Colombia",
        coffeeRoast: "medium",
        coffeeFlavor: "Strawberry, Chocolate",
        coffeeFarm: "Los Nogales",
        coffeeOrigin: "Colombia",
        coffeeMethod: "Fully Washed",
        coffeePrice: "$26.00",
        qty: 130
    }
]

function CoffeeList(){
    return (
        <React.Fragment>
            <h2>Current Offerings:</h2>
            <hr/>
            {mainCoffeeList.map((coffee, index) =>
            <Coffee coffeeName={coffee.coffeeName}
                coffeeRoast={coffee.coffeeRoast}
                coffeeFlavor={coffee.coffeeFlavor}
                coffeeFarm={coffee.coffeeFarm}
                coffeeOrigin={coffee.coffeeOrigin}
                coffeeMethod={coffee.coffeeMethod}
                coffeePrice={coffee.coffeePrice}
                qty={coffee.qty}
                key={index}/>
            )}
        </React.Fragment>
        );
    }
    
    export default CoffeeList;
    // <React.Fragment>
    // <Coffee 
    // coffeeName="Colombia Viviana Realpe"
    // coffeeRoast="light"
    // coffeeFlavor="Peach, Grapefruit, Rose"
    // coffeeFarm="Los Nogales"
    // coffeeOrigin="Colombia"
    // coffeeMethod="Fully Washed & Dried on Raised Beds"
    // coffeePrice="16.00"
    // qty="130"/>
    // </React.Fragment>
    // //props are name, roast, flavor, etc