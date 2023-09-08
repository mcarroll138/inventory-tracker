import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
     return (
        <React.Fragment>
            <h3>Name: {props.coffeeName}</h3>
            <h3>Roast Level: {props.coffeeRoast}</h3>
            <h3>Flavor Notes: {props.coffeeFlavor}</h3>
            <h3>Farm: {props.coffeeFarm}</h3>
            <h3>Origin: {props.coffeeOrigin}</h3>
            <h3>Processing Method: {props.coffeeMethod}</h3>
            <h3>Price: {props.coffeePrice}</h3>
            <h3>Quantity: {props.qty} lbs</h3>
            <hr/>
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
    coffeePrice: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired
}

export default Coffee;