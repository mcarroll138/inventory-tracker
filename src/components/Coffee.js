import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
     return (
        <React.Fragment>
            <div onClick={() => props.whenCoffeeClicked(props.id)}>
            <h3>Name: {props.coffeeName}</h3>
            <h3>Roast Level: {props.coffeeRoast}</h3>
            <h3>Price: {props.coffeePrice}</h3>
            <h3>Quantity: {props.qty} lbs</h3>
            <hr/>
            </div>
        </React.Fragment>
    );
}

Coffee.propTypes = {
    coffeeName: PropTypes.string.isRequired,
    coffeeRoast: PropTypes.string.isRequired,
    coffeeFlavor: PropTypes.string.isRequired,
    coffeeFarm: PropTypes.string.isRequired,
    coffeeOrigin: PropTypes.string.isRequired,
    coffeeMethod: PropTypes.string.isRequired,
    coffeePrice: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenCoffeeClicked: PropTypes.func
};

export default Coffee;