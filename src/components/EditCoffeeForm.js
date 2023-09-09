import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
    const { coffee } = props;

    function handleEditCoffeeFormSubmission(event) {
        event.preventDefault();
        props.onEditCoffee({coffeeName: event.target.coffeeName.value,
            coffeeRoast: event.target.coffeeRoast.value,
            coffeeFlavor: event.target.coffeeFlavor.value,
            coffeeFarm: event.target.coffeeFarm.value,
            coffeeOrigin: event.target.coffeeOrigin.value,
            coffeeMethod: event.target.coffeeMethod.value,
            coffeePrice: event.target.coffeePrice.value,
            qty: event.target.qty.value,
            id: coffee.id});
    }
    return (
        <React.Fragment>
            <ReusableForm
            formSubmissionHandler={handleEditCoffeeFormSubmission}
            buttonText="Update Coffee"/>
        </React.Fragment>
    );
}

EditCoffeeForm.PropTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func
}

export default EditCoffeeForm;