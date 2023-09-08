import React from "react";
import Coffee from "./Coffee";

function CoffeeList(){
    return (
        <React.Fragment>
        <Coffee 
        coffeeName="Colombia Viviana Realpe"
        coffeeRoast="light"
        coffeeFlavor="Peach, Grapefruit, Rose"
        coffeeFarm="Los Nogales"
        coffeeOrigin="Colombia"
        coffeeMethod="Fully Washed & Dried on Raised Beds"
        coffeePrice="16.00"
        qty="130"/>
        </React.Fragment>
        //props are name, roast, flavor, etc
    );
}

export default CoffeeList;