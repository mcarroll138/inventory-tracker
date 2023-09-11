import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";
import { useState } from "react";

function NewCoffeeForm(props) {
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
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add New Coffee"
      />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};

export default NewCoffeeForm;
