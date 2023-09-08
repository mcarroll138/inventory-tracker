import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props){
    return (
        <React.Fragment>
            <h2>Current Offerings:</h2>
            <hr/>
            {props.coffeeList.map((coffee) =>
            <Coffee 
            whenCoffeeClicked = { props.onCoffeeSelection }
            coffeeName={coffee.coffeeName}
            coffeeRoast={coffee.coffeeRoast}
            // coffeeFlavor={coffee.coffeeFlavor}
            // coffeeFarm={coffee.coffeeFarm}
            // coffeeOrigin={coffee.coffeeOrigin}
            // coffeeMethod={coffee.coffeeMethod}
            coffeePrice={coffee.coffeePrice}
            qty={coffee.qty}
            id={coffee.id}
            key={coffee.id}/>
            )}
        </React.Fragment>
        );
    }
    
    CoffeeList.propTypes = {
        coffeeList: PropTypes.array,
        onCoffeeSelection: PropTypes.func
    };
    
    export default CoffeeList;
    