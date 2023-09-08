import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewCoffeeForm(props){
    function handleNewCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onNewCoffeeCreation({
            coffeeName: event.target.coffeeName.value,
            coffeeRoast: event.target.coffeeRoast.value,
            coffeeFlavor: event.target.coffeeFlavor.value,
            coffeeFarm: event.target.coffeeFarm.value,
            coffeeOrigin: event.target.coffeeOrigin.value,
            coffeeMethod: event.target.coffeeMethod.value,
            coffeePrice: event.target.coffeePrice.value,
            qty: event.target.qty.value,
            id: v4 ()
        });
    }
    return (
        <React.Fragment>
            <form onSubmit={handleNewCoffeeFormSubmission}>
                <input
                type="text"
                name="coffeeName"
                placeholder="Coffee Name"/>
                <input
                type="text"
                name="coffeeRoast"
                placeholder="Roast Level"/>
                <input
                type="text"
                name="coffeeFlavor"
                placeholder="Tasting Notes"/>
                <input
                type="text"
                name="coffeeFarm"
                placeholder="Farm"/>
                <input
                type="text"
                name="coffeeOrigin"
                placeholder="Origin"/>
                <input
                type="text"
                name="coffeeMethod"
                placeholder="Method"/>
                <input
                type="text"
                name="coffeePrice"
                placeholder="Price per pound"/>
                <input
                type="text"
                name="qty"
                placeholder="Quantity"/>
                <button type="submit">Add Coffee</button>
                 </form>
        </React.Fragment>
    );
}

NewCoffeeForm.propTypes = {
    onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;